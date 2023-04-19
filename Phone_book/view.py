import text_fields as txt

def main_menu () -> int:
    print (txt.main_menu)
    while True:
        choice = input (txt.choice_menu)
        if choice.isdigit () and 0 < int (choice) < 9:
            return int (choice)


def show_contacts (book: list [dict], message: str) -> None:
    print ('\n' + '-' * 70)
    if book: 
        for contact in book:
            print (f'{contact.get ("name"):<20}'
                    f'{contact.get ("phone"):<20}'
                    f'{contact.get ("comment"):<20}')
    else:
        print (message)
    print ('-' * 70 + '\n')


def print_message (message: str) -> None:
    print ('\n' + '-' * len (message))
    print (message)
    print ('-' * len (message) + '\n')


def new_contact () -> dict [str, str]:
    print ()
    name = input (txt.new_name)
    phone = input (txt.new_phone)
    comment = input (txt.new_comment)
    return {'name': name, 'phone': phone, 'comment': comment}

def enter_keyword () -> str:
    print ()
    key_word = input (txt.input_keyword)
    return key_word
phone_book = []         # глобальная переменная список.
original_book = []
PATH = 'PhoneBook.txt'

def open_file ():
    global original_book
    phone_book.clear ()
    with open (PATH, 'r', encoding = 'UTF-8') as file:
        data = file.readlines ()                        # открываем файл в режиме построчной записи
    for contact in data:                                  
        contact = contact.strip ().split (';')             # строка
        phone_book.append ({'name': contact [0],            # словарь
                            'phone': contact [1],
                            'comment': contact [2]})
    original_book = phone_book.copy ()


def save_file () -> None:
    global original_book 
    save_book = []
    for contact in phone_book:
        save_book.append (';'.join (contact.values ()))
    data = '\n'.join (save_book)
    with open (PATH, 'w', encoding='UTF-8') as file:
        file.write (data)


def get_phone_book () -> list [dict]:
    return phone_book


def add_contact (new_contact: dict [str, str]) -> None:
    phone_book.append (new_contact)


def find_contact (word: str) -> list [dict [str, str]]:
    result = []
    for contact in phone_book:
        for field in contact.values ():
            if word in field:
                result.append (contact)
                break
    return result
        

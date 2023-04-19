import model
import view
import text_fields as txt

def start ():
    while True:
        choice = view.main_menu ()
        match choice:
            case 1:
                model.open_file ()
                view.print_message (txt.successful_open)
            case 2:
                model.save_file ()
                view.print_message (txt.successful_save)
            case 3:
                view.show_contacts (model.get_phone_book (), txt.empty_list_or_not_open_file)
            case 4:
                new_contact = view.new_contact ()
                model.add_contact (new_contact)
                view.print_message (txt.contact_saved (new_contact.get ('name')))
            case 5: 
                word = view.enter_keyword ()
                result = model.find_contact (word)
                view.show_contacts (result, txt.not_found (word))
            case 6:
                if model.original_book != model.original_book:
                    if view.confirm (txt.no_saved_book):
                        model.save_file ()
                view.print_message (txt.goodbye)
                exit ()

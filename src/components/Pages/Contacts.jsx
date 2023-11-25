import { useEffect} from "react";
import { getContactsThunks } from "redux/operations";
import { useDispatch } from "react-redux";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";

const Contacts = ()=>{
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunks());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />


      <ContactList />
    
    </div>
  );
}

 export default Contacts;
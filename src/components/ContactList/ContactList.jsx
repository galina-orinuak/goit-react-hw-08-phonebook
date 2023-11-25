import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteContactsThunks } from 'redux/operations';
import { getFilterValue, getContacts } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactItem}>
      {contact.name}: {contact.number}{' '}
      <button
        className={styles.deleteBtn}
        onClick={() => dispatch(deleteContactsThunks(contact.id))}
      >
        <RiDeleteBin6Line />
      </button>
    </li>
  );
};

export const ContactList = () => {
  const { items } = useSelector(getContacts);

  const searchContacts = useSelector(getFilterValue);

  const filterContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(searchContacts.toLowerCase().trim())
  );

  

  return (
    <>
      <h2>Contacts</h2>
      <Filter/>
      <ul className={styles.contactList}>
        {filterContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

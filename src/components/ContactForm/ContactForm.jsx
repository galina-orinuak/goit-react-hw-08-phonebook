import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContactsThunks } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);


  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    if (
      items.find(
        contact =>
          contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
      )
    ) {
      alert(`${form.elements.name.value} is already in contacts`);
      return;
    }

    dispatch(
      addContactsThunks({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <div>

      <h2 className={styles.contactTitle}>PHONE BOOK</h2>
      <form
        className={styles.contactForm}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label className={styles.formLabel}>
          
          Name
          <input
            className={styles.formInput}
            type="text"
            name="name"
            required
            placeholder="enter name"
          />
        </label>
        <label className={styles.formLabel}>
          Number
          <input
            className={styles.formInput}
            type="tel"
            name="number"
            required
            length="7"
            placeholder="enter phone"
          />
        </label>
        <button className={styles.submitBtn} type="submin">
          Add Contact
        </button>
      </form>
    </div>
  );
};

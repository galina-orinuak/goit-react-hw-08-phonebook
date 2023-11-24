import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';


import { addContactsThunks } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();

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

    dispatch(addContactsThunks({ id, name, number }));
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>

      <h2>PHONE BOOK</h2>
      <form
        className={styles.contactForm}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label className={styles.formLabel}>
          {' '}
          Name{' '}
          <input
            className={styles.formInput}
            type="text"
            name="name"
            required
            placeholder="enter name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.formLabel}>
          Number{' '}
          <input
            className={styles.formInput}
            type="tel"
            name="number"
            required
            length="7"
            placeholder="enter phone"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={styles.submitBtn} type="submin">
          Add Contact
        </button>
      </form>
    </div>
  );
};

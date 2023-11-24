import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/AuthOperations';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();

    const newUser = {
      name: evt.target.elements.name.value,
      email: evt.target.elements.email.value,
      password: evt.target.elements.password.value,
    };

    dispatch(registerThunk(newUser))
      .unwrap()
      .then(() => {
        evt.target.reset();
      })
      .catch(() => alert(`Incorrect login or password. Try again`));
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        <input
          type="text"
          className={styles.input}
          name="name"
          placeholder="Enter Your Name"
          required
          pattern="^[a-zA-Z]+\s[a-zA-Z]+$"
        />
      </label>
      <label className={styles.label}>
        <input
          type="email"
          className={styles.input}
          name="email"
          placeholder="Enter Your Email"
          required

        />
      </label>

      <label className={styles.label}>
        <input
          type="password"
          className={styles.input}
          name="password"
          placeholder="Enter Your Password"
          required
          minLength="8"
        />
      </label>
      <button type='button' className={styles.btn}>Sign Up</button>
    </form>
  );
};

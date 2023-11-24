import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/AuthOperations';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();

    const user = {
      email: evt.target.elements.email.value,
      password: evt.target.elements.password.value,
    };

    dispatch(loginThunk(user))
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
      <button type="button" className={styles.btn}>
        Login
      </button>
    </form>
  );
};

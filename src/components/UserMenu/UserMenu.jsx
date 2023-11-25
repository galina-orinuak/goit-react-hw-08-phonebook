import { logOutThunk} from 'redux/AuthOperations';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UserMenu.module.css';
import { getAuth } from 'redux/selectors';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(getAuth)
    const handleClick = () => {
        dispatch(logOutThunk());
      };
      return (
        <div className={styles.userMenu}>
        <p className={styles.userText}>Welcome, {user.name.toUpperCase()}</p>
        <button className={styles.btn} type='button' onClick={handleClick}>
            Logout
        </button>
        </div>
      )
};

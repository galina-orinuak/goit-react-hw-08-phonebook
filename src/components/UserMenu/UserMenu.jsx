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
        <p className={styles.userText}>{user.name}</p>
        <button className={styles.btn} type='button' onClick={handleClick}>
            LOGOUT
        </button>
        </div>
      )
};

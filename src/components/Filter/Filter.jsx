import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const searchContacts = useSelector(getFilterValue);
  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          className={styles.filterInput}
          onChange={changeFilter}
          name="filter"
          value={searchContacts}
        />
      </label>
    </>
  );
};

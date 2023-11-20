import { useDispatch } from 'react-redux'
import styles from './Filter.module.css'
import { setFilter } from 'redux/filterSlice';


export const Filter =() => {
const dispatch = useDispatch();
// const value = useSelector(state => state.filter.value); 

    const changeFilter = event => {
        dispatch(setFilter(event.currentTarget.value));
      };

      
    return (
    <>
    <label className={styles.filterLabel}>Find contacts by name
    <input className={styles.filterInput} onChange={changeFilter}/>
    </label>
    
    </>)
}
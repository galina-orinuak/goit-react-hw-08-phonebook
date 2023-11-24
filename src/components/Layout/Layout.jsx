import { useSelector } from "react-redux";
import { getAuth } from "redux/selectors";
import { UserMenu } from "components/UserMenu/UserMenu";
import styles from "./Layout.module.css"
import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { GiRotaryPhone } from 'react-icons/gi';


export const Layout =()=>{
    const { isLoggedIn } = useSelector(getAuth);

    return (
        <div>
            <header className={styles.header}>
<nav>
    <ul className={styles.list}>
        <li className={styles.item}>
        <GiRotaryPhone className={styles.phoneIcon}/>
        <NavLink className={styles.itemLink} to="/">PHONEBOOK</NavLink>
        </li>
        {isLoggedIn && (
              <li className={styles.nav_item}>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            )}
    </ul>
    </nav>
    {isLoggedIn ? (
          <UserMenu />
        ) : (
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <NavLink  className={styles.itemLink} to="/register">Register</NavLink>
            </li>
            <li className={styles.list_item}>
              <NavLink className={styles.itemLink} to="/login">Login</NavLink>
            </li>
          </ul>
        )}
            </header>
            <main className={styles.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
        </div>
    )
}
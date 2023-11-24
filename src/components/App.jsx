import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Contacts } from './Pages/Contacts';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { currentUserThunk } from 'redux/AuthOperations';
import { getAuth } from 'redux/selectors';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';


export const App = () => {
  const { isLoading } = useSelector(getAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return (
    <div
      style={{
        width: "auto",
        margin: '1rem',
        marginBottom: '15px',
        padding: '10px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {isLoading && <div>Loading...</div>}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

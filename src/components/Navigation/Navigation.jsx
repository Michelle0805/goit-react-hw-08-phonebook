import { NavLink } from 'react-router-dom';
import { useAuth } from '../../redux/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav>
      {isLoggedIn ? (
        <NavLink to="/logout" onClick={handleLogout} className={css.link}>
          Log Out
        </NavLink>
      ) : (
        <div className={css.nav}> 
          <NavLink to="/register" className={({ isActive}) => (isActive? css.linkActive : css.link)}>Register</NavLink>
          <NavLink to="/login" className={({ isActive}) => (isActive? css.linkActive : css.link)}>Log In</NavLink>
        </div>
      )}
    </nav>
  );
};
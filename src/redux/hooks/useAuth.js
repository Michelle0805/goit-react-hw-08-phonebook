import { useSelector } from 'react-redux';
// prettier-ignore
import { selectUser, selectIsLoggedIn, selectIsRefreshing, selectToken } from '../../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);
 

  return {
    isLoggedIn,
    user,
    isRefreshing,
    token
  };
};
import { useNavigate } from 'react-router-dom';
import { deleteAllCookies } from '../../utils/cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkLogin } from '../../actions/login';

function LogOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  deleteAllCookies();

  useEffect(() => {
    navigate('/form-login');
    dispatch(checkLogin(false));
  }, []);
  return <>LogOut</>;
}

export default LogOut;

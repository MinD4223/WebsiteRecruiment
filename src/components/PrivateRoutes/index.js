import { Outlet } from 'react-router-dom';
import LayoutAdmin from '../LayoutAdmin';
import LayoutDefault from '../LayoutDefault';
import Error from '../../pages/Error';
import { getCookie } from '../../utils/cookie';
function PrivateRoutes() {
  const token = getCookie('token');
  return <>{token ? <LayoutAdmin /> : <Error />}</>;
}

export default PrivateRoutes;

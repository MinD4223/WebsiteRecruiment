import LayoutDefault from '../components/LayoutDefault';
import LogOut from '../components/LogOut';
import PrivateRoutes from '../components/PrivateRoutes';
import AdminJob from '../pages/AdminJob';
import CreateAdminJob from '../pages/AdminJob/CreateAdminJob';
import DetailAdminJob from '../pages/AdminJob/DetailAdminJob';
import AdminManageCV from '../pages/AdminManageCV';
import AdminManageInterview from '../pages/AdminManageInterview';
import Process from '../pages/Process';
import DashBoard from '../pages/DashBoard';
import FormApply from '../pages/FormApply';
import FormLogin from '../pages/FormLogin';
import FormRegister from '../pages/FormRegister';
import Home from '../pages/Home';
import JobDetail from '../pages/JobDetail';
import Jobs from '../pages/Jobs';

export const routes = [
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'jobs',
        element: <Jobs />,
      },
      {
        path: 'jobs/:id',
        element: <JobDetail />,
      },
      {
        path: 'form-apply/:id',
        element: <FormApply />,
      },
      {
        path: 'process',
        element: <Process />,
      },
      {
        path: 'form-login',
        element: <FormLogin />,
      },
      {
        path: 'form-register',
        element: <FormRegister />,
      },
      {
        path: 'log-out',
        element: <LogOut />,
      },
    ],
  },

  {
    element: <PrivateRoutes />,
    children: [
      {
        path: 'admin-dashboard',
        element: <DashBoard />,
      },
      {
        path: 'admin-jobs',
        element: <AdminJob />,
      },
      {
        path: 'create-admin-jobs',
        element: <CreateAdminJob />,
      },
      {
        path: 'detail-admin-job/:id',
        element: <DetailAdminJob />,
      },
      {
        path: 'admin-manage-cv',
        element: <AdminManageCV />,
      },
      {
        path: 'admin-manage-interview',
        element: <AdminManageInterview />,
      },
    ],
  },
];

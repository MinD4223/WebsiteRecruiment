import {
  LineChartOutlined,
  MailOutlined,
  PhoneOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function MenuSider() {
  const items = [
    {
      label: <Link to='admin-dashboard'>DashBoard</Link>,
      icon: <LineChartOutlined />,
      key: 'menu-1',
      // children: [
      //   {
      //     label: 'Menu1-1',
      //     key: 'menu-1-1',
      //   },
      // ],
    },
    {
      label: <Link to='admin-jobs'>Job Manage</Link>,
      icon: <ProfileOutlined />,
    },
    {
      label: <Link to='admin-manage-cv'>CV Manage</Link>,
      icon: <MailOutlined />,
    },
    {
      label: <Link to='admin-manage-interview'>Interview Manage</Link>,
      icon: <PhoneOutlined />,
    },
  ];
  return (
    <>
      <Menu mode='inline' items={items} />
    </>
  );
}

export default MenuSider;

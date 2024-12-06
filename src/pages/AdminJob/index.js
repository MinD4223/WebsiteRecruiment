import { Button, Space, Table, Tag } from 'antd';
import './AdminJob.css';
import {
  ArrowLeftOutlined,
  EyeOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllJobs } from '../../services/serviceJob';
import EditAdminJob from './EditAdminJob';
import DeleteAdminJob from './DeleteAdminJob';
function AdminJob() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const response = await getAllJobs();
    setData(response);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  };

  const columns = [
    {
      title: 'Name job',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (_, record) =>
        (record.tags || []).map((item, index) => {
          return (
            <Tag className='mb-5' color='blue' key={index}>
              {item}
            </Tag>
          );
        }),
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
    },
    {
      title: 'Time',
      key: 'time',
      width: 250,
      render: (_, record) => (
        <>
          <small>Time create: {record.createAt}</small>
          <br />
          <small>Time update: {record.updateAt}</small>
        </>
      ),
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, record) => (
        <>
          {record.status == true ? (
            <Tag color='green'>Open</Tag>
          ) : (
            <Tag color='red'>Close</Tag>
          )}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          {' '}
          <Link to={`/detail-admin-job/${record.id}`}>
            <Button icon={<EyeOutlined />}></Button>
          </Link>
          <EditAdminJob record={record} handleReload={handleReload} />
          <DeleteAdminJob record={record} handleReload={handleReload} />
        </>
      ),
    },
  ];
  return (
    <>
      <div className='admin-job'>
        <div className='admin-job__title'>
          <div className='admin-job__button-return'>
            <Button
              onClick={() => {
                navigate('/admin-dashboard');
              }}
            >
              <ArrowLeftOutlined />
              Return
            </Button>
          </div>
          <div className='admin-job__name'>List job</div>
          <div className='admin-job__button-add'>
            <Button
              onClick={() => {
                navigate('/create-admin-jobs');
              }}
            >
              <PlusOutlined /> Add new job
            </Button>
          </div>
        </div>
        <div className='admin-table'>
          <div className='admin-table__size'>
            <Table
              dataSource={data.map((item, index) => ({
                ...item,
                key: item.id || index,
              }))}
              columns={columns}
              pagination={{ pageSize: 5 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminJob;

import { Button, message, Space, Table, Tag } from 'antd';
// import './AdminJob.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllJobs, getDetailJob } from '../../services/serviceJob';
import { getListCV } from '../../services/serviceCV';
import CVName from '../../components/CVName';
import DetailCV from './DetailCV.js';
import BookInterview from './BookInterview/index.js';

function AdminManageCV() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const fetchApi = async () => {
    const response = await getListCV();
    setData(response);
    if (response.idJob) {
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  };

  const handleInfo = () => {
    messageApi.success('Schedule Interview success');
  };

  const columns = [
    {
      title: 'Name job',
      dataIndex: 'idJob',
      key: 'idJob',
      render: (_, record) => {
        return <CVName id={record.idJob} />;
      },
    },
    {
      title: 'Name candidate',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
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
      key: 'statusRead',
      dataIndex: 'statusRead',
      render: (_, record) => (
        <>
          {record.statusRead == true ? (
            <Tag color='green'>Viewed</Tag>
          ) : (
            <Tag color='gray'>Not View</Tag>
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
          <DetailCV record={record} />
          <BookInterview record={record} handleInfo={handleInfo} />
          {/* <EditAdminJob record={record} handleReload={handleReload} />
          <DeleteAdminJob record={record} handleReload={handleReload} /> */}
        </>
      ),
    },
  ];
  return (
    <>
      {contextHolder}
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
          <div className='admin-job__name'>List Candidate</div>
          <div className='admin-job__button-add'>
            <div className='admin-job__space'></div>
          </div>
        </div>
        <div className='admin-table'>
          <div className='admin-table__size'>
            <Table
              dataSource={data
                .filter((item) => item.statusApply === 'Apply')
                .map((item, index) => ({
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

export default AdminManageCV;

import { Button, message, Space, Table, Tag } from 'antd';
// import './AdminJob.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllJobs, getDetailJob } from '../../services/serviceJob';
import { getListCV } from '../../services/serviceCV';
import CVName from '../../components/CVName';
import ScoreInterview from './ScoreInterview';

function AdminManageInterview() {
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
      title: 'Score',
      key: 'scoreInterview',
      width: 100,
      render: (_, record) => (
        <>
          <Tag color='green'>{record.scoreInterview}</Tag>
        </>
      ),
    },
    {
      title: 'Status',
      key: 'statusApply',
      dataIndex: 'statusApply',
      render: (_, record) => (
        <>
          {record.statusApply == 'Interview' && (
            <Tag color='blue'>Interview</Tag>
          )}
          {record.statusApply == 'Pass' && <Tag color='green'>Pass</Tag>}
          {record.statusApply == 'Not Pass' && <Tag color='red'>Not Pass</Tag>}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <ScoreInterview record={record} handleReload={handleReload} />
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
          <div className='admin-job__name'>List Interview</div>
          <div className='admin-job__button-add'>
            <div className='admin-job__space'></div>
          </div>
        </div>
        <div className='admin-table'>
          <div className='admin-table__size'>
            <Table
              dataSource={data
                .filter((item) =>
                  ['Interview', 'Pass', 'Not Pass'].includes(item.statusApply)
                )
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

export default AdminManageInterview;

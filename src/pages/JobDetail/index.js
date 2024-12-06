import { Button, Col, notification, Row } from 'antd';
import './JobDetail.css';
import {
  ClockCircleOutlined,
  FolderOpenOutlined,
  LeftCircleOutlined,
} from '@ant-design/icons';
import CardItem from '../../components/CardItem';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailJob } from '../../services/serviceJob';
import { getCookie } from '../../utils/cookie';
import { getDetailAccount } from '../../services/serviceAccount';
import { createCV } from '../../services/serviceCV';
import { getTimeCurrent } from '../../utils/getTime';
function JobDetail() {
  const params = useParams();
  const [job, setJob] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const token = getCookie('token');
  const [noti, contextHolder] = notification.useNotification();
  useEffect(() => {
    const fetchApi = async () => {
      const account = await getDetailAccount(token);
      const response = await getDetailJob(params.id);
      setJob(response);
      setUser(account[0]);
    };
    fetchApi();
  }, []);

  const onClick = async () => {
    const options = {
      statusRead: false,
      idJob: params.id,
      idUser: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      experience: user.experience,
      description: user.description,
      skill: user.skill,
      createAt: getTimeCurrent(),
      createUpdate: '',
      statusApply: 'Apply',
      dateInterview: '',
      scoreInterview: 0,
    };
    if (token) {
      const response = await createCV(options);
      if (response) {
        noti.success({
          message: 'Send CV success',
          description: 'The recruiment will send you resullt early',
        });
        setTimeout(() => {
          navigate('/process');
        }, 2000);
      }
    } else {
      navigate(`/form-login`);
    }
  };

  return (
    <>
      {contextHolder}
      <div className='job-detail'>
        <div className='job-detail__title'>
          <div className='job-detail__column-left'>
            <div className='job-detail__action'>
              <Button>
                <LeftCircleOutlined />
                Back
              </Button>
            </div>
            <div className='job-detail__job-name'>{job.name}</div>
            <div className='job-detail__infor'>
              <p className='job-detail__item'>
                <ClockCircleOutlined /> Time
              </p>
              <p className='job-detail__item'>
                <FolderOpenOutlined /> Level
              </p>
            </div>
          </div>
          <div className='job-detail__column-right'>
            <Button className='job-detail__status' onClick={onClick}>
              Apply
            </Button>
          </div>
        </div>
        {/* Description */}
        <div className='job-detail__description'>
          <p className='job-detail__name-category'>Detail jobs</p>
          <div className='job-detail__item-description'>
            <p className='job-detail__description-name'>1. Job Description</p>
            <ul className='job-detail__list-description'>
              <li>
                Work with stakeholders to identify and clear functional
                requirements to ensure that are understood by the development
                team.
              </li>
              <li>
                Stay up-to-date on the latest process and IT advancements to
                automate and modernize systems.
              </li>
              <li>
                Perform requirements analysis. Constantly be on the lookout for
                ways to improve the existing product, discover issues and
                deliver better value to the end-user. Perform the integration
                test to control product quality Help design, document and
                maintain system processes
              </li>
            </ul>
          </div>
          <div className='job-detail__item-description'>
            <p className='job-detail__description-name'>2. Job Requirements</p>
            <ul className='job-detail__list-description'>
              <li>
                Work with stakeholders to identify and clear functional
                requirements to ensure that are understood by the development
                team.
              </li>
              <li>
                Stay up-to-date on the latest process and IT advancements to
                automate and modernize systems.
              </li>
              <li>
                Perform requirements analysis. Constantly be on the lookout for
                ways to improve the existing product, discover issues and
                deliver better value to the end-user. Perform the integration
                test to control product quality Help design, document and
                maintain system processes
              </li>
            </ul>
          </div>
          <div className='job-detail__item-description'>
            <p className='job-detail__description-name'>3. Benefits</p>
            <ul className='job-detail__list-description'>
              <li>
                Work with stakeholders to identify and clear functional
                requirements to ensure that are understood by the development
                team.
              </li>
              <li>
                Stay up-to-date on the latest process and IT advancements to
                automate and modernize systems.
              </li>
              <li>
                Perform requirements analysis. Constantly be on the lookout for
                ways to improve the existing product, discover issues and
                deliver better value to the end-user. Perform the integration
                test to control product quality Help design, document and
                maintain system processes
              </li>
            </ul>
          </div>
          <div className='job-detail__description-action'>
            <Button className='job-detail__status-action' onClick={onClick}>
              Apply
            </Button>
          </div>
        </div>
        {/* Relate jobs */}
        <div className='job-detail__relate-jobs'>
          <p className='job-detail__name-category'>Relate jobs</p>
          <Row className='job-detail'>
            <Col span={8} className='card-item'>
              <CardItem />
            </Col>
            <Col span={8} className='card-item'>
              <CardItem />
            </Col>
            <Col span={8} className='card-item'>
              <CardItem />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default JobDetail;

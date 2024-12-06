import { Button, Col, Form, Input, Row, message } from 'antd';
import {
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './FormRegister.css';
import { generateToken } from '../../utils/generateToken';
import { checkExist, createAccount } from '../../services/serviceAccount';
import { useNavigate } from 'react-router-dom';

function FormRegister() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = async (values) => {
    const options = {
      ...values,
      token: generateToken(),
      isAdmin: false,
      isInformation: false,
      skill: '',
      experience: '',
      description: '',
    };
    const checkExistEmail = await checkExist('email', values.email);
    const checkExistPhone = await checkExist('phone', values.phone);

    if (checkExistEmail.length > 0) {
      messageApi.error('Email is existed');
    } else if (checkExistPhone.length > 0) {
      messageApi.error('Phone is existed');
    } else {
      const result = await createAccount(options);
      if (result) {
        navigate('/form-login');
      }
    }
  };
  return (
    <>
      {contextHolder}
      <Row>
        <Col className='form-apply-column__left' span={14}>
          <div className='form-login'>
            <p className='form-register-title'>Register</p>
            <Form onFinish={onFinish}>
              <Form.Item name={'name'}>
                <Input
                  className='form-apply__input'
                  size='large'
                  placeholder='User name...'
                  prefix={<UserOutlined />}
                />
              </Form.Item>
              <Form.Item name={'email'}>
                <Input
                  className='form-apply__input'
                  size='large'
                  placeholder='Email...'
                  prefix={<MailOutlined />}
                />
              </Form.Item>
              <Form.Item name={'phone'}>
                <Input
                  className='form-apply__input'
                  size='large'
                  placeholder='Phone...'
                  prefix={<PhoneOutlined />}
                />
              </Form.Item>
              <Form.Item name={'password'}>
                <Input.Password
                  className='form-apply__input'
                  size='large'
                  placeholder='Password...'
                  prefix={<KeyOutlined />}
                />
              </Form.Item>

              <Form.Item>
                <div className='button__apply'>
                  <Button type='primary' htmlType='submit'>
                    Register
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={10}>
          <div className='banner'>
            <img className='image-banner' src='./image/banner-form.png' />
            <div className='form-apply__banner-name'>MinD Career</div>
            <div className='form-apply__banner-slogan'>
              Change today - Value tomorrow
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default FormRegister;

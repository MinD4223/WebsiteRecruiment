import { Button, Col, Form, Input, message, Row, Upload } from 'antd';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import './FormLogin.css';
import { login } from '../../services/serviceAccount';
import { setCookie } from '../../utils/cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkLogin } from '../../actions/login';
function FormLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mess, contextHolder] = message.useMessage();
  const onFinish = async (values) => {
    const data = await login(values.email, values.password);
    if (data.length > 0) {
      const time = 1;
      setCookie('email', data[0].email, time);
      setCookie('token', data[0].token, time);
      setCookie('id', data[0].id, time);
      setCookie('role', data[0].isAdmin, time);
      dispatch(checkLogin(true));
      if (data[0].isInformation) {
        navigate('/');
      } else {
        navigate(`/form-apply/${data[0].id}`);
      }
    } else {
      mess.error('Plese check email or password again');
    }
  };

  return (
    <>
      {contextHolder}
      <Row>
        <Col className='form-apply-column__left' span={14}>
          <div className='form-login'>
            <p className='form-login-title'>Login</p>
            <Form onFinish={onFinish}>
              <Form.Item name={'email'}>
                <Input
                  className='form-apply__input'
                  size='large'
                  placeholder='Email...'
                  prefix={<UserOutlined />}
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
                    Login
                  </Button>
                </div>
              </Form.Item>
            </Form>
            <div>
              If you don't have account{' '}
              <Button
                onClick={() => {
                  navigate(`/form-register`);
                }}
              >
                Click here
              </Button>
            </div>
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

export default FormLogin;

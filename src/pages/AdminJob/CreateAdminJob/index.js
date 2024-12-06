import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input, Form, Row, Col, Select, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getTimeCurrent } from '../../../utils/getTime';
import { createJob } from '../../../services/serviceJob';
const { Option } = Select;

function CreateAdminJob() {
  const [noti, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    values.tags = Array.isArray(values.tags) ? values.tags : [values.tags];
    values.city = Array.isArray(values.city) ? values.city : [values.city];
    values.createAt = getTimeCurrent();
    values.status = true;
    const response = await createJob(values);
    if (response) {
      form.resetFields();
      noti.success({
        //type: 'success',
        message: 'Add new job success',
        description: 'You have added the new job',
      });
    } else {
      noti.error({
        //type: 'error',
        message: 'Add new job not success',
        description: 'Error in system, please try again',
      });
    }
  };

  return (
    <>
      {contextHolder}
      <div className='admin-job'>
        <div className='admin-job__title'>
          <div className='admin-job__button-return'>
            <Button
              onClick={() => {
                navigate('/admin-jobs');
              }}
            >
              <ArrowLeftOutlined />
              Return
            </Button>
          </div>
          <div className='admin-job__name'>Create job</div>
          <div className='admin-job__button-add'>
            <Button type='primary'>Save</Button>
          </div>
        </div>
        <div className='admin-table'>
          <div className='admin-table__size'>
            <Form onFinish={onFinish} form={form}>
              <Row>
                <Col span={24}>
                  <p className='admin-table__label'>Job name</p>
                  <Form.Item
                    name='name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input job name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <p className='admin-table__label'>Skill</p>
                  <Form.Item
                    mode='multiple'
                    name='tags'
                    rules={[
                      {
                        required: true,
                        message: 'Please input job name!',
                      },
                    ]}
                  >
                    <Select
                      mode='multiple'
                      placeholder='Select a option and change input text above'
                      allowClear
                    >
                      <Select.Option value='Wifi'>Wifi</Select.Option>
                      <Select.Option value='Nóng lạnh'>Nóng lạnh</Select.Option>
                      <Select.Option value='Điều hòa'>Điều hòa</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <p className='admin-table__label'>City</p>
                  <Form.Item
                    mode='multiple'
                    name='city'
                    rules={[
                      {
                        required: true,
                        message: 'Please input job name!',
                      },
                    ]}
                  >
                    <Select
                      mode='multiple'
                      placeholder='Select a option and change input text above'
                      allowClear
                    >
                      <Select.Option value='Wifi'>Wifi</Select.Option>
                      <Select.Option value='Nóng lạnh'>Nóng lạnh</Select.Option>
                      <Select.Option value='Điều hòa'>Điều hòa</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <p className='admin-table__label'>Salary</p>
                  <Form.Item
                    name='salary'
                    rules={[
                      {
                        required: true,
                        message: 'Please input job name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <p className='admin-table__label'>Description</p>
                  <Form.Item
                    name='description'
                    rules={[
                      {
                        required: true,
                        message: 'Please input job name!',
                      },
                    ]}
                  >
                    <Input.TextArea />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  Save
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAdminJob;

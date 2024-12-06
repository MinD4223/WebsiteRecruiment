import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Input, message, Modal, Row, Select, Switch } from 'antd';
import { useEffect, useState } from 'react';
import { Form } from 'antd';
import { getTimeCurrent } from '../../../utils/getTime';
import { updateJob } from '../../../services/serviceJob';

function EditAdminJob(props) {
  //onReload
  const { record, handleReload } = props;
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    form.setFieldValue(record);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleFinish = async (values) => {
    values.createAt = getTimeCurrent();
    const response = await updateJob(record.id, values);
    if (response) {
      form.resetFields();
      handleReload();
      setIsModalOpen(false);
      mess.open({
        type: 'success',
        content: 'Update job success',
      });
    } else {
      mess.open({
        type: 'error',
        content: 'Update job not success',
      });
    }
  };
  return (
    <>
      {contextHolder}
      <Button
        ghost
        type='primary'
        icon={<EditOutlined />}
        onClick={showModal}
      ></Button>

      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <h3>Edit Job</h3>
        <Form form={form} onFinish={handleFinish} initialValues={record}>
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
            <Col span={24}>
              <p className='admin-table__label'>Description</p>
              <Form.Item
                name='status'
                rules={[
                  {
                    required: true,
                    message: 'Please input job name!',
                  },
                ]}
              >
                <Switch size='small' />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
export default EditAdminJob;

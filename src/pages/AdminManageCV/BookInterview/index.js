import { CalendarOutlined } from '@ant-design/icons';
import { Button, DatePicker, Modal } from 'antd';
import { useState } from 'react';
import { changeStatusCV } from '../../../services/serviceCV';

function BookInterview(props) {
  const { record, handleInfo } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState();
  const onChange = (date, dateString) => {
    console.log(dateString);
    setDate(dateString);
  };

  const onClick = async () => {
    const options = {
      ...record,
      dateInterview: date,
    };
    const response = await changeStatusCV(record.id, options);
    if (response) {
      setIsModalOpen(false);
      handleInfo();
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        onClick={showModal}
        type='primary'
        ghost
        icon={<CalendarOutlined />}
      ></Button>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <h3>Schedule an interview </h3>
        <div>Date interview</div>
        <DatePicker
          onChange={onChange}
          format={{
            format: 'DD-MM-YYYY',
            type: 'mask',
          }}
        />
        <div>
          <Button onClick={onClick}>Book</Button>
        </div>
      </Modal>
    </>
  );
}

export default BookInterview;

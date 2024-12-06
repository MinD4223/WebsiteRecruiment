import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Col, Input, message, Modal, Row, Select, Switch } from 'antd';
import { useEffect, useState } from 'react';
import { Form } from 'antd';
import { getTimeCurrent } from '../../../utils/getTime';
import { updateJob } from '../../../services/serviceJob';

function DetailCV(props) {
  const { record, handleReload } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button icon={<EyeOutlined />} onClick={showModal}></Button>

      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <h3>Information Candidate</h3>
        <div>Name: {record.name} </div>
        <div>
          Phone: {record.phone} Email: {record.email}
        </div>
        <div>Skill: {record.skill}</div>
        <div>Experience: {record.experience}</div>
        <div>Description: {record.description}</div>
      </Modal>
    </>
  );
}
export default DetailCV;

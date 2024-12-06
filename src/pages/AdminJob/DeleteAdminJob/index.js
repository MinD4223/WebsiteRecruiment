import { DeleteOutlined } from '@ant-design/icons';
import { Button, notification, Popconfirm } from 'antd';
import { deleteJob } from '../../../services/serviceJob';

function DeleteAdminJob(props) {
  const { record, handleReload } = props;

  const handleDelete = async () => {
    const response = await deleteJob(record.id);
    if (response) {
      handleReload();
    }
  };
  return (
    <>
      <Popconfirm title='Sure to delete' onConfirm={handleDelete}>
        <Button danger icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}
export default DeleteAdminJob;

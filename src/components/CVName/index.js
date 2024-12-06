import { useEffect, useState } from 'react';
import { getDetailJob } from '../../services/serviceJob';

function CVName(props) {
  const { id } = props;
  const [name, setName] = useState();

  useEffect(() => {
    const fetchApiName = async (id) => {
      const response = await getDetailJob(id);
      console.log(response);
      setName(response.name);
    };
    fetchApiName(id);
  }, []);
  return <>{name}</>;
}

export default CVName;

import { Button, Col, Form, Input, Row, Select } from 'antd';
import '../SearchForm/SearchForm.css';
import { useEffect, useState } from 'react';
import { getListCity } from '../../services/serviceCity';
import { useNavigate } from 'react-router-dom';
function SearchForm() {
  const [city, setCity] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListCity();
      if (response) {
        const objAll = {
          key: 0,
          value: 'All',
        };
        setCity([objAll, ...response]);
      }
    };
    fetchApi();
  }, []);

  const handleFinish = (values) => {
    let city = values.city || '';
    city = values.city === 'All' ? '' : city;
    navigate(`/jobs?city=${city}&jobname=${values.jobname || ''}`);
  };

  return (
    <>
      <p className='search-name'>Search</p>
      {city && (
        <Form className='search-form' onFinish={handleFinish}>
          <Row>
            <Col className='search-item'>
              <div className='search-label'>Job name:</div>
              <Form.Item name='jobname' className='search-input'>
                <Input placeholder='Enter job name' />
              </Form.Item>
            </Col>
            <Col className='search-item'>
              <div className='search-label'>Location:</div>
              <Form.Item name='city' className='search-input'>
                <Select options={city} placeholder='Choose location' />
              </Form.Item>
            </Col>
            <Col className='search-item'>
              <Form.Item
                name='city'
                className='search-input search-input__button '
              >
                <Button type='primary' htmlType='submit'>
                  Search
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
}

export default SearchForm;

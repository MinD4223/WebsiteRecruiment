import { Button, Card, Col, Divider, Row, Space } from 'antd';
import '../Home/Home.css';
import SearchForm from '../../components/SearchForm';
import CardItem from '../../components/CardItem';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(useGSAP);

function Home() {
  // const t = useRef();

  // useEffect(() => {
  //   return () => {};
  // }, []);
  // useGSAP(
  //   () => {
  //     // gsap code here...
  //     gsap.to('.animation-section', { x: 100 }); // <-- automatically reverted
  //   },
  //   { scope: t }
  // );
  return (
    <>
      {/* <div ref={t}> className='animation-section' */}
      <Row>
        <Col span={12} className='banner-left'>
          <div className='banner-left__name'>MinD Career</div>
          <div className='banner-left__slogan'>
            Change today - Value tomorrow
          </div>
        </Col>
        <Col span={12}>
          <div className='banner-right'>
            <img src='./image/banner.png' />
          </div>
        </Col>
      </Row>
      <div className='search-category'>
        <SearchForm />
      </div>
      <Divider
        style={{
          borderColor: '#000000',
          marginTop: '8%',
          marginBottom: '0',
        }}
      >
        <p className='divider'>Lastest Jobs</p>
      </Divider>

      <Card className='card-lastest-jobs'>
        <Row>
          <Col className='card-item' span={8}>
            <CardItem />
          </Col>
          <Col className='card-item' span={8}>
            <CardItem />
          </Col>
          <Col className='card-item' span={8}>
            <CardItem />
          </Col>
          <Col className='card-item' span={8}>
            <CardItem />
          </Col>
          <Col className='card-item' span={8}>
            <CardItem />
          </Col>
          <Col className='card-item' span={8}>
            <CardItem />
          </Col>
        </Row>
        <div className='card-button__view-more'>
          <Button>View more</Button>
        </div>
      </Card>
      {/* </div> */}
    </>
  );
}

export default Home;

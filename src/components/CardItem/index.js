import { Button, Card } from 'antd';
import './CardItem.css';
function CardItem() {
  return (
    <>
      <Card className='card-item' style={{ background: '#CDEDFE' }}>
        <p className='card-item__name'>Business Analyst</p>
        <div className='card-item__infor'>
          <div className='card-item__infor_left'>
            <div className='card-item__salary'>salary: 100</div>
            <div className='card-item__level'>level</div>
          </div>
          <div className='card-item__infor_right'>
            <div className='card-item__time'>time</div>
          </div>
        </div>
        <div className='card-item__action'>
          <Button type='primary'>View</Button>
        </div>
      </Card>
    </>
  );
}

export default CardItem;

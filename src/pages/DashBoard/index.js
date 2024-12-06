import { Column } from '@ant-design/plots';
import { Pie } from '@ant-design/plots';
import './DashBoard.css';
function DashBoard() {
  const config = {
    data: {
      type: 'fetch',
      value:
        'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json',
    },
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name',
    group: true,
    style: {
      inset: 5,
    },
    onReady: ({ chart }) => {
      try {
        chart.on('afterrender', () => {
          chart.emit('legend:filter', {
            data: { channel: 'color', values: ['London'] },
          });
        });
      } catch (e) {
        console.error(e);
      }
    },
  };

  const config1 = {
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return (
    <>
      <h1 className='title'>DashBoard</h1>
      <div className='dash-board'>
        <div className='row-number'>
          <div className=' number'></div>
          <div className=' number'></div>
          <div className=' number'></div>
        </div>
        <div className='row-diagram'>
          <div className='diagram diagram-cv'>
            <Column {...config} />
          </div>
          <div className='diagram diagram-job'>
            <Pie {...config1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;

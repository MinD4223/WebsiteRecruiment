import { Button, Card, message, Steps } from 'antd';
import './Process.css';
import { useEffect, useState } from 'react';
import { getCookie } from '../../utils/cookie';
import {
  changeStatusCV,
  getDetailCVForProcess,
} from '../../services/serviceCV';
import { useNavigate } from 'react-router-dom';
function Process() {
  const navigate = useNavigate();
  const id = getCookie('id');
  const [step, setStep] = useState(0);
  const [data, setData] = useState();
  const [dataCV, setDataCV] = useState();
  const [idCV, setIdCV] = useState();
  const [accept, setAccept] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [statusPass, setStatusPass] = useState(true);

  useEffect(() => {
    const getDetailCV = async () => {
      const result = await getDetailCVForProcess(id);
      if (result.length === 0) {
        navigate('/');
      } else {
        console.log(result[0].dateInterview);
        if (result[0].dateInterview) {
          setStep(1);
          setData(result[0].dateInterview);
          setDataCV(result[0]);
          setIdCV(result[0].id);
        }
        if (
          result[0].statusApply === 'Interview' ||
          result[0].statusApply === 'Pass' ||
          result[0].statusApply === 'Not Pass'
        ) {
          setAccept(true);
          if (
            result[0].statusApply === 'Pass' ||
            result[0].statusApply === 'Not Pass'
          ) {
            setStep(2);
            if (result[0].statusApply === 'Pass') {
              setStatusPass(true);
            } else {
              setStatusPass(false);
            }
          }
        }
      }
    };
    getDetailCV();
  }, []);

  console.log(idCV);

  const onClick = async () => {
    const options = {
      ...dataCV[0],
      statusApply: 'Interview',
    };
    const response = await changeStatusCV(idCV, options);
    if (response) {
      setAccept(true);
      messageApi.success('Confirm interview success');
    }
  };

  return (
    <>
      {contextHolder}
      <h1 className='title'>Process</h1>
      <div className='process'>
        <div className='process-main'>
          <div className='process-step'>
            <Steps
              direction='vertical'
              current={step}
              items={[
                {
                  title: 'Apply',
                },
                {
                  title: 'Interview',
                },
                {
                  title: 'Pass',
                },
              ]}
            />
          </div>
          <div className='process-content'>
            <div className='process-info'>
              {step === 0 && (
                <Card
                  className='info'
                  title='Information'
                  bordered={true}
                  style={{
                    width: 400,
                  }}
                >
                  <p>
                    You have applied job success, please wait the recruiment
                    contact with you
                  </p>
                </Card>
              )}
              {step === 1 && (
                <Card
                  className='info'
                  title='Information'
                  bordered={true}
                  style={{
                    width: 400,
                  }}
                >
                  {accept ? (
                    <p className='interview-content'>
                      Please wait the result from recruiment
                    </p>
                  ) : (
                    <p className='interview-content'>
                      You have booked Interview by recruiment in {data}
                    </p>
                  )}

                  {!accept && (
                    <Button type='primary' onClick={onClick}>
                      Accept
                    </Button>
                  )}
                </Card>
              )}
              {step === 2 && (
                <Card
                  className='info'
                  title='Information'
                  bordered={true}
                  style={{
                    width: 400,
                  }}
                >
                  {statusPass ? (
                    <p className='interview-content'>
                      Congratulation you have passed in company
                    </p>
                  ) : (
                    <p className='interview-content'>You don't pass</p>
                  )}
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;

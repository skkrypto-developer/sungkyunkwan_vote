import React, {useState} from 'react';
import styled from 'styled-components';
import Template from './0_Template';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.16);
`;

const ModalBox = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 268px;
    height: 140px;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    background-color: rgba(242, 242, 242, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ModalText = styled.div`
    width: 100%;
    height: 22px;
    font-family: SFProText;
    font-size: 17px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: -0.54px;
    text-align: center;
    color: #000000;
`;

const FrameBox = styled.div`
    margin-top: 9px;
    width: 268px;
    height: 44px;
    background-color: rgba(242, 242, 242, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FrameText = styled.div`
    width: 100%;
    height: 20px;
    font-family: SFProText;
    font-size: 17px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: -0.41px;
    text-align: center;
    color: #007aff;
`;

function Modal() {
  const [open, setOpen] = useState(true);
  const [visible, setVisibel] = useState('hidden');
  const onToggle = () => {
      setOpen(!open);
      setVisibel(!visible);
  }
  return (
    <>
    {
      open && (
      <React.Fragment>
        <ModalOverlay onClick={onToggle} />
        <ModalBox>
          <ModalText style={{marginTop: 19}}>지급완료!</ModalText>
          <ModalText style={{marginTop: 14, fontSize: 13}}>성공적으로 전송되었습니다.</ModalText>
          <FrameBox>
              <FrameText onClick={onToggle}>확인</FrameText>
          </FrameBox>
        </ModalBox>
      </React.Fragment>
      )
    }
    </>
  );
}

export default Modal;
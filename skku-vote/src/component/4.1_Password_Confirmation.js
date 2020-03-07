import React from 'react';
import Template from './0_Template';
import {FaMinus, FaCircle} from 'react-icons/fa';
import {Passwordlock, Passwordtext, PasswordButtonBigBox, PasswordButtonMiddleBox, PasswordButtonSmallBox, PassBack, PassBigBox, PassSmallBox, PassSmallText, PasswordButtonText} from './4_Password_Setting';

function PasswordConfimation() {
    return (
        <Template>
            <Passwordlock />
            <Passwordtext style={{fontSize:25}}>설정한 비밀번호를<br></br>다시 한번 입력해주세요</Passwordtext>
            <PassBigBox>
                <PassSmallBox>
                    <PassSmallText>{<FaCircle color='61943e' />}</PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
                <PassSmallBox>
                    <PassSmallText><FaCircle color='61943e'/></PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
                <PassSmallBox>
                    <PassSmallText><FaCircle color='61943e'/></PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
                <PassSmallBox>
                    <PassSmallText><FaCircle color='61943e'/></PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
                <PassSmallBox>
                    <PassSmallText><FaCircle color='61943e'/></PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
                <PassSmallBox>
                    <PassSmallText><FaCircle color='61943e'/></PassSmallText>
                    <FaMinus color='61943e'/>
                </PassSmallBox>
            </PassBigBox>
            <PasswordButtonBigBox>
                <PasswordButtonMiddleBox>
                    <PasswordButtonSmallBox>
                        <PasswordButtonText>1</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox>
                        <PasswordButtonText>2</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox>
                        <PasswordButtonText>3</PasswordButtonText>
                    </PasswordButtonSmallBox>
                </PasswordButtonMiddleBox>
                <PasswordButtonMiddleBox>
                <PasswordButtonSmallBox>
                        <PasswordButtonText>4</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox>
                        <PasswordButtonText>5</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox>
                        <PasswordButtonText>6</PasswordButtonText>
                    </PasswordButtonSmallBox>
                </PasswordButtonMiddleBox>
                <PasswordButtonMiddleBox>
                    <PasswordButtonSmallBox>
                        <PasswordButtonText>7</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox>
                        <PasswordButtonText>8</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox>
                        <PasswordButtonText>9</PasswordButtonText>
                    </PasswordButtonSmallBox>
                </PasswordButtonMiddleBox>
                <PasswordButtonMiddleBox>
                    <PasswordButtonSmallBox style={{backgroundColor:'gray'}}>
                        <PasswordButtonText></PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox>
                        <PasswordButtonText>0</PasswordButtonText>
                    </PasswordButtonSmallBox>
                    <PasswordButtonSmallBox style={{backgroundColor:'gray'}}>
                        <PasswordButtonText><PassBack /></PasswordButtonText>
                    </PasswordButtonSmallBox>
                </PasswordButtonMiddleBox>
            </PasswordButtonBigBox>
        </Template>
    );
}

export default PasswordConfimation;
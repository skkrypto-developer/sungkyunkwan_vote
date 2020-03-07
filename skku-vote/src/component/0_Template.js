import React from 'react';
import styled, {css} from 'styled-components';

const size = {
    mobile: '425',
    tablet: '768',
    laptop: '1024',
    desktop: '2560'
}

const media = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${size[label] / 16}em) {
        ${css(...args)};
      }
    `;
  
    return acc;
  }, {});


const TemplateBlock = styled.div `
    width: 100%;
    ${media.mobile`width: mobile;`}
    ${media.tablet`width: 360px;`}
    ${media.laptop`width: 360px;`}
    height: 100%;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    transition: all .3s;
`;

export const FontStyle = styled.div `
    font-family: AppleSDGothicNeo;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
`;

//저작권 박스
const CopyrightBox = styled.div`
    width: 328px;
    height: 3%;
    display: inline-flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 22px;
`;
//저작권
const Copyright = styled(FontStyle)`
    font-size: 10px;
    font-weight: 100;
    text-align: center;
    color: black;
`;

function Template({children}) {
    return( 
        <TemplateBlock>
            {children}
            <CopyrightBox>
                <Copyright> Copyright 2020 Sungkyunkwan Universtity allrights reserved </Copyright>
            </CopyrightBox>
        </TemplateBlock>
    );
}

export default Template;
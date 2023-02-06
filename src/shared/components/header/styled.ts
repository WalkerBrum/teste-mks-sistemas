import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background-color: #0F52BA;
    padding: 20px;
`;

export const WrapperTitle = styled.div`
    display: flex;
    margin: 8px 0px 9px 45px;
    color: #FFFFFF;  
`;

export const TitleFirst = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size:  40px;
    Line height: 19px;
    letter-spacing: 5px;
    margin-right: 2px;
`;

export const TitleSecond = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    margin-top: 17px;
    letter-spacing: 1px;
`;

export const WrapperCart = styled.div`
    cursor: pointer;
    width: 90px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 8px;
    margin-right: 88px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const SpamCart = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;
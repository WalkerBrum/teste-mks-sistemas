import styled from 'styled-components';


export const WrapperItem = styled.div`
    position: relative;
    width: 379px;
    height: 95px;
    background: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin-left: 47px;
    padding: 19px 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImageProduct = styled.img`
    width: 46px;
    height: 57px;
    margin-right: 21px;
`;

export const TitleProduct = styled.h4`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: #2C2C2C;
    display: flex;
    justify-content: start; 
    flex-wrap: wrap;
    width: 80px;
    height: 33px;
`;

export const WrapperQtd = styled.div`
    background: #FFFFFF;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50px;
    height: 19px;
    margin: 0 40px 0 9px;
`;

export const ButtonMoreLessQtd = styled.button`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: #000000;
    margin: 0 6px;
`;

export const InformationQtd = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    border-left: 0.2px solid #BFBFBF;
    border-right: 0.2px solid #BFBFBF;
    padding: 0 5px;
    color: #000000;
`;

export const SpanQtd = styled.span`
    position: absolute;
    left: 56.06%;
    right: 42.08%;
    top: 27.66%;
    bottom: 60.4%;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: #000000;
`;

export const PriceProduct = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
`;


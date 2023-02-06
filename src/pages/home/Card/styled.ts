import styled from 'styled-components';

export const Card = styled.div`
    width: 217.56px;
    height: 285px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    &:hover {
        outline: solid 3px #9747FF;
    }
`;

export const ImageProduct = styled.img`
    width: 111px;
    height: 138px;
    padding: 14px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    padding: 0 14px 0 11.56px;
`;

export const TitleProduct = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`;

export const PriceProduct = styled.span`
    background: #373737;
    border-radius: 5px;
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 26px;
`;

export const Description = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    margin: 8px 14px 12px 14px;
`;

export const ButtonBuy = styled.button`
    background: #0F52BA;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    border-radius: 0px 0px 8px 8px;
    padding: 7px 0 10.91px 0;
`;

export const TextButtonBuy = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
`;


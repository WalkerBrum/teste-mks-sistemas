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


    &:hover {
        outline: solid 3px #9747FF;
    }

    img {
        width: 111px;
        height: 138px;
        padding: 14px;
    }

    div {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
`;

export const Image = styled.img`
    width: 111px;
    height: 138px;
    padding: 14px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
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
    padding 4px 6px 4px 7px;
`;

export const Description = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    margin: 8px 14px 12px 14px;
`;


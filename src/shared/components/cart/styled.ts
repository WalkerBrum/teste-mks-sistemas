import styled from 'styled-components';


export const CarOverlay = styled.div`
    background: rgba(0,0,0,.8);
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    transition: all 5s ease;
`;

export const CartOpened = styled.div`
    position: fixed;
    width: 486px;
    height: 100vh;
    background: #0F52BA;
    top: 0;
    right: 0;
    transition: all 5s ease;
    overflow-x: auto;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const CartClosed = styled.div`
    position: fixed;
    width: 486px;
    height: 100vh;
    background-color: white;
    top: 0;
    right: -1500px;
    transition: all 5s ease;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 36px 22px 70px 47px;  
`;

export const Title = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    width: 180px;
    height: 56px;
    color: #FFFFFF;
`;

export const CloseButton = styled.button`
    border-radius: 50%;
    background-color: black;
    width: 38px;
    height: 38px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 15px;
    margin-top: 3px;
    padding: 20px;
`;

export const FinishedBuyButton = styled.div`
    background: #000000;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    padding: 39px 0 43px 0;
    color: white;
    text-align:center;
    width: 100%;
    cursor: pointer;
`;






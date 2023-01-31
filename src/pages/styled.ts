import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #E5E5E5;
    height: 100vh;
`;

export const Card = styled.div`
    width: 217.56px;
    height: 285px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        outline: solid 3px #9747FF;
    }
`;
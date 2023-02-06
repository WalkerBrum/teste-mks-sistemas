import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #E5E5E5;
    padding: 116px;
    gap: 20px;

    @media (max-width: 800px) {
        padding: 20px 10px;
    }
`;

export const Loading = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size:  40px;
    Line height: 19px;
    letter-spacing: 3px;
    height: 100vh;
`;




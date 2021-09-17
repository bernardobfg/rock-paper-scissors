import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #010101;
    h2{
        color: #F58332;
        margin-bottom: 40px;
    }
    
`

export const FluxoImage = styled.img`
    width: 200px;
    height: 200px;
    animation: spin 4s linear infinite;
    @keyframes spin{
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`
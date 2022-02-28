import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

export const AboutImgWrapper = styled.div`
    margin-top: 50px;
`

export const AboutContactWrapper = styled(AboutWrapper)`
    
    & > a {
        color: #00D1FF;
        text-decoration: dashed;
    }
`
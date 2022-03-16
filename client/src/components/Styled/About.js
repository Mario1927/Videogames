import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    @media (max-width: 800px) {

        & > h1 {
            font-size: 2vh;
        }

        & > h2 {
            font-size: 2vh;
        }
    }
`

export const AboutImgWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;

    @media (max-width: 800px) {

        & > img {
            width: 80%;
            height: 80%;
        }
    }
`

export const AboutContactWrapper = styled(AboutWrapper)`
    
    & > a {
        color: #00D1FF;
        text-decoration: dashed;
    }
`
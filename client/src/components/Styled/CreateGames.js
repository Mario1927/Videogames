import styled from "styled-components";

export const CreateGamesWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;
`

export const CreateGamesFormWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    align-items: center;
    grid-template-areas:
        ". . .";
    color: white;
    justify-items: center;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 3%;
    width: 700px;
    padding-top: 10px;
    padding-bottom: 10px;
`

export const CreateGamesForm = styled.form`
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr;
`

export const CreateGamesInput = styled.input`
    height: 20px;
    width: 592px;
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 15px;
    border-radius: 4px;
    border: 2px solid #00D1FF;
    background: rgba(255, 255, 255, 0.25);
    color: white;
    ::placeholder{
        color: lightgray;
    }

    @media (max-width: 800px) {
        width: 80vw;
    }
`

export const CreateGamesCheckboxWrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 2fr 1fr 2fr 1fr;
    grid-auto-rows: 1fr;
    grid-auto-flow: row;

    @media (max-width: 800px) {
        margin: auto;
        justify-items: center;
        grid-template-columns: 2fr 1fr;
    }
`

export const CreateGamesItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;

    & > label {
        color: #00D1FF;
        margin-bottom: 5px;
    }
`

export const CreateGamesPairItemsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
`

export const CreateGamesFormErrors = styled.span`
    color: red;
`
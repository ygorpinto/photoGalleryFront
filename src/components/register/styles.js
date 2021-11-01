import styled from "styled-components";

const RegisterStyles = styled.div`
display: flex;
height: 100vh;
width: 100%;
background-color: #29C8C8;

.photoDiv {
        height:100vh;
        align-items: center;
        justify-content: center;
    }

    .formDiv {
        h1 {
            font-size: 4rem;
            color: #FFFFFF;
            margin-bottom:0;
        }

        h3 {
            margin-top: 0;
            margin-left: 4rem;
            font-size: 1.6rem;
            color: #FFFFFF;
        }

        .mirrorText {
            margin:0;
            font-size: 4rem;
            color: #FFFFFF;
            opacity: 0.25;
            filter: blur(1.31659px);
            transform: matrix(1, 0, 0, -1, 0, 0);
        }
    }

form, div {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-family: 'Arvo';

    input {
        width: 20rem;
        height: 3rem;
        margin: 0.3rem;
        border-radius: 0.2rem;
        background: #FFFFFF;
        border-radius: 10px;
        border:none;
        margin-left: 4rem;
        padding-left: 0.7rem;
        font-family:'Arvo';

        &::placeholder {
            font-family:'Arvo';
        }
    }

    .passInput {
        margin-top: 1.2rem;
    }

    button {
        margin-left: 4rem;
        width: 20.5rem;
        height: 3rem;
        font-family:'Arvo';
        color: #FFFFFF;
        margin-top: 2rem;
        background: linear-gradient(90.86deg, #F08152 0%, #DD7041 100%);
        box-shadow: inset 3px 3px 4px #FAA986, inset -2px -2px 4px #BD4D1E;
        border-radius: 10px;
        border:none;
    }

    p {
        color:#FFFFFF;
        margin-left: 5.2rem;

        a {
            margin-left: 0.5rem;
            font-size: 1.1rem;
            color: #F08152;
            text-decoration: none;
            font-weight: 900;
        }
    }
}

`

export default RegisterStyles;
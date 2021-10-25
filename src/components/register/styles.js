import styled from "styled-components";

const RegisterStyles = styled.div`
display: flex;
flex-direction: column;

div, form {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    input {
        height: 1.5rem;
        margin: 0.3rem;
        border-radius: 0.2rem;

        &::placeholder {
            text-align: center;
        }
    }

    button {
        width: 5rem;
        height: 2rem;
    }
}
`

export default RegisterStyles;
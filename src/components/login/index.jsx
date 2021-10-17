import LoginStyles from "./styles";

const Login = () => {
    return (
        <LoginStyles>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <input placeholder="Login"/>
                <input placeholder="Senha"/>
                <button>Entrar</button>
            </div>
        </LoginStyles>
    )
}

export default Login;
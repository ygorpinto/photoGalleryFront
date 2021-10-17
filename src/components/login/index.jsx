import { Link } from "react-router-dom";
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
                <p>Não tem uma conta? <Link to="/register">Crie sua conta</Link></p>
            </div>
        </LoginStyles>
    )
}

export default Login;
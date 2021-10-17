import { Link } from "react-router-dom";
import RegisterStyles from "./styles"

const Register = () => {
    return (
        <RegisterStyles>
            <div>
                <h1>Registrar</h1>
            </div>
            <div>
                <input placeholder="Email"/>
                <input 
                type="password"
                placeholder="Senha"/>
                <input 
                type="password"
                placeholder="Confirme sua senha"/>
                <button>Criar</button>
                <p>Já tem uma conta? <Link to="/">Faça Login</Link></p>
            </div>
        </RegisterStyles>
    )
}

export default Register;
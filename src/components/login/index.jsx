import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import LoginStyles from "./styles";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: password
        }
        const res = await api.post('/sessions', data)
        console.log(res.data);
    }

    return (
        <LoginStyles>
            <div>
                <h1>Login</h1>
            </div>
            <form
            onSubmit={e => handleLogin(e)}
            >
                <input 
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email"/>
                <input
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Senha"/>
                <button
                type="submit"
                >Entrar</button>
                <p>Não tem uma conta? <Link to="/register">Crie sua conta</Link></p>
            </form>
        </LoginStyles>
    )
}

export default Login;
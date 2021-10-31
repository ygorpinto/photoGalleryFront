import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../api/api";
import RegisterStyles from "./styles"

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pswrdConf, setPswrdConf] = useState("");

    const [toLogin, setToLogin] = useState(false);

    const handleNewUser = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }
        try {
            await api.post('/users', data)
            alert("usuário criado com sucesso.")
            setToLogin(true)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
        {toLogin ? (
            <Redirect to='/'/>
        ) : (
            <RegisterStyles>
            <div>
                <h1>Registrar</h1>
            </div>
            <form
            onSubmit={e => handleNewUser(e)}
            >
                <input 
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"/>
                <input 
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Senha"/>
                <input 
                onChange={e => setPswrdConf(e.target.value)}
                type="password"
                placeholder="Confirme sua senha"/>
                <button
                type="submit"
                >Criar</button>
                <p>Já tem uma conta? <Link to="/">Faça Login</Link></p>
            </form>
        </RegisterStyles>
        )}
        </>
    )
}

export default Register;
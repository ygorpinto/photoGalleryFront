import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Cookies from "universal-cookie/es6";
import api from "../api/api";
import { GlobalContext } from "../context/globalContext";
import LoginStyles from "./styles";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loggedIn, setLoggedIn] = useState(null);

    // talvez eu use pra mudar o theme!
    const {
        state,
        dispatch
    } = useContext(GlobalContext);

    const cookies = new Cookies();

    const handleLogin = async (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: password
        }
        const res = await api.post('/sessions', data)
        cookies.set('auth_token', res.data, {path:'/'});
        setLoggedIn(true)
    }

    return (
        <>
        {loggedIn || cookies.get('auth_token') ? (
            <Redirect to='/photos'/>
        ) : (
                    <LoginStyles>
                    <div className="photoDiv">
                        <img 
                        src="login.png"/>
                    </div>
                    <div className="formDiv">
                        <div>
                            <h1>Photos Gallery</h1>
                            <h1 className='mirrorText'>Photos Gallery</h1>
                            <h3>Login</h3>
                        </div>
                        <form
                        onSubmit={e => handleLogin(e)}
                        >
                            <input 
                              onChange={e => setEmail(e.target.value)}
                              placeholder="Email"/>
                            <input
                              className="passInput"
                              onChange={e => setPassword(e.target.value)}
                              type="password"
                              placeholder="Senha"/>
                            <button
                            type="submit"
                            >Entrar</button>
                            <p>N??o tem uma conta? <Link to="/register">Crie sua conta</Link></p>
                        </form>
                    </div>
                </LoginStyles>
        )}
        </>
    )
}

export default Login;
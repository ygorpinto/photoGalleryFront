import PhotoStyles from "./styles";
import {Redirect} from 'react-router-dom'
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import Cookies from "universal-cookie/es6";
import api from "../api/api";

const Photos = () => {

    // vou usar pra muitas coisas !!
    const {
        state
    } = useContext(GlobalContext);

    const cookies = new Cookies();

    const logout = async () => {
        cookies.remove('auth_token');
        window.location.reload();
    }

    return (
        <>
        {(cookies.get('auth_token') && cookies.get('auth_token') !== 'undefined') ? (
            <PhotoStyles>
            <p>VOCE ESTA LOGADO!!</p>
            <button
            onClick={logout}
            >Logout</button>
            </PhotoStyles>
        ) : (<Redirect to="/"/>)}
        </>
    )
}

export default Photos;
import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'

import {AiOutlineEyeInvisible, AiOutlineEye, AiOutlineGoogle} from 'react-icons/ai'
import {SiFacebook} from 'react-icons/si'

import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../utils/AxiosInstance";

import './login.scss'

export const Login = () => {
    let {loginUser} = useContext(AuthContext)

    const [product, setProduct] = useState([])
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let {login} = useParams()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        let response = await axiosInstance.get('/api/product/getProducts')

        if (response) {
            setProduct(response.data)
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleChangeUserName = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
        {/* <Navbar /> */}
        <div className="login">
            <div className="continue__button">
                <Link to='/'>Continue Shopping</Link>
            </div>
            <div className="form">
                <h4 className="title">Login</h4>
                <form>
                    <div className={login === 'login' ? "field input-field block" : "field input-field"}>
                        <input type="email" placeholder="Email" className="input" />
                    </div>

                    <div className="field input-field">
                        <input 
                            value={username}
                            onChange={ (e) => handleChangeUserName(e)}
                            type="username" 
                            placeholder="User name" 
                            className="input"
                        />
                    </div>

                    <div className="field input-field">
                        <input 
                            value={password}
                            onChange={(e) => handleChangePassword(e)}
                            type={showPassword ? "text" : "password" }
                            placeholder="Password" 
                            className="password" 
                        />
                        <i onClick={handleShowPassword} className='eye-icon'>{showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</i>
                    </div>

                    <div className={login === 'login' ? "field input-field block" : "field input-field"}>
                        <input type="rePassword" placeholder="Repeat Password" className="password" />
                        <i onClick={handleShowPassword} className='eye-icon'>{showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</i>
                    </div>
                </form>
                
                <div className={login === 'login' ? "checkbox-text block" : "checkbox-text"}>
                    <div className="checkbox-content">
                        <input type="checkbox" id="termCon" />
                        <label htmlFor="termCon" className="text">I accepted all terms and conditions</label>
                    </div>
                </div>

                <div className={login === 'login' ? "form__link" : "form__link block"}>
                    <Link to="#" className="forgot-pass">Forgot password?</Link>
                </div>

                <div className="from__button">
                    <button onClick={() => loginUser({'username': username, 'password':password})} >{login === 'login' ? 'Login' : 'Signup'}</button>
                </div>

                <div className="form__link">
                    <span className="">{login === 'login' ? "Don't have an account ?" : "Already have an account ?" }</span>
                    <Link to='/person/signup' className="signup">{login === 'login' ? "Signup" : 'Login'}</Link>
                </div>

                <div className={login === 'login' ? "line" : "line block"}></div>
                <div className={login === 'login' ? "login__facebook" : "login__facebook block"}>
                    <span><SiFacebook /></span>
                    Login with Facebook
                </div>
                <div className={login === 'login' ? "login__google" : "login__google block"}>
                    <span><AiOutlineGoogle /></span>
                    Login with Google
                </div>
            </div>
        </div>
        {/* <Footer /> */}
        </>
    )
}
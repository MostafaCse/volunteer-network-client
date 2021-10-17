import React, { useContext } from 'react';
import './Login.css';
import { Container } from 'react-bootstrap';
import brandLogo from '../../Images/BrandLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useCurrentWidth } from 'react-breakpoints-hook';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { volunteerNetwork } from '../../App';
import { useHistory, useLocation } from 'react-router';

initializeApp(firebaseConfig);
const Login = () => {
 
    let width = useCurrentWidth();
    const [, setLogInUser ] = useContext(volunteerNetwork);
    let history = useHistory();
    let location = useLocation();
    
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new GoogleAuthProvider();
    
    const handleButton = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const Info = result.user.email;
              localStorage.setItem('info',Info);
              setLogInUser(Info);
              history.replace(from);
            }).catch((error) => {
        
            });
    }


    return (
        <Container style={{ backgroundColor: '#EBECF0', height: '600px' }}>
            <div style={{ textAlign: 'center' }}>
                <img className="imgHandling img-fluid" src={brandLogo} alt=""></img>
            </div>
            < div style={{ marginTop: '3%' }}>
                <div style={{ margin: '0 auto' }} className="boxHighlight">
                    <h3 style={{ marginTop: '15%', marginBottom: '15px' }}>Login with</h3>
                    {
                        width > 1200 ? <div>
                            <button onClick={handleButton} className="btnHighlight">
                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                                <span style={{ marginLeft: '20%', marginRight: '20%' }}>Continue with google</span>
                            </button><br />
                        </div> : null
                    }

                    {
                        width >= 818 && width <= 1200 ? <div>
                            <button onClick={handleButton} className="btnHighlight">
                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                                <span>Continue with google</span>
                            </button><br />
                        </div> : null
                    }
                    {
                        width < 818 ? <div>
                            <button onClick={handleButton} style={{ borderRadius: '10px' }}>
                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                                <span>Continue with google</span>
                            </button><br />
                        </div> : null
                    }
                    <div style={{ marginTop: '10px' }}>
                        <small>Don't have an account?<button id="createBtnHighlight">create an account</button></small>
                    </div>
                </div>

            </div>

        </Container>
    );
};

export default Login;
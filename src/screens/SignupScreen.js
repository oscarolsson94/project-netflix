import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../firebase';
import "./SignupScreen.css";

const SignupScreen = () => {

    const emailRef = useRef(null); //can also use useState to get values, but it renders on each change while ref is silent
    const passwordRef = useRef(null);

    const [register, setRegister] = useState(false);

    const history = useHistory();



    const handleRegister = (e) => { 
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
            history.push("/");
        }).catch(error => {
            alert(error.message);
        });
    };

    const handleSignIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message);
        });
    };

    return (
        <div className="signupScreen">
            {register ? (
                <form>
                    <h1>Register</h1>
                    <input ref={emailRef} placeholder="Email" type="email" />
                    <input ref={passwordRef} placeholder="Password" type="password" />
                    <button type="submit" onClick={handleRegister}>Register</button>
                        
                    <h4>
                        <span className="signupScreen__link" onClick={() => setRegister(false)}>Back to login</span>            
                    </h4>

                </form>
            ) : (
                <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={handleSignIn}>Sign In</button>

                <h4>
                    <span className="signupScreen__gray">New to Netflix? </span>
                    <span className="signupScreen__link" onClick={() => setRegister(true)}>Sign Up now.</span>
                </h4>
            </form>    
            )}
            
        </div>
    );
}

export default SignupScreen;

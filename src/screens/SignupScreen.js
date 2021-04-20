import React from 'react';
import "./SignupScreen.css";

const SignupScreen = () => {

    const register = (e) => {
        e.preventDefault();
    }

    const handleSignIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button type="submit" onClick={handleSignIn}>Sign In</button>

                <h4>
                    <span className="signupScreen__gray">New to Netflix? </span>
                    <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen;

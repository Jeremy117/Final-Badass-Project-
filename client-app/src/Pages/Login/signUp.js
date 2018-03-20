import React, { Component } from "react";


class signUp extends Component {
    render() {
        return (
            <form className="signUp">
                <h1 /> Sign In
    <div className="signIn">
                    <label for="Email">Email:</label>
                    <input
                        placeholder="your email"
                        id="Email"
                        type="Email"
                        name="email"
                        required
                    />
                    <label for="Password">Password</label>
                    <input
                        placeholder="your password"
                        id="Password"
                        type="Password"
                        maxlength="10"
                        minlength="5"
                        name="password"
                        required
                    />
                    <div>
                        <input type="submit" />
                    </div>
                    <hr />
                </div>


            </form>
        );
    }
}
export default signUp;
import React, { createContext, Component } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuth: false
    }

    changeAuth = () => {
        this.setState((prevState) => {
            return { isAuth: !prevState.isAuth }
        })
    }

    render() {
        return(
            <AuthContext.Provider value={{...this.state, changeAuth: this.changeAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;
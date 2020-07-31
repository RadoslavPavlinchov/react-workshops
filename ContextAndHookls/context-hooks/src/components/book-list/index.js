import React, { Component } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';

class BookList extends Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {

                    const { isAuth, changeAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;

                    return (
                        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                            <div>
                                { isAuth ? 'Logged In' : 'Logged Out'}
                            </div>
                            <button onClick={changeAuth}>{isAuth ? 'Logout' : 'Login'}</button>

                            <ul>
                                <li style={{ background: theme.ui }}>The way of the king</li>
                                <li style={{ background: theme.ui }}>The name of the wind</li>
                                <li style={{ background: theme.ui }}>The final empire</li>
                            </ul>
                        </div>
                    )
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        )
    }
}

export default BookList;
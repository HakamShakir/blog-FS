import { useContext, useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import { UserContext } from "../UserContext";

function Header() {
    
    const { setUserInfo, userInfo } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/users/profile', {
            credentials: 'include'
        }).then(res => {
            res.json()
                .then(userInfo => {
                    setUserInfo(userInfo);
                })
        })
    }, []);

    function logout() {
        fetch('http://localhost:4000/users/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header className="flex bg-gray-500 justify-between pt-5 pb-5">
        <Link to='/' className="logo text-bold ml-3">BlogIt</Link>
            <nav className="flex space-x-2 mr-3">
                {
                    username && (
                        <>
                            <Link to='/create'>Create new post</Link>
                            <a onClick={logout}>Logout</a>
                        </>
                    )
                }
                {
                    !username && (
                        <>
                             <Link to='/login'>Login</Link>
                             <Link to='/register' href="">Register</Link>
                        </>
                    )
                }
         
        </nav>
    </header>
    );
}

export default Header
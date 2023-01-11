import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/logos/logoApp.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const onClickLogo = () => {
        navigate('/')
    };

    return (
        <>
            <div className="elipse">
            </div>
            <nav className="header">
                <div className='logoContainer'>
                    <img src={logo} alt="logo"
                        className="logo"
                        onClick={onClickLogo} />
                </div>
                <ul className='navigation'>
                    <li>
                        <a href="/activities">Actividades</a>
                    </li>
                    <li>
                        <a href="/profile">Perfil</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export { Header }
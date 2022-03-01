import ILoginResultModel from 'models/logins/login-result.model';
import { AppState } from 'my-redux';
import { logout } from 'my-redux/action-creators/authentication.action-creator';
import React, { MutableRefObject, useEffect, useRef } from 'react'
import * as FaIcons from 'react-icons/fa'
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './HeaderOption.scss';
var classNames = require('classnames');

interface IProps {
    logOutConnect: () => void;
    show: boolean;
    onClickOutside: () => void;
}

const HeaderOption = ({ logOutConnect, show, onClickOutside }: IProps) => {
    const wrapperRef = useRef<HTMLInputElement>(null);

    const state = useSelector((state: AppState)=> state.authenticationReducer.basicInfo);


    useEffect(() => {
        console.log(state?.email);
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, [wrapperRef]);

    const handleClickOutside = (event: any) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            onClickOutside && onClickOutside();
        }
    };


    const handleLogout = () => {
        logOutConnect();
    }

    if (!show)
        return null;

    let classShow = show ? 'show' : '';
    return (
        <div ref={wrapperRef} className={`header-option ${classShow}`}>
            <div className="popover-content">
                <div className="popover-title">
                    {state?.email}
                </div>

                <div className="popover-inner-content">
                    <Link to='/my-profile'>
                        Profile
                    </Link>
                    <Link role="button"
                        to="/"
                        onClick={handleLogout}>
                        Logout
                    </Link>
                </div>
            </div>
        </div >
    )
}

const mapDispatchToProps = { logOutConnect: logout };

export default connect(null, mapDispatchToProps)(React.memo(HeaderOption));
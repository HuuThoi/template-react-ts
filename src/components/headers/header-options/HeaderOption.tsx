import { logout } from 'my-redux/action-creators/authentication.action-creator';
import React, { MutableRefObject, useEffect, useRef } from 'react'
import * as FaIcons from 'react-icons/fa'
import { connect } from 'react-redux';
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

    useEffect(() => {
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


    return (
        <div  ref={wrapperRef} className="header-option">
            <div className="popover-content">
                <div className="popover-title">
                    Todo
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
export default connect(null, mapDispatchToProps)(HeaderOption);
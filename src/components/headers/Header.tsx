import React from 'react'
import * as FaIcons from 'react-icons/fa'

import './Header.scss';
var classNames = require('classnames');

const Header: React.FunctionComponent = (props: any) => {
    return (
        <div className="header">
            <div className="border-tl-br notification">
                <FaIcons.FaRegBell />
            </div>
            <div className="border-tl-br profile">
                <img className="border-tl-br" src="/avatar.png" alt="" />
            </div>
        </div>
    )
}

export default Header
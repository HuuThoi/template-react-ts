import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import HeaderOption from './header-options/HeaderOption';

import './Header.scss';

const Header= (props: any) => {

    const [openProfile, setOpenProfile] = useState(false);
   
    const toggleOpenProfile = () => {
        setOpenProfile(!openProfile);
    }

    return (
        <div className="header">
            <div className="border-tl-br notification">
                <FaIcons.FaRegBell />
            </div>
            <div className="border-tl-br profile" onClick={toggleOpenProfile}>
                <img className="border-tl-br" src="/avatar.png" alt="" />
            </div>
            {openProfile && (
                <HeaderOption show={openProfile} onClickOutside={() => {setOpenProfile(false)}}/>
            )}
           
        </div>
    )
}

export default Header
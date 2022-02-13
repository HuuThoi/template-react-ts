import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from './SidebarData';

import './Sidebar.scss';
import { Link } from 'react-router-dom';
import SidebarItem from './SidebarItem';
var classNames = require('classnames');

const Sidebar: React.FunctionComponent = (props: any) => {
    const [collapsed, setCollapse] = useState(false);
    const showSidebar = () => setCollapse(!collapsed);

    const activeItem = SidebarData.findIndex(item => item.path === props.location.pathname)

    const sidebarClass = classNames({
        sidebar: true,
        'sidebar-collapse': collapsed,
        '': !collapsed
    })
    return (
        <div className={sidebarClass}>
            <div className="sidebar__logo">
                <img src="/logo192.png" alt="" />
                <span>ForShop</span>
            </div>
            {
                SidebarData.map((item, index) => (
                    <Link to={item.path} key={index}>
                        <SidebarItem
                            title={item.title}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }

            <div className="toggle-btn-menu" onClick={showSidebar}>
                {!collapsed ? <>
                    <i><FaIcons.FaAngleDoubleLeft /></i>
                    <span>Collapse sidebar</span>
                </>
                    :
                    <i><FaIcons.FaAngleDoubleRight /></i>
                }
            </div>
        </div>
    )
}

export default Sidebar
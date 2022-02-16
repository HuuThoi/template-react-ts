import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Users',
        path: '/users',
        icon: <FaIcons.FaUsers />
    },
    {
        title: 'Page B',
        path: '/page-b',
        icon: <FaIcons.FaTasks />
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FaIcons.FaUserCog />
    },
]
import React from 'react'

const NavBar = () => {

    // default static icons

    const links = [
        {
            name: 'dashboard',
            icon: 'icon-layout',
            enabled: true,
        }, {
            name: 'supportSystem',
            icon: 'icon-layout',
            enabled: true,
        }, {
            name: 'responses',
            icon: 'icon-layout',
            enabled: true,
        }, {
            name: 'settings',
            icon: 'icon-layout',
            enabled: true,
        }
    ]

    return (
        <div className='navbar'>
            {
                links.map((l, i) => {
                    if(l.enabled) {
                        return (
                            <div key={i}>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default NavBar;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPage, setPage } from '../app/reducers/RoutingSlice'
import { Dashboard, History, Peers, Settings } from '../pages/PageEnums';
const NavBar = () => {
    const currentPage = useSelector(selectPage);
    const dispatch = useDispatch();

    // default static icons

    const handleClick = (props) => {
        if (props !== currentPage) {
            dispatch(setPage(props));

        }
    };

    const links = [
        {
            name: 'dashboard',
            icon: 'icon-layout',
            enabled: true,
            page: Dashboard,
        }, {
            name: 'peers', // renamed for consistency in routing
            icon: 'icon-layout',
            enabled: true,
            page: Peers,
        }, {
            name: 'history', // renamed for consistency in routing
            icon: 'icon-layout',
            enabled: true,
            page: History,
        }, {
            name: 'settings',
            icon: 'icon-layout',
            enabled: true,
            page: Settings
        }
    ]

    return (
        <div className='navbar'>
            {
                links.map((l, i) => {
                    if(l.enabled) {
                        return (<div>
                            <button key={l.name} id={l.name} onClick={() =>handleClick(l.page)}>{l.name}
                            </button>

                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default NavBar;
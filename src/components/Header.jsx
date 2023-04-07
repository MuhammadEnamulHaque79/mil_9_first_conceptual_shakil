import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center justify-between'>
            {/* logo section */}
            <Link className='inline-flex items-center'>
                <BoltIcon className='w-6 h-6 text-blue-300 me-3 tracking-wide text-2xl' />
                <span>Next Page</span>
            </Link>
            {/* footer section */}
            <div>
                <ul className='inline-flex mx-5'>
                    <li className='mx-5'><NavLink
                          to='/'
                          title='Home link'
                          className={({ isActive}) =>(isActive ? "text-blue-600": "default")}
                    
                    >Home</NavLink> </li>

                    <li className='mx-5'><NavLink
                          to='/books'
                          title='Books link'
                          className={({ isActive}) =>(isActive ? "text-blue-600": "default")}
                    
                    >Books</NavLink> </li>

                    <li className='mx-5'><NavLink
                          to='/about'
                          title='About link'
                          className={({ isActive}) =>(isActive ? "text-blue-600": "default")}
                    
                    >About</NavLink> </li>
                    
                   
                </ul>
            </div>
        </div>
    );
};

export default Header;
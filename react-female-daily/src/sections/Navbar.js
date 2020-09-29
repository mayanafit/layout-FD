import React, { useState } from 'react';
import logo from '../assets/logo-FD.png';
import { BsSearch } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const [input, setInput] = useState(``)
    const submitSearch = (e) => {
        e.preventDefault()
        console.log(input)
    }
    return (
        <header>
            <div className="flex flex-ai-c flex-jc-sb navbar_upper">
                <div className="navbar_hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img src={logo} alt="female-daily"/>
                <form onSubmit={submitSearch}>
                    <div className="navbar_input">
                        <BsSearch className="search_icon"/>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search products, articles, topics, brands, etc" />
                    </div>
                </form>
                <button><FaRegUserCircle className="user_icon" />LOGIN/SIGNUP</button>
            </div>
            <nav className="navbar_lower">
                <ul className="flex flex-jc-c">
                    <li>skincare</li>
                    <li>make up</li>
                    <li>body</li>
                    <li>hair</li>
                    <li>fragnance</li>
                    <li>nails</li>
                    <li>tools</li>
                    <li>brands</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
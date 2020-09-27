import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import Search from '@material-ui/icons/Search';
import ShopingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
function Header() {
    const [{basket},dispatch]=useStateValue();
    return (
        <nav className="header">
            {/* Logo on the left img */}
        <Link to="/" className="header_Link">
        <h1 className="logo">TechnicalHari</h1>
        </Link>
        {/* Search Box */}
        <div className="header_search">
        <input type="text" className="header_searchInput" />
        <Search className="header_searchIcon"/>
        </div>
        {/* 3 Links */}
        <div className="headerNav">
        {/* 1st link */}
        <Link to="/login" className="header_Link" >
        <div className="header_option">
        <span className="header_optionLineOne">Hello Hari</span>
        <span className="header_optionLineTwo">Sign In</span>
        </div>
        </Link>
        {/* 2nd link */}
        <Link to="/login" className="header_Link" >
        <div className="header_option">
        <span  className="header_optionLineOne">Returns</span>
        <span className="header_optionLineTwo">& Orders</span>
        </div>
        </Link>
        {/* 3rd link */}
        <Link to="/login" className="header_Link" >
        <div className="header_option">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionLineTwo" >Prime</span>
        </div>
        </Link>
        {/* 4th link */}
        <Link to="/checkout" className="header_Link">
        <div className="header_optionBasket">
        {/* Shoping basketIcon */}
        <ShopingBasketIcon/>
        {/* Number of items in the basket */}
        <span className="header_optionLineTwo header_basketcount">{basket?.length}</span>
        </div>

        </Link>
        </div>
        </nav>
    )
}

export default Header;

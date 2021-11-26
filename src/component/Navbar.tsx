import React from 'react';
import { Link } from 'gatsby';

export default function NavBar() {
  return <div className="navbar">
    <Link to='/'>Home</Link>
    <Link to='/Contact'>Contact</Link>
    <Link to='/product'>Product</Link>
    <Link to='/about'>About</Link>
  </div>
}
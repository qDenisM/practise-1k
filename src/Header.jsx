import React from "react";
import './index.css'
import './header.css'
import mainLogo from './assets/LOGO.svg'

export default function Header() {
  return (
		<header className='header' id='header'>
			<section className='menu'>
				<div className='logo-container'>
					<img src={mainLogo} alt='logo' />
				</div>
				<ul className='sub-menu'>
					<li className='sub-menu-list'>
						<a href='../public/index.html'>Home</a>
					</li>
					<li className='sub-menu-list'>
						<a href='../public/index.html'>About Us</a>
					</li>
					<li className='sub-menu-list'>
						<a href='../public/index.html'>Our Work</a>
					</li>
					<li className='sub-menu-list'>
						<a href='../public/index.html'>Clients</a>
					</li>
					<li className='sub-menu-list'>
						<a href='../public/index.html'>Our Blog</a>
					</li>
					<li className='sub-menu-list'>
						<a href='../public/index.html'>Contact Us</a>
					</li>
				</ul>
				<button className='light-dark-theme'></button>
			</section>
		</header>
	)
}
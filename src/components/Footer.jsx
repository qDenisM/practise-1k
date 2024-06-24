import React from 'react'
import '../index.css'
import '../footer.css'
import copyrightIcon from '../assets/copyright.svg'
import facebookIcon from '../assets/facebook-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import skypeIcon from '../assets/skype-icon.svg'
import arrowUpIcon from '../assets/arrow-up-icon.svg'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-main'>
				<div className='footer-main-col-digiency'>
					<h2 className='footer-main-col-digiency-title'>
						<span className='orange-text'>Digi</span>ency
					</h2>
					<p className='footer-main-col-digiency-text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
						laoreet libero dis eget maecenas bibendum.
					</p>
					<ul className='footer-main-col-digiency-social-list'>
						<li className='footer-main-col-digiency-social-item'>
							<a
								href='https://www.facebook.com/facebook.com'
								target='_blank'
								rel='noreferrer'
							>
								<img src={facebookIcon} alt='Facebook' />
							</a>
						</li>
						<li className='footer-main-col-digiency-social-item'>
							<a
								href='https://www.instagram.com/'
								target='_blank'
								rel='noreferrer'
							>
								<img src={instagramIcon} alt='Instagram' />
							</a>
						</li>
						<li className='footer-main-col-digiency-social-item'>
							<a href='https://x.com/' target='_blank' rel='noreferrer'>
								<img src={twitterIcon} alt='Twitter' />
							</a>
						</li>
						<li className='footer-main-col-digiency-social-item'>
							<a
								href='https://www.skype.com/en/'
								target='_blank'
								rel='noreferrer'
							>
								<img src={skypeIcon} alt='Skype' />
							</a>
						</li>
					</ul>
				</div>
				<div className='footer-main-col-company'>
					<h2 className='footer-main-col-company-title'>Company</h2>
					<ul className='footer-main-col-company-list'>
						<li className='footer-main-col-company-list-item'>
							<a href='#header'>About Us</a>
						</li>
						<li className='footer-main-col-company-list-item'>
							<a href='#header'>Our Work</a>
						</li>
						<li className='footer-main-col-company-list-item'>
							<a href='#header'>Client</a>
						</li>
						<li className='footer-main-col-company-list-item'>
							<a href='#header'>Our Blog</a>
						</li>
						<li className='footer-main-col-company-list-item'>
							<a href='#header'>Contact Us</a>
						</li>
					</ul>
				</div>
				<div className='footer-main-col-services'>
					<h2 className='footer-main-col-services-title'>Services</h2>
					<ul className='footer-main-col-services-list'>
						<li className='footer-main-col-services-list-item'>
							<a href='#header'>Graphic Design</a>
						</li>
						<li className='footer-main-col-services-list-item'>
							<a href='#header'>UI/UX Design</a>
						</li>
						<li className='footer-main-col-services-list-item'>
							<a href='#header'>Web Development</a>
						</li>
						<li className='footer-main-col-services-list-item'>
							<a href='#header'>App Development</a>
						</li>
						<li className='footer-main-col-services-list-item'>
							<a href='#header'>Web Hosting</a>
						</li>
					</ul>
				</div>
				<div className='footer-main-col-newsletter'>
					<h2 className='footer-main-col-newsletter-title'>Newsletter</h2>
					<p className='footer-main-col-newsletter-text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget
						varius viverra in.
					</p>
					<form action='' className='footer-main-col-newsletter-form'>
						<input type='text' name='' id='' placeholder='info@gmail.com' />
						<input type='button' value='' />
					</form>
				</div>
			</div>
			<div className='footer-copy'>
				<div className='footer-copy-main'>
					<figure className='footer-copy-main-copyright'>
						<img src={copyrightIcon} alt='Copyright' />
					</figure>
					<div className='footer-copy-main-text'>
						Copyright 2021. All Right Reserved By DenisM
					</div>
				</div>
				<div className='footer-copy-icon-up'>
					<a href='#header'>
						<img src={arrowUpIcon} alt='Up' />
					</a>
				</div>
			</div>
		</footer>
	)
}

import React from 'react'
import '../index.css'
import '../main.css'
import mainPhoto from '../assets/main-photo.svg'
import mainPhoto2 from '../assets/main-photo2.svg'
import cardLeader from '../assets/card-leader.svg'
import cardSkill from '../assets/card-skill.svg'
import cardProfessional from '../assets/card-professional.svg'
import cardExperience from '../assets/card-experience.svg'

export default function Main() {
	return (
		<main className='main'>
			<section className='main-the-best-digital'>
				<div className='main-the-best-digital-container'>
					<h1 className='main-the-best-digital-title'>
						We Are The Best <span className='orange-text'>Digital Agency</span>{' '}
						for business
					</h1>
					<p className='main-the-best-digital-text'>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
					</p>
					<button className='btn-contact-us'>Contact Us</button>
				</div>
				<figure className='main-the-best-digital-img-container'>
					<img
						className='main-the-best-digital-img-container-image'
						src={mainPhoto}
						alt=''
					/>
				</figure>
			</section>
			<section className='main-about-us'>
				<div className='main-about-us-container'>
					<div className='main-about-us-desc'>
						<figure className='main-about-us-desc-img-container'>
							<img
								src={mainPhoto2}
								alt=''
								className='main-about-us-desc-img-container-photo'
							/>
						</figure>
						<div className='main-about-us-desc-container'>
							<h6>About Us</h6>
							<h2 className='main-about-us-desc-container-title'>
								We Are <span className='orange-text'>Making Ideas Better</span>{' '}
								For Everyone
							</h2>
							<div className='main-about-us-desc-container-text'>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nascetur imperdiet at a augue ullamcorper. Leo faucibus
									feugiat rutrum aenean. Nisi, lectus aliquet aliquam
									consectetur augue praesent. Lorem vulputate orci eget mi, sed
									pulvinar.
								</p>
								<br />
								<p>
									Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
									faucibus est, dui interdum ut amet. Adipiscing feugiat vel at
									posuere in. Pellentesque volutpat vestibulum.
								</p>
							</div>
							<button className='btn-contact-us'>Contact Us</button>
						</div>
					</div>
					<div className='main-about-us-cards'>
						<div className='main-about-us-cards-leader'>
							<img src={cardLeader} alt='' className='main-about-us-cards-leader-photo' />
							<span className='main-about-us-cards-leader-desc'>
								World leader in consulting and finance
							</span>
						</div>
						<div className='main-about-us-cards-skill'>
							<img src={cardSkill} alt='' className='main-about-us-cards-skill-photo' />
							<span className='main-about-us-cards-skill-desc'>
								A focused team with a specialized skill
							</span>
						</div>
						<div className='main-about-us-cards-professional'>
							<img
								src={cardProfessional}
								alt=''
								className='main-about-us-cards-professional-photo'
							/>
							<span className='main-about-us-cards-professional-desc'>
								Trusted and professional advisors for you
							</span>
						</div>
						<div className='main-about-us-cards-experience'>
							<img
								src={cardExperience}
								alt=''
								className='main-about-us-cards-experience-photo'
							/>
							<span className='main-about-us-cards-experience-desc'>
								Experience to give you a better results
							</span>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

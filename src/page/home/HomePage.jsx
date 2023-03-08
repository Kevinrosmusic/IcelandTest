import React, { useState } from "react";
import video from "../../assets/video.mp4";
import logo from "../../assets/logo.png";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";

import InstagramBlack from "../../assets/instagramBlack.svg";
import FacebookBlack from "../../assets/facebookBlack.svg";

import tabletImg from "../../assets/rectangle1.png";
import DesktopImg from "../../assets/rectangleD.png";
import MobileImg from "../../assets/rectangle3.png";

export const HomePage = () => {
	const [show, setShow] = useState(null);

	const handleChangeValue = () => {
		setShow(!show);
	};

	return (
		<main>
			<input type='checkbox' id='btn-nav' className='checkbox' />
			<header>
				<div className='header-container'>
					<div>
						<img src={logo} alt='' className='logo' />
					</div>

					<label htmlFor='btn-nav' className='btn-label' onClick={handleChangeValue}>
						<div className='header-button'></div>
					</label>
				</div>
			</header>
			<div>
				<video muted autoPlay loop>
					<source src={video} type='video/mp4' />
				</video>
			</div>
			{!show && (
				<div>
					<span className='principal-text'>ICELAND</span>
				</div>
			)}

			{/* animate__fadeOutDownBig */}

			{show !== null && (
				<div>
					<div className={`animate__animated  ${show ? "animate__fadeInBottomLeft animate__faster" : "animate__fadeOutBottomLeft animate__faster"}`}>
						<img src={DesktopImg} alt='' className='image-menu desktop' />
						<img src={tabletImg} alt='' className='image-menu tablet' />
						<img src={MobileImg} alt='' className='image-menu mobile' />
					</div>
				</div>
			)}
			{show && (
				<div className='transition'>
					<div className='rss'>
						<div
							className='icon-facebook-black
							'
						>
							<img src={FacebookBlack} alt='' />
						</div>
						<div
							className='icon-facebook
							'
						>
							<img src={Facebook} alt='' />
						</div>

						<div
							className='icon-instagram-black
							'
						>
							<img src={InstagramBlack} alt='' />
						</div>

						<div
							className='icon-instagram
							'
						>
							<img src={Instagram} alt='' />
						</div>
					</div>
					<div className='text-down fadeInOpacity'>
						<span className='text'>“Excellent service - emailed instructions, no hassle, car was ready as soon as we arrived.”</span>
					</div>
				</div>
			)}

			{show !== null && (
				<nav id='nav-menu' className={`menu animate__animated ${show ? "animate__fadeInUp animate__faster" : "animate__fadeOutDown animate__faster"}  `}>
					<span>English / Español</span>
					<ul>
						<li className={`animate__animated ${show && "animate__fadeInUp animate__slow"}`}>Inicio</li>
						<li className={`animate__animated ${show && "animate__fadeInUp animate__slower"}`}>Reservas</li>
						<li className={`animate__animated ${show && "animate__fadeInUp animate__slower"}`}>Tours</li>
						<li className={`animate__animated ${show && "animate__fadeInUp animate__slower"}`}>Nosotros</li>
						<li className={`animate__animated ${show && "animate__fadeInUp animate__slower"}`}>Contacto</li>
					</ul>
				</nav>
			)}
		</main>
	);
};

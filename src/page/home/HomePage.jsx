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
	// using the useState hook to declare a state variable
	const [show, setShow] = useState(null);

	// This function recognizes the ID of the element through the event parameter. Depending on the ID, the function
	// will add styles to the element si it can be moved by the mouse calculating the coordinates from clientX and clientY.
	const moveElement = (e) => {
		let move = "";
		let x = "";
		let y = "";
		if (e.target.id === "title") {
			move = document.getElementById("title");
			x = e.clientX * 200 / window.innerWidth - 50;
			y = e.clientY * 100 / window.innerHeight - 50;
		} else if (e.target.id === "logo") {
			move = document.getElementById("logo");
			x = e.clientX * 600 / window.innerWidth - 50;
			y = e.clientY * 800 / window.innerHeight - 50;
		}
		move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
		move.style.transition = "none";
	};

	// When the mouse leaves the element, it will restore it's position (translateY and translateX) to it's original location.
	const stopElement = (e) => {
		let stop = "";
		if (e.target.id === "title") {
			stop = document.getElementById("title");
		} else if (e.target.id === "logo") {
			stop = document.getElementById("logo");
		}
		setTimeout(() => {
			stop.style.transition = "all ease .2s";
			stop.style.transform = `translateX(${0}px) translateY(${0}px)`;
		}, 300);
	};

	const handleChangeValue = () => {
		setShow(!show);
	};

	return (
		<main>
			{/* checkbox that determines when the menu is open or closed to perform the animation of the icon */}
			<input type='checkbox' id='btn-nav' className='checkbox' />
			{/*  */}
			{/* web header with logo animation and the icon to display the menu */}
			<header>
				<div className='header-container'>
					<div>
						<img id='logo' src={logo} alt='' className='logo' onMouseMove={(e) => moveElement(e)} onMouseOut={(e) => stopElement(e)} />
					</div>

					<label htmlFor='btn-nav' className='btn-label' onClick={handleChangeValue}>
						<div className='header-button'></div>
					</label>
				</div>
			</header>
			{/*  */}
			{/* video in absolute position with a margin to the left to give the desired effect */}
			<div>
				<video muted autoPlay loop>
					<source src={video} type='video/mp4' />
				</video>
			</div>
			{/*  */}
			{/* We use a terniary operator to see what state the show variable is in, if it is false, the element will not be displayed in the DOM */}
			{!show && (
				<div>
					<h1 id='title' className='principal-text' onMouseMove={(e) => moveElement(e)} onMouseOut={(e) => stopElement(e)}>
						ICELAND
					</h1>
				</div>
			)}
			{/*  */}
			{/* We apply the tennary operator again to validate the state of the variable and display the images according to the screen visited */}
			{show !== null && (
				<div>
					<div className={`animate__animated  ${show ? "animate__fadeInBottomLeft animate__fast" : "animate__fadeOutBottomLeft animate__faster"}`}>
						<img src={DesktopImg} alt='' className='image-menu desktop' />
						<img src={tabletImg} alt='' className='image-menu tablet' />
						<img src={MobileImg} alt='' className='image-menu mobile' />
					</div>
				</div>
			)}
			{show && (
				<div>
					<div className={`rss animate__animated ${show ? "animate__fadeInRight animate__fast" : "animate__fadeOutRight animate__faster"}`}>
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
					{/* className='text-down fadeInOpacity' */}
					<div className='text-down fadeInOpacity'>
						<span className='text'>“Excellent service - emailed instructions, no hassle, car was ready as soon as we arrived.”</span>
					</div>
				</div>
			)}
			{/*  */}
			{/* Options menu with a list of options with animations will be initially hidden and when the value of the show variable is true it will be displayed */}
			{show !== null && (
				<nav id='nav-menu' className={`menu animate__animated ${show ? "animate__fadeInUp animate__faster" : "animate__fadeOutDown animate__faster"}  `}>
					<span className='text-upper'>English / Español</span>
					<ul>
						<li className={`animate__animated ${show && "animate__fadeInUp animate__slow"}`}>Inicio</li>
						<li className={`animate__animated ${show && "animate__fadeInUp animate__slower"}`}>Reservas</li>
						<li className={`animate__animated ${show && "animate__fadeInUp animate__slower"}`}>Tours</li>
						<li className={`animate__animated ${show && "animate__fadeInUp animate__slower"}`}>Nosotros</li>
						<li className={`animate__animated ${show && "animate__fadeInUp animate__slower"}`}>Contacto</li>
					</ul>
				</nav>
			)}
			{/*  */}
		</main>
	);
};

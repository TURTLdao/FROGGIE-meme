import React, { useState } from "react";

export default function Meme() {
	const FROGGIES_IMG = "https://github.com/TURTLdao/TURTL-images/blob/main/forggie.png?raw=true";

	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		FROGGIE: FROGGIES_IMG
	})

	function getMemeImage() {
		setMeme(prevMemes => ({
			...prevMemes,
			topText: "",
			bottomText: "",
			FROGGIE: FROGGIES_IMG
		}))
	}

	// controlled inputs for top and bottom text for every onChange on character stroke/value
	function handleChange(Event) {
		const { name, value } = Event.target
		setMeme(prevMeme => ({
			...prevMeme,
			[name]: value
		}))
	}

	return (
		<main className="container my-5">
			<div className="row">
				{/* top text */}
				<div className="col-lg-6 col-sm-12 form-floating mb-3">
					<input
						type="text"
						className="form-control px-3"
						id="floatingTop"
						placeholder="test"
						name="topText"
						onChange={handleChange}
						value={meme.topText}
					/>
					<label htmlFor="floatingTop">Top text</label>
				</div>

				{/* bottom text */}
				<div className="col-lg-6 col-sm-12 form-floating">
					<input
						type="text"
						className="form-control px-3"
						id="floatingBottom"
						placeholder="test"
						name="bottomText"
						onChange={handleChange}
						value={meme.bottomText}
					/>
					<label htmlFor="floatingBottom">Bottom text</label>
				</div>
			</div>
			<button
				type="button"
				className="w-100 py-2 my-3 text-dark button-primary"
				onClick={getMemeImage}
			>
				Create a new $FROGGIE Meme 🖼
			</button>
			<div className="meme position-relative text-center">
				<img src={meme.FROGGIE} className="meme-image" alt="Meme Image" />
				<h2 className="meme-text position-absolute top-0">{meme.topText}</h2>
				<h2 className="meme-text position-absolute bottom-0">{meme.bottomText}</h2>
			</div>
			<br />
		<footer className="container d-flex justify-content-center align-items-center text-dark py-3">Created by TurtleDAO, for the $FROGGIE's community.</footer>
		</main>
	)
}

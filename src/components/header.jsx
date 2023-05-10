import React from "react";

export default function Header() {
    const FROGGIES_IMG = "https://pbs.twimg.com/profile_images/1654219239706841091/I1O5j0V7_400x400.jpg";
    return (
        <header className="container-fluid">
            <nav className="container d-flex justify-content-center align-items-center text-dark py-3">
                <img className="nav-logo" src={FROGGIES_IMG} alt="Header Meme Logo" />
                <h5 className="nav-brand px-3 pt-1">
                    $FROGGIE Meme Generator - $ADA
                </h5>
            </nav>
        </header>
    )
}
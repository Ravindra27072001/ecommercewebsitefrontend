import React from 'react'


const Navbar = () => {

    let email = localStorage.getItem("email");

    const removeEmailFromLocalStorage = () => {
        localStorage.removeItem("email");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white ms-3" href="/">Amazon</a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-3">
                                <a className="nav-link text-white" href="/smartphones">Smartphones</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link text-white" href="/laptops">Laptops</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link text-white" href="/fragrances">Fragrances</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link text-white" href="/skincare">Skincare</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link text-white" href="/groceries">Groceries</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link text-white" href="/decoration">Decoration</a>
                            </li>
                        </ul>

                        {email ? (
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-white" style={{ "margin-right": "30px" }} href="/login" onClick={removeEmailFromLocalStorage}>Logout</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" style={{ "margin-right": "30px" }} href="/cart">Go to Cart</a>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-white" style={{ "margin-right": "30px" }} href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" style={{ "margin-right": "30px" }} href="/register">Register</a>
                                </li>
                            </ul>
                        )}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
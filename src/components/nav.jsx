import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import AttributeDropdown from "../components/attDropdown"
import '../styles/nav.scss'

class TopNav extends Component {

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         navBackground: 'white'
    //     }
    // }

    render() {
        return (
            <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/home" className="navbar-item">
                    Home
                </Link>
            </div>

            <div id="attribute-navbar" className="navbar-menu">

            <div className="navbar-start">

                <span className="navbar-item">
                    <Link to="/quiz" className="has-text-grey-dark">Quiz</Link>
                </span>

                <div className="navbar-item has-dropdown is-hoverable">
                    <span className="navbar-link">
                        All Attributes
                    </span>
                    <div className="navbar-dropdown">
                        <AttributeDropdown />
                    </div>
                </div>

                <div className="navbar-item has-dropdown is-hoverable">
                    <span className="navbar-link">
                        Explore
                    </span>

                    <div className="navbar-dropdown">
                    <div className="nested navbar-item dropdown">
                        <div className="dropdown-trigger">
                        <button aria-haspopup="true" aria-controls="dropdown-menu">
                            <Link to="/enneagram">By Personality</Link>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <span className="navbar-item">
                                    <Link to="/enneagram">Enneagram</Link>
                                </span>
                                <span className="navbar-item">
                                    <Link to="/disc">DISC</Link>
                                </span>
                                <span className="navbar-item">
                                    <Link to="/myersbriggs">Myers Briggs</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <span className="navbar-item">
                            <Link to="/emotion">By Emotion</Link>
                            </span>
                            <span className="navbar-item">
                            <Link to="/fear">By Fear</Link>
                            </span>
                            <span className="navbar-item">
                            <Link to="/struggle">By Struggle</Link>
                            </span>
                        </div>
                    </div>
                </div>

                <span className="navbar-item">
                    <Link to="/about" className="has-text-grey-dark">About</Link>
                </span>
            </div>

            <a onClick={this.openSidebar} className="navbar-item is-hidden-desktop is-hidden-tablet" href="/">
                <div id="menu-icon-wrapper" className="menu-icon-wrapper">
                    <svg width="1000px" height="1000px" fill="848484">
                        <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                        <path className="path2" d="M 300 500 L 700 500"></path>
                        <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                    </svg>
                    <button id="menu-icon-trigger" className="menu-icon-trigger"></button>
                </div>
            </a>
        </nav>
        </>
        )
    }
}

export default withRouter(TopNav)

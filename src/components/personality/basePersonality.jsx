import React, { Component } from "react";
import { Link } from "react-router-dom"

class BasePersonality extends Component {

    getComponent() {
        if (this.props.imagePosition === "left") {
            return (
                <section className="section has-background-primary">
                <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-5">
                            <figure className="image">
                                <img src={this.props.img} alt="Description" id="home-illustration"></img>
                            </figure>
                        </div>
                        <div className="column is-5 is-offset-1 landing-caption">
                            <h1 className="title is-1 is-bold is-spaced">
                                {this.props.type}
                            </h1>
                            <h2 className="subtitle is-5 is-muted">{this.props.description}</h2>
                            <h2 className="subtitle is-5 is-muted has-text-weight-bold">{this.props.connector}</h2>
                            <h5><Link to={`/attributes/${this.props.attribute}`} className="link">Go to {this.props.attribute}</Link></h5>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            )
        } else {
            return (
                <section className="section">
                <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-5 is-offset-1 landing-caption">
                            <h1 className="title is-1 is-bold is-spaced">
                                {this.props.type}
                            </h1>
                            <h2 className="subtitle is-5 is-muted">{this.props.description}</h2>
                            <h2 className="subtitle is-5 is-muted has-text-weight-bold">{this.props.connector}</h2>
                            <h5><Link to={`/attributes/${this.props.attribute}`} className="link">Go to {this.props.attribute}</Link></h5>
                        </div>
                        <div className="column is-5">
                            <figure className="image">
                                <img src={this.props.img} alt="Description" id="home-illustration"></img>
                            </figure>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            )
        }
    }

    render() {
        return(
            this.getComponent()
        )
    }
}

export default BasePersonality;
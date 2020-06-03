import React, { Component } from "react";
import emotionArray from '../../data/emotionArray'
import Media from '../../components/media'
import Hero from '../hero'
import '../../styles/connectors.css'


class Emotions extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
            <Hero title="Emotions" subtitle="Emotions" img="girl.png" />
                <div className="section">
                    <div className="container">
                        <section className="connectorContainer">
                        {
                            emotionArray.map(d =>
                                <Media title={d.emotionName} description={d.description} attribute={d.attributeName} img="girl.png" className="personalityMedia" />
                            )
                        }
                        </section>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Emotions;
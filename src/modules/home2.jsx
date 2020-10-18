import React from 'react';
import { withRouter, Link } from "react-router-dom"
import '../styles/home.css'
import attArray from '../data/attributeArray'
import {ReactComponent as CreativeIcon} from '../images/attributeIcons/SVG/creative.svg';
import {ReactComponent as EternalIcon} from '../images/attributeIcons/SVG/eternal.svg';
import {ReactComponent as FaithfulIcon} from '../images/attributeIcons/SVG/faithful.svg';
import {ReactComponent as GloriousIcon} from '../images/attributeIcons/SVG/glorious.svg';
import {ReactComponent as GoodIcon} from '../images/attributeIcons/SVG/good.svg';
import {ReactComponent as GraciousIcon} from '../images/attributeIcons/SVG/gracious.svg';
import {ReactComponent as HolyIcon} from '../images/attributeIcons/SVG/holy.svg';
import {ReactComponent as HumbleIcon} from '../images/attributeIcons/SVG/humble.svg';
import {ReactComponent as ImmutableIcon} from '../images/attributeIcons/SVG/immutable.svg';
import {ReactComponent as IncomprehensibleIcon} from '../images/attributeIcons/SVG/incomprehensible.svg';
import {ReactComponent as IndependentIcon} from '../images/attributeIcons/SVG/independent.svg';
import {ReactComponent as InvisibleIcon} from '../images/attributeIcons/SVG/invisible.svg';
import {ReactComponent as JealousIcon} from '../images/attributeIcons/SVG/jealous.svg';
import {ReactComponent as JoyfulIcon} from '../images/attributeIcons/SVG/joyful.svg';
import {ReactComponent as JustIcon} from '../images/attributeIcons/SVG/just.svg';
import {ReactComponent as LovingIcon} from '../images/attributeIcons/SVG/loving.svg';
import {ReactComponent as MercifulIcon} from '../images/attributeIcons/SVG/merciful.svg';
import {ReactComponent as OmnipotentIcon} from '../images/attributeIcons/SVG/omnipotent.svg';
import {ReactComponent as OmniscientIcon} from '../images/attributeIcons/SVG/omniscient.svg';
import {ReactComponent as PatientIcon} from '../images/attributeIcons/SVG/patient.svg';
import {ReactComponent as PeacefulIcon} from '../images/attributeIcons/SVG/peaceful.svg';
import {ReactComponent as PlanningIcon} from '../images/attributeIcons/SVG/planning.svg';
import {ReactComponent as ProvidingIcon} from '../images/attributeIcons/SVG/providing.svg';
import {ReactComponent as RelationalIcon} from '../images/attributeIcons/SVG/relational.svg';
import {ReactComponent as SavingIcon} from '../images/attributeIcons/SVG/saving.svg';
import {ReactComponent as SovereignIcon} from '../images/attributeIcons/SVG/sovereign.svg';
import {ReactComponent as TeachingIcon} from '../images/attributeIcons/SVG/teaching.svg';
import {ReactComponent as TruthfulIcon} from '../images/attributeIcons/SVG/truthful.svg';
import {ReactComponent as UniqueIcon} from '../images/attributeIcons/SVG/unique.svg';
import {ReactComponent as WiseIcon} from '../images/attributeIcons/SVG/wise.svg';
import Worker from "../assets/img/illustrations/worker.svg";
import FearIcon from "../assets/img/icons/fear.svg";
import StrugglesIcon from "../assets/img/icons/struggle.svg";
import PersonalityIcon from "../assets/img/icons/personality.svg";
import EmotionIcon from "../assets/img/icons/emotion.svg";
import Feature1 from "../assets/img/illustrations/features/feature-1.png";
import Feature2 from "../assets/img/illustrations/features/feature-2.png";
import Face1 from "../assets/img/illustrations/faces/1.png";
import Face2 from "../assets/img/illustrations/faces/2.png";
import Face3 from "../assets/img/illustrations/faces/3.png";
import Thought from "../assets/img/illustrations/features/thought.png";

class home2 extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        attribute: 'omniscient',
        description: 'omniscient'
    }
  }

  components = {
    creative: CreativeIcon,
    eternal: EternalIcon,
    faithful: FaithfulIcon,
    glorious: GloriousIcon,
    good: GoodIcon,
    gracious: GraciousIcon,
    holy: HolyIcon,
    humble: HumbleIcon,
    immutable: ImmutableIcon,
    incomprehensible: IncomprehensibleIcon,
    independent: IndependentIcon,
    invisible: InvisibleIcon,
    jealous: JealousIcon,
    joyful: JoyfulIcon,
    just: JustIcon,
    loving: LovingIcon,
    merciful: MercifulIcon,
    omnipotent: OmnipotentIcon,
    omniscient: OmniscientIcon,
    patient: PatientIcon,
    peaceful: PeacefulIcon,
    planning: PlanningIcon,
    providing: ProvidingIcon,
    relational: RelationalIcon,
    saving: SavingIcon,
    sovereign: SovereignIcon,
    teaching: TeachingIcon,
    truthful:	TruthfulIcon,
    unique: UniqueIcon,
    wise: WiseIcon
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.randomize();
  }

  randomize = () => {
    var randomNum = Math.floor((Math.random() * attArray.length));
    var attObj = attArray[randomNum]
    this.setState({attribute: attObj.attributeName,
                   description: attObj.description});
  }

  render() {
    const Icon = this.components[this.state.attribute]

    return(
      <>
        <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-5 is-offset-1 landing-caption">
                            <h1 className="title is-1 is-bold is-spaced">
                                Who is God?
                            </h1>
                            <h2 className="subtitle is-5 is-muted"> You're made in His image. This image is blurred, but we all have evidence of it in ourselves.</h2>
                            <div className="button-wrap">
                                <a className="button cta is-rounded primary-btn raised">
                                    <Link to="/quiz">Take the Quiz</Link>
                                </a>
                            </div>
                        </div>
                        <div className="column is-5">
                            <figure className="image">
                                <img src={Thought} alt="Description" id="home-illustration"></img>
                            </figure>
                        </div>

                    </div>
                </div>
        </div>

        {/* <div className="hero-foot mb-20">
            <div className="container">
                <div className="tabs is-centered">
                    <ul>
                        <li><a><img className="partner-logo" src="../logos/clients/systek.svg"></img></a></li>
                        <li><a><img className="partner-logo" src="../assets/img/logos/clients/tribe.svg"></img></a></li>
                        <li><a><img className="partner-logo" src="../assets/img/logos/clients/kromo.svg"></img></a></li>
                        <li><a><img className="partner-logo" src="../assets/img/logos/clients/infinite.svg"></img></a></li>
                        <li><a><img className="partner-logo" src="../assets/img/logos/clients/gutwork.svg"></img>
                            </a></li>
                    </ul>
                </div>
            </div>
        </div> */}

        <section className="section is-medium has-background-image" style={{backgroundImage: `url(https://source.unsplash.com/g30P1zcOzXo/1600x900)`}} data-color="#4FC1EA" data-color-opacity=".6">
        <div className="overlay"></div>
        <div className="container">
                <div className="title-wrapper has-text-centered">
                    <h2 className="title is-2">There are many ways to connect with God.</h2>
                    <h3 className="subtitle is-5">Our humanity is from Him.</h3>
                    <div className="divider is-centered"></div>
                </div>

                <div className="content-wrapper homepage-connectors">
                <div className="columns">
                    <div className="column is-3">
                        <div className="feature-card is-bordered has-text-centered is-feature-reveal">
                            <div className="card-title">
                                <h4>Personality</h4>
                            </div>
                            <div className="card-icon">
                                <img src={PersonalityIcon}></img>
                            </div>
                            <div className="card-text">
                                <p>This is some cool explanatory text that is on two rows</p>
                            </div>
                            <div className="card-action">
                                <a href="#" className="button btn-align-md primary-btn raised">Free Trial</a>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div className="feature-card is-bordered has-text-centered is-feature-reveal">
                            <div className="card-title">
                                <h4>Fear</h4>
                            </div>
                            <div className="card-icon">
                                <img src={FearIcon}></img>
                            </div>
                            <div className="card-text">
                                <p>This is some explanatory text that is on two rows</p>
                            </div>
                            <div className="card-action">
                                <a href="#" className="button btn-align-md primary-btn raised">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div className="feature-card is-bordered has-text-centered is-feature-reveal">
                            <div className="card-title">
                                <h4>Emotion</h4>
                            </div>
                            <div className="card-icon">
                                <img src={EmotionIcon}></img>
                            </div>
                            <div className="card-text">
                                <p>This is some explanatory text that is on two rows</p>
                            </div>
                            <div className="card-action">
                                <a href="#" className="button btn-align-md primary-btn raised">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div className="feature-card is-bordered has-text-centered is-feature-reveal">
                            <div className="card-title">
                                <h4>Struggles</h4>
                            </div>
                            <div className="card-icon">
                                <img src={StrugglesIcon}></img>
                            </div>
                            <div className="card-text">
                                <p>This is some explanatory text that is on two rows</p>
                            </div>
                            <div className="card-action">
                                <a href="#" className="button btn-align-md primary-btn raised">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section className="section is-medium">
            <div className="container">
                <div className="title-wrapper has-text-centered">
                    <h2 className="title is-2">Discover the attributes of God.</h2>
                    <h3 className="subtitle is-5 is-muted">His many facets....</h3>
                    <div className="divider is-centered"></div>
                </div>

                <div className="columns is-vcentered side-feature mt-60">
                    <div className="column is-4 is-offset-2">
                        <h3 className="title is-3 mb-10 is-title-reveal">{this.state.attribute}</h3>
                        <p className="subtitle is-5 is-muted">attribute description.....</p>
                        <div className="button-wrap">
                                <a className="button cta is-rounded primary-btn raised">
                                    <Link to={`/attributes/${this.state.attribute}`}>Learn More</Link>
                                </a>
                        </div>
                    </div>
                    <div className="column is-5">
                        <img src={Feature1} alt=""></img>
                    </div>
                </div>

                {/* <div className="columns is-vcentered side-feature mt-60">
                    <div className="column is-5 is-offset-1">
                        <img src={Feature2} alt=""></img>
                    </div>
                    <div className="column is-4 is-offset-1">
                        <h3 className="title is-3 mb-10 is-title-reveal">Collaborate easily</h3>
                        <p className="subtitle is-5 is-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum audissem Antiochum, Brute, ut solebam, cum M. Quae diligentissime contra Aristonem dicuntur a Chryippo.</p>
                    </div>
                </div> */}
            </div>
        </section>

        <section className="section is-medium has-background-image" style={{backgroundImage: `url(https://source.unsplash.com/g30P1zcOzXo/1600x900)`}} data-color="#4FC1EA" data-color-opacity=".6">
            <div className="overlay"></div>
            <div className="container">

                <div className="title-wrapper has-text-centered">
                    <h2 className="title is-2 light-text is-spaced">You are unique.</h2>
                    <h3 className="subtitle is-5 light-text">Personality tests are a helpful way to understand yourself and others better. Browse the personality types below to see how your results reflect God.</h3>
                </div>

                <div className="content-wrapper homepage-personality">
                    <div className="columns is-vcentered">
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                    Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
                                </blockquote>
                                <div className="author">
                                    <img src={Face1} alt=""></img>
                                    <h5><Link to="/enneagram">Enneagram</Link></h5>
                                </div>
                            </figure>
                        </div>
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                    Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
                                </blockquote>
                                <div className="author">
                                    <img src={Face2} alt=""></img>
                                    <h5><Link to="/myersbriggs">Myers Briggs</Link></h5>
                                </div>
                            </figure>
                        </div>
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                    Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
                                </blockquote>
                                <div className="author">
                                    <img src={Face3} alt=""></img>
                                    <h5><Link to="/disc">DISC</Link></h5>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
  }
}

export default withRouter(home2);


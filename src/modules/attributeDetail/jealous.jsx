import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Jealous extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Jealous" subtitle="To desire the best  for our own" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="JealousContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jealous means to eagerly desire the best for our own and thus not tolerate rivals.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We want what is good for those closest to us - and we expect those close to us to want and do good for us as well.  84% of Americans surveyed in a 2013 Pew Research Center study believed cheating on one’s spouse was morally unacceptable.  At least 60% of respondents viewed infidelity as wrong in 38 of 39 nations polled (only exception: France). </p>
                  <p className="is-size-6 leading-normal padded">My biggest fears show what I value the most.  I work hard to avoid losing what I value (fear is often about potential loss).  When others take away what I value, it seems like punishment, for which I may blame God.  But when I sense God’s jealous love for me, I realize the high value He has for me and that every action He takes is for my good.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">If God loves me, why should I fear Him?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Fear anticipates danger which could harm me or something I love.  If I don’t fear God, I will live in life’s abundance of fears. Each fear will remind me that what I value is always vulnerable.  And I will likely overlook the greatest danger of life - not knowing, trusting and loving God.</p>
                  <p className="is-size-6 leading-normal padded">When I fear God, I recognize His power and authority over me, and realize how dangerous He is and how vulnerable I am.  But fear of God is so much more.  It includes realizing His protective love for me - like a shelter or shadow which can never be removed.  It does not protect me from all trouble - because God promises to be with me IN trouble - but rather protects me from what can truly harm me, a separation from Him.  And my fear of God will diminish all other fears because they only anticipate a loss of something with much less value than God. </p>
                  <br></br>
                  <Testimonial quote="He who dwells in the shelter of the Most High will abide in the shadow of the Almighty.  I will say to the LORD, ‘My refuge and my fortress, my God, in whom I trust.’ ….….You will not fear the terror of the night, nor the arrow that flies by day, nor the pestilence that stalks in darkness, nor the destruction that wastes at noonday…..’Because he holds fast to me (God) in love, I will deliver him; I will protect him, because he knows my name.  When he calls to me, I will answer him; I will be with him in trouble;  I will rescue him and honor him.  With long life I will satisfy him and show him my salvation.’ " reference="Psalm 91:1-2, 5-6, 14-16" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Will God punish me for unfaithfulness?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">God’s jealousy wants the best (that is, Himself) for all people.  An unbeliever is already experiencing the natural consequence of the sin of unbelief - separation from God.  But if I believe in God and then am unfaithful, He only acts for my good.  I may experience natural consequences of sin which are designed to point me in a better direction (but may feel “bad” at the time). I may also experience good from obedience to His law.  But to see God as doling out punishment for every violation and reward for every obedience is missing His true and jealous love - and dismisses Jesus’ work of the cross. </p>
                  <br></br>
                  <Testimonial quote="And we know that for those who love God all things work together for good, for those who are called according to his purpose." reference="Rom 8:28" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Doesn’t God want me to enjoy the things of this life?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God wants me to enjoy life to the fullest and He knows that this comes first from loving Him.  God distastes any competing affections that cause me to love Him less because I will then gravitate to a self-centered life, with little-to-no capacity to truly love others, including myself.  This is so important that He uses the first four "ten commandments" to emphasize it - 1) don't have other gods, 2) don't make any idols (i.e. anything more important than God), 3) don't take God's name in vain (anything which devalues who He is), and 4) remember the Sabbath (which constantly reminds me of #1-3).</p>
                  <br></br>
                  <Testimonial quote=" 'You shall have no other gods before me. You shall not make for yourself a carved image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth. You shall not bow down to them or serve them, for I the LORD your God am a jealous God...'" reference="Exod 20:3-5a" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God’s jealousy is not tainted with sin.</h1></section>
                  <p className="is-size-6 leading-normal padded">Two words for jealous are used in the Bible - quana (for human jealousy) and quanna (used only for God's jealousy).  Only quana allows for sin.  We selfishly mix what is best for us in with what we think is best for our own.  God owns believers - we do not own Him.  He protects us with a jealous fire that burns away all that is not best for us. </p>
                  <br></br>
                  <Testimonial quote="For the LORD your God is a consuming fire, a jealous God." reference=" Deut 4:24" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus is the actual bridegroom who is about to wed His bride, the Church (all believers).</h1></section>
                  <p className="is-size-6 leading-normal padded">He protects His bride by defeating her primary opponents, Satan and sin, by dying on the cross so that she/we may become pure.</p>
                  <Testimonial quote="For the husband is the head of the wife even as Christ is the head of the church, his body, and is himself its Savior…..Husbands, love your wives, as Christ loved the church and gave himself up for her, that he might sanctify her, having cleansed her by the washing of water with the word, so that he might present the church to himself in splendor, without spot or wrinkle or any such thing, that she might be holy and without blemish." reference="Eph 5:23, 25-27" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Recognize and lean into God’s loving protection as a bride into her bridegroom’s arms.  Become His prized possession by fully trusting His promises and accepting His commands as what is best for me.   Ask: Which promises or commands of God do I see as not ultimately for my own good?</p>
                  <Testimonial quote="But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light." reference="1 Pet 2:9" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">You are Jealous, God, and I am thankful for that.  Your jealousy desires only your best for me.  Help me to see that and live a life in which your protective love casts out all my earthly fears.</p>
                  <Testimonial quote="So we have come to know and to believe the love that God has for us. God is love, and whoever abides in love abides in God, and God abides in him. By this is love perfected with us, so that we may have confidence for the day of judgment, because as he is so also are we in this world. There is no fear in love, but perfect love casts out fear." reference="1 John 4:16-18a" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Why do so many marriages end in divorce? </h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">The top causes of divorce include infidelity, addictions, lack of commitment and/or communication, or major stressors, such as death of a child, spouse with major illness, or money issues.</p>
                  <p className="is-size-6 leading-normal padded">Real love includes both love and hate, each seeking what is best for the relationship.  This hate is proactively directed toward whatever may hurt the relationship - whether it be an addiction, a philanderer, or a too-busy schedule.   "Love sees sharply, hatred sees even more sharp, but jealousy sees the sharpest for it is love and hate at the same time” - Arab Proverb</p>
                  <p className="is-size-6 leading-normal padded">“….Jealousy is an anticipatory emotion. It seeks to prevent loss," said Ralph Hupka, Professor of Psychology, Emeritus at California State University at Long Beach. "Jealousy causes us to take precautionary measures. Should those fail and the partner has an affair, the new situation arouses anger, depression, disappointment, and so on.” - 8/18/16 article “How Jealousy Works” in Spirit Mind Body Connection</p>
                  <p className="is-size-6 leading-normal padded">"Let love be genuine. Abhor what is evil; hold fast to what is good." - Rom 12:9</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How does jealousy connect the Jewish and Christian religions?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Jews have pursued God through a religion of works for centuries.  And although God chose Israel and the Jewish people to be His faithful ones, many refused to accept Jesus in faith as Messiah.  This rejection allowed this gift to be offered to Gentiles (all non-Jews), resulting in Christianity. Some Jews now and more in the future will become jealous of this gracious faith and be drawn to Jesus.</p>
                  <p className="is-size-6 leading-normal padded">"Now I am speaking to you Gentiles. Inasmuch then as I am an apostle to the Gentiles, I magnify my ministry in order somehow to make my fellow Jews jealous, and thus save some of them." - Rom 11:13-14</p>

                  <Grid />
                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">Jealous God - Know Hope Collective</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Now I know you would stop at nothing, to pull me close, steal my heart away. So here I am broken and listening.Held captive here and I just wanna stay." - First verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Jealous);
import React from "react"

import Section from "../../components/Section"

import aboutImage from "../../assets/about-image.jpg"

function About() {
    return (
        <Section title="About Me" anchor="about">
            <article className="article-about">
                <div className="about-text">
                    <p>
                        Ut, dolore maxime ea impedit,
                        dicta aliquid debitis dolor aut temporibus voluptatum
                        perspiciatis incidunt mollitia soluta.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore molestias deleniti laborum pariatur placeat
                        fugiat magni tenetur adipisci, sequi architecto maiores.
                    </p>
                    <p>
                        Ratione quis harum ad perferendis,
                        eius perspiciatis, iure quos velit consequuntur ab
                        quae provident eligendi nobis officiis dignissimos
                        praesentium voluptas impedit facere?
                    </p>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt=" " />
                </div>
            </article>
        </Section>
    )
}

export default About
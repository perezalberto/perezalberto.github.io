import React from "react"

import Section from "../../components/Section"

import aboutImage from "../../assets/about-image.jpg"

function About() {
    return (
        <Section title="About Me" anchor="about">
            <article className="article-about">
                <div className="about-text">
                    <p>
                        <b>Hi</b>, I&apos;m <b>Alberto Perez</b>, I&apos;m passionate about programming. In constant learning of the latest technologies on web development
                    </p>
                    <p>
                        I have frontend skills in CSS, HTML, JavaScript, TypeScript, React and VueJS and Backend in Node with ExpressJs
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
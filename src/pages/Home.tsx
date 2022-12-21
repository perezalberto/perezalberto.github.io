import React from "react"
import Header from "./home/Header"
import About from "./home/About"
import Skills from "./home/Skills"
import Projects from "./home/Projects"
import Contact from "./home/Contact"
import Footer from "./home/Footer"

function Home() {
    return (
        <>
            <Header />
            <main className="container">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>        
    )
}

export default Home
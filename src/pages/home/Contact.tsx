import React, { useState } from "react"
import Button, { ButtonStyle, ButtonType } from "../../components/Button"
import CheckIcon from "../../components/icons/CheckIcon"
import ClipboardCheckIcon from "../../components/icons/ClipboardCheckIcon"
import ClipboardIcon from "../../components/icons/ClipboardIcon"
import GithubIcon from "../../components/icons/GithubIcon"
import LinkedInIcon from "../../components/icons/LinkedInIcon"
import PaperPlaneIcon from "../../components/icons/PaperPlaneIcon"
import TwetterIcon from "../../components/icons/TwetterIcon"
import XmarkIcon from "../../components/icons/XmarkIcon"
import Section from "../../components/Section"
import { ContentDirection, useForm } from "../../hooks/useForm"

function CopyableText({ text }: {text: string}) {
    const [isCopied, setCopiedState] = useState(false)

    const copyEmailToClipboard = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        navigator.clipboard.writeText(text)
        setCopiedState(true)
        setTimeout(() => {
            setCopiedState(false)
        }, 2000)
    }

    return (
        <a href="#" onClick={copyEmailToClipboard}>
            <span>{text}</span>
            <span className={isCopied ? "pl-1 clipboard-icon copied" : "pl-1 clipboard-icon"}>
                {isCopied ? <ClipboardCheckIcon /> : <ClipboardIcon />}
            </span>
        </a>
    )
}

function Contact() {
    const [submitState, setSubmitState] = useState({ style: ButtonStyle.ACCENT, text: "Submit", icon: <PaperPlaneIcon /> })
    const [isLoading, setLoadingState] = useState(false)

    const {Form, FormContainer} = useForm<{name: string, email: string, text: string}>()

    const handleSubmit = async (data: {name: string, email: string, text: string}) => {
        setLoadingState(true)
        const response = await fetch("https://wild-crown-seal.cyclic.app/api/send-message", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name, email: data.email, text: data.text,
            }),
        })

        const result = await response.json()

        if (result.ok) {
            setSubmitState({ style: ButtonStyle.SUCCESS, text: "message sent", icon: <CheckIcon /> })
        } else {
            setSubmitState({ style: ButtonStyle.ERROR, text: "message not sent", icon: <XmarkIcon /> })
        }

        setLoadingState(false)

        setTimeout(() => {
            setSubmitState({ style: ButtonStyle.ACCENT, text: "Submit", icon: <PaperPlaneIcon /> })
        }, 5000)
    }

    return (
        <Section title="Contact" anchor="contact">
            <article className="article-contact">
                <div className="contact-form">
                    <Form onSubmit={handleSubmit}>
                        <FormContainer direction={ContentDirection.ROW}>
                            <input type="text" placeholder="Full Name" name="name" required />
                            <input type="email" placeholder="E-mail" name="email" required />
                        </FormContainer>
                        <FormContainer>
                            <textarea placeholder="Message" name="text" required />
                        </FormContainer>
                        <FormContainer direction={ContentDirection.ROW}>
                            <div>
                                <Button icon={submitState.icon} loading={isLoading} style={submitState.style} type={ButtonType.SUBMIT}>
                                    {submitState.text}
                                </Button>
                            </div>
                        </FormContainer>
                    </Form>
                </div>
                <div className="contact-method-list">
                    <div className="contact-method">
                        <h2>Email</h2>
                        <CopyableText text="albertoperez2192@gmail.com" />
                    </div>
                    <div className="contact-method">
                        <h2>Cel Number</h2>
                        <CopyableText text="+59898271493" />
                    </div>
                    <div className="contact-method social-media">
                        <h2>Social Media</h2>
                        <ul>
                            <li><a href="#linkedin"><LinkedInIcon /></a></li>
                            <li><a href="#github"><GithubIcon /></a></li>
                            <li><a href="#twitter"><TwetterIcon /></a></li>
                        </ul>
                    </div>
                </div>
            </article>
        </Section>
    )
}

export default Contact

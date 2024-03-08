// import ParticlesBg from "particles-bg";
import React from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import { Container, Col, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FaInstagram, FaSquareGithub, FaLinkedinIn } from "react-icons/fa6";
import Zmage from "react-zmage";

const Header = (props) => {
    if (!props.data) return null;


    const { cv, contact, name, img, social } = props.data;
    const profileimg = "assets/" + img;

    const sosmed = social.map((media) => {
        if (media.name === "instagram") {
            return (
                <li key={media.name}>
                    <a href={media.url}>
                        <FaInstagram className="text-light fs-2" />
                    </a>
                </li>
            );
        } else if (media.name === "github") {
            return (
                <li key={media.name}>
                    <a href={media.url}>
                        <FaSquareGithub className="text-light fs-2" />
                    </a>
                </li>
            );
        } else if (media.name === "linkedin") {
            return (
                <li key={media.name}>
                    <a href={media.url}>
                        <FaLinkedinIn className="text-light fs-2" />
                    </a>
                </li>
            );
        } else {
            return (
                <li key={media.name}>
                    <a href={media.url}>
                        <i></i>
                    </a>
                </li>
            );
        }
    });


    return (
        <header>
            <section id="home">
                <Container>
                    <Fade>
                        <div className="d-flex justify-content-center">
                            <Zmage src={profileimg} className="size-img bg-dark shadow-lg mx-auto" />
                        </div>
                    </Fade>

                    <Col md={12}>
                        <Fade bottom>
                            <h1 className="text-white fs-4 pt-4 text-center">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 35,
                                        strings: [name],
                                    }}
                                />
                            </h1>
                        </Fade>
                        <Bounce top duration={2000} triggerOnce={true}>
                            <div className="pt-3">
                                <ul className="d-flex ps-0 justify-content-center gap-3 list-style">{sosmed}</ul>
                            </div>
                        </Bounce>

                        <Fade bottom duration={3000} triggerOnce={true}>
                            <div className="gap-2 d-flex pt-2 justify-content-center">
                                <a href={contact}>
                                    <Button className="bg-success border-0 bg">Contact Me</Button>
                                </a>
                                <a href={cv}>
                                    <Button className="bg-white border-0 text-dark bg">Resume CV</Button>
                                </a>
                            </div>
                        </Fade>
                    </Col>
                </Container>
            </section>
        </header>
    );
}

export default Header;



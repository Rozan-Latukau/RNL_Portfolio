import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaInstagram, FaSquareGithub, FaLinkedinIn } from "react-icons/fa6";

const Contact = (props) => {
    if (!props.data) return null;

    const { social } = props.data;
    const handleChange = (e) => {
        e.preventDefault();
    }

    const medsos = social.map((sosial) => {
        if (sosial.name === "instagram") {
            return (
                <li key={sosial.name}>
                    <a href={sosial.url}>
                        <FaInstagram className="text-light fs-2" />
                    </a>
                </li>
            );
        } else if (sosial.name === "github") {
            return (
                <li key={sosial.name}>
                    <a href={sosial.url}>
                        <FaSquareGithub className="text-light fs-2" />
                    </a>
                </li>
            );
        } else if (sosial.name === "linkedin") {
            return (
                <li key={sosial.name}>
                    <a href={sosial.url}>
                        <FaLinkedinIn className="text-light fs-2" />
                    </a>
                </li>
            );
        } else {
            return (
                <li key={sosial.name}>
                    <a href={sosial.url}>
                        <i></i>
                    </a>
                </li>
            );
        }
    })


    return (
        <section id="contact" className="bg-black">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="text-center text-white">
                            <div className="gap-3 display-form list-style">
                                {medsos}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;


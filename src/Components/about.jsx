import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Flickity from "react-flickity-component";

const About = (props) => {
    if (!props.data) return null;

    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
        autoPlay: 1000,
    };

    const { description, education, skills, experience } = props.data;

    const educations = education.map((education, index) => {
        const educationStyle = index === 1 ? {} : { marginBottom: '25px' };
        return (
            <div className="text-start text-white" style={educationStyle} key={index}>
                <h5 className="fw-medium mb-0">{education.jurusan}</h5>
                <div className="d-md-flex gap-2 mt-1">
                    <p className="text-primary mb-0">{education.kampus}</p>
                    <p className="text-danger mb-2">{education.tahun}</p>
                </div>
                <p className="text-justify mb-0">{education.info}</p>
            </div>
        );
    });

    const skillsList = skills.map((skill, index) => {
        const profileImg = "assets/" + skill.skil;
        return (
            <div key={index}>
                <img src={profileImg} className="imgskil" alt={`skill-${index}`}></img>
            </div>
        );
    });

    const experiences = experience.map((experience, index) => {
        const experienceStyle = index === 1 ? {} : { marginBottom: '25px' };
        return (
            <div className="text-start text-white" style={experienceStyle} key={index}>
                <h5 className="fw-medium mb-0">{experience.job}</h5>
                <div className="d-md-flex gap-2 mt-1">
                    <p className="text-primary mb-0">{experience.nama}</p>
                    <p className="text-danger mb-2">{experience.tahun}</p>
                </div>
                <p className="text-justify mb-0">{experience.deskripsi}</p>
            </div>
        );
    });

    return (
        <section id="about">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2 className="text-start fw-bold pb-2 text-white">Tentang</h2>
                        <Fade direction="left" duration={1500} triggerOnce={true}>
                            <div className="text-justify p-3 shadow-sm rounded-4 border border-1 lh-base mb-3">
                                <p className="mb-0 text-white">{description}</p>
                            </div>
                        </Fade>
                    </Col>
                    <Col md={6}>
                        <Fade direction="right" duration={1500} triggerOnce={true}>
                            <h4 className="text-start fw-medium pt-2 pb-2 mb-0 text-white">Pendidikan</h4>
                            <div className="mt-2 p-3 shadow-sm rounded-4 mb-3 border border-1">{educations}</div>
                        </Fade>
                    </Col>
                    <hr className="text-white mt-5" />
                    <Col md={12}>
                        <Fade direction="left" duration={1500} triggerOnce={true}>
                            <h4 className="text-start fw-medium pt-2 pb-2 mb-0 text-white">Skill</h4>
                        </Fade>
                        <div className="text-start p-3 shadow-sm rounded-4 border border-1 mt-2 text-white bars mb-3 overflow-hidden">
                            <Flickity options={flickityOptions}>
                                {skillsList}
                            </Flickity>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Fade direction="right" duration={1500} triggerOnce={true}>
                            <h4 className="text-start fw-medium pt-2 pb-2 mb-0 text-white">Pengalaman</h4>
                            <div className="mt-2 p-3 shadow-sm rounded-4 border border-1 mt-2">{experiences}</div>
                        </Fade>
                    </Col>
                    <hr className="text-white mt-5 mb-5" />
                </Row>
            </Container>
        </section>
    );
};

export default About;

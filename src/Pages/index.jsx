import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import '@/Style/style.css';
import Header from "@/Components/header";
import Navbar from "@/Pages/Auth/navbar";
import About from '@/Components/about';
import Project from '@/Components/project';
import Contact from '@/Components/footer';

const Index = () => {
    const [data, setData] = useState({
        foo: 'bar',
        dB: {},
    });
    const [developmentMode] = useState(false); // State untuk mode pengembangan

    useEffect(() => {
        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);
        getDB();
    }, []);

    const getDB = () => {
        $.ajax({
            url: './dB.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                setData((prevState) => ({
                    ...prevState,
                    dB: data,
                }));
            },
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            },
        });
    };

    return (
        <div className="App">
            {/* Text untuk mode pengembangan */}
            {developmentMode && (
                <div className="vh-100 d-grid justify-content-center align-items-center ">
                    <h2 className='text-white'>Mohon Maaf, Portfolio Sedang dalam Pembaharuan</h2>
                </div>
            )}
            {/* Header */}
            {developmentMode ? null : <Navbar data={data.dB.main} />}
            {/* Header */}
            {developmentMode ? null : <Header data={data.dB.main} />}

            {/* About */}
            {developmentMode ? null : <About data={data.dB.main} />}

            {/* Project */}
            {developmentMode ? null : <Project data={data.dB.project} />}

            {/* Contact */}
            {developmentMode ? null : <Contact data={data.dB.main} />}
        </div>
    );
};

export default Index;

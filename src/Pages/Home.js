import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import "../assets/css/home.css"
import Community from "../components/Community"
import { Container, Button, Box, Typography } from "@material-ui/core"
import HomeImg from "../assets/home.png"
import Engage from "../components/Engage" 
import Members from "../components/Members" 
import Donations from "../components/Donations" 
import Attend from "../components/Attend" 
import Interract from "../components/Interract"
import People from "../components/People"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"
import Selection from "../components/Selection"
import MotionText from "../components/MotionText"
import Zoom from "react-reveal/Zoom"
import Slide from "react-reveal/Slide"
function Home() {
    return (
        <div>
            <Slide up>
            <Container  className="container">
                <Box className="home-overlay">
                    
                    <Box className="overlay-text">
                        <Typography variant="h1">
                            We Help to Build Your Dream
                        </Typography>
                        <Typography variant="subtitle2" className="description">
                            Probabo, inquit, sic agam, ut summum malum et,
                            quantum possit, a sapiente delectus. At magnum
                            periculum adiit in quo minus id, quod maxime
                        </Typography>
                        <Button className="home-btn">Get Started</Button>
                    </Box>
                    <Box className="overlay-img">
                        <div className="bubbles">
                            <span className="bob"></span>
                            <span className="bob"></span>
                        </div>
                    </Box>
                </Box>
            </Container>
            </Slide>
            <Community/>
            <Engage />
            <MotionText/>
            <Donations/>
            <Attend/>
            <People/>
            <Selection/>
            <Interract />
            <Members/>
        </div>
    )
}

export default Home

import React, { Fragment } from 'react'
import { Container, Box, Typography } from "@material-ui/core"
import "../assets/css/attend.css"
import sitting from "../assets/sitting.png"
import Bounce from "react-reveal/Bounce"
import Zoom from "react-reveal/Zoom"
function Attend() {
    return (
        <Fragment>
            <Container className="container">
                <Box className="main-container">
                    <Box className="engage-img">
                        <img src={sitting} className="layer-img" alt=""/>
                    </Box>
                    <Box className="engage-text">
                        <Zoom>
                            <Typography variant="h3">
                            Attend Key Events You Care about
                            </Typography>
                        </Zoom>
                        <Bounce right>
                            <Typography variant="body1" className="details"> 
                                Find and book key events around you. From concerts,
                                to conferences and much more, easily discover your
                                next experiences
                            </Typography>
                        </Bounce>
                    </Box>
                </Box>
            </Container>
        </Fragment>
    )
}

export default Attend

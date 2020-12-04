import React, { Fragment } from 'react'
import { Container, Box, Typography } from "@material-ui/core"
import "../assets/css/donations.css"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"
import Zoom from "react-reveal/Zoom"
import RubberBand from "react-reveal/RubberBand"
function Donations() {
    return (
        <Fragment>
            <Container className="container">
                <Box className="main-container">
                    <Box className="donate-text">
                        <Bounce right>
                            <Typography variant="h3">
                                Easy Donations to Your Church
                            </Typography>
                        </Bounce>
                        <Fade left>
                            <Typography variant="body1" className="details"> 
                                It's now so simple and seamless to give to your Church
                                during service or whilst abroad. Donations take less
                                than 10 secs. Simply review your past donations
                                anytime, anywhere via the app. FaithCircle app also
                                shows you the tax incentives you're entitled on your
                                donations.
                            </Typography>
                        </Fade>
                    </Box>
                    <Box className="donate-img"></Box>
                </Box>
            </Container>
        </Fragment>
    )
}

export default Donations

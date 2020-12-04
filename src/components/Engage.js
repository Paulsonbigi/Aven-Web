import React, { Fragment } from 'react'
import { Container, Box, Typography } from "@material-ui/core"
import "../assets/css/engage.css"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"
import Zoom from "react-reveal/Zoom"

function Engage() {
    return (
        <Fragment>
            <Container className="container">
                <Box className="main-container">
                    <Box className="engage-img"></Box>
                    <Box className="engage-text">
                        <Bounce right>
                            <Typography variant="h3">
                                Engage with Your Faith Community
                            </Typography>
                        </Bounce>
                        <Fade up>
                            <Typography variant="body1" className="details"> 
                                Connect with people of Faith locally and around the
                                globe. Find other like-minded believers, make new
                                friends, form deeper relationship & partnership,
                                socialize and do more.
                            </Typography>
                        </Fade>
                    </Box>
                </Box>
            </Container>
        </Fragment>
    )
}

export default Engage

import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import "../assets/css/community.css"
import img1 from "../assets/community.png"
import Bounce from "react-reveal/Bounce"
import { Typography, Box, Container, Button } from "@material-ui/core"
function Community() {
    return (
        <Fragment>
            <Container className="container">
                <Box className="main-container">
                    <Bounce right>
                        <Box className="community-text">
                            <Typography variant="h3">
                                Meet New People in Your Community
                            </Typography>
                            <Typography variant="body1" className="details">
                                Connect with people of Faith locally and around the
                                globe. Find other like-minded believers, make new
                                friends, form deeper relationship & partnership,
                                socialize and do more.
                            </Typography>
                        </Box>
                    </Bounce>
                    <Box className="commuinity-img">
                    </Box>
                </Box>
            </Container>
        </Fragment>
    )
}

export default Community

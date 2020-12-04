import React, { Fragment } from 'react'
import { Container, Box, Typography } from "@material-ui/core"
import "../assets/css/people.css"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"
import Zoom from "react-reveal/Zoom"
import sitting from "../assets/sitting.png"
function People() {
    return (
        <Fragment>
            <Container className="main-container">
                <Box className="people">
                    <Bounce right>
                        <Typography variant="h4">
                            Meet with like-minded people. Make
                            new friends. Share moments that matter
                        </Typography>
                    </Bounce>
                    <Zoom right>
                        <Box className="people-img">

                        </Box>
                    </Zoom>
                </Box>
            </Container>
        </Fragment>
    )
}

export default People

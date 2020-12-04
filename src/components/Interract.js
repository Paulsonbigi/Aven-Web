import React, { Fragment} from 'react'
import { Typography, Container, Link, Box} from "@material-ui/core"
import spons1 from "../assets/spons1.png"
import spons2 from "../assets/spons2.png"
import "../assets/css/interract.css"
import Zoom from "react-reveal/Zoom"
function Interract() {
    return (
        <Fragment>
            <Container className="main-container">
                <Box className="int-container">
                    <Zoom left>
                        <Typography variant="h4">
                            Join & interact with likeminded believers in your community & around the world via the FaithCircle app.
                            Available on iOS and Android.
                        </Typography>
                    </Zoom>
                    {/* <Fade right> */}
                        <Box className="int-img">
                            <Link to=""><img src={spons1} alt=""/></Link>
                            <Link to=""><img src={spons2} alt=""/></Link>
                        </Box>
                    {/* </Fade> */}
                </Box>
            </Container>
        </Fragment>
    )
}

export default Interract

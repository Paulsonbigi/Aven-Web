import React from "react"
import { Container, Typography, Card, Box } from "@material-ui/core"
import Typical from "react-typical"
import "../assets/css/motiontext.css"
const MotionText = () => {
    return (
        <Container>
            <Card className="motion-card">
                <Box className="card-text">
                    <Typical
                        steps={["Eveverday the demand for highly responsive software,", 2500, "is an an all-time high to drive greater profitability.", 2500]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </Box>
            </Card>
        </Container>
    )
}

export default MotionText
import React from 'react'
import { Container, Box, Typography, CircularProgress } from "@material-ui/core"
import "../assets/css/about.css"
import Values from "../components/Values"
function About() {
    return (
        <Container>
            <Box>
                <Box className="header">
                    <Typography variant="h3">
                        About us
                    </Typography>
                </Box>
                <Box className="content">
                    <Typography>
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Pariatur, ipsa? Excepturi tempora 
                        consectetur asperiores accusantium 
                        ratione, a dolor consequuntur reprehenderit 
                        exercitationem ad reiciendis, omnis, 
                        cupiditate voluptatibus quis! Error 
                        nihil perferendis et ipsam a quos 
                        enim in veritatis dolores, totam amet!
                    </Typography>
                </Box>
                <Values/>
            </Box>
        </Container>
    )
}

export default About

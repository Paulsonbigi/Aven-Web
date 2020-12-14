import React from 'react'
import { Container, Box, CircularProgress, Typography } from "@material-ui/core"
import "../assets/css/value.css"

function Values() {
    return (
        <Container>
            <Box>
                <Typography variant="h3">
                    Our Values
                </Typography>
                <svg>
                    <circle className="progress">

                    </circle>
                </svg>
            </Box>
        </Container>
    )
}

export default Values

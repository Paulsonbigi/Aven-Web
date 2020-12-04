import React, { Fragment, useState } from 'react'
import { Card, Box, Container, Grid, Typography } from "@material-ui/core"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import "../assets/css/members.css"
import RubberBand from "react-reveal/RubberBand"
import Fade from "react-reveal/Fade"
function Members() {
    const [people, setPeople] = useState([
        {
            location: "Lisbon",
            name: "Sebastian Bennett",
            imgUrl: (img1),
            content: "Aut consequuntur nemo possimus cupiditate suscipit repellat aut facilis eaque. Ex et atque ea exercitationem veliteaque enim ut. Numquam facere",
            background: "rgb(248, 192, 201)"
        },
        {    location: "Shanghai",
            name: "Benedikt Safiyulin",
            imgUrl: (img2),
            content: "Aut consequuntur nemo possimus cupiditate suscipit repellat aut facilis eaque. Ex et atque ea exercitationem veliteaque enim ut. Numquam facere",
            background: "rgb(247, 255, 139)"
        },
        {
            location: "Dallas",
            name: "Maria Illescas",
            imgUrl: (img3),
            content: "Aut consequuntur nemo possimus cupiditate suscipit repellat aut facilis eaque. Ex et atque ea exercitationem veliteaque enim ut. Numquam facere",
            background: "rgb(214, 214, 214)"
        },
        {
            location: "Bilbao",
            name: "Nerte Gronw",
            imgUrl: (img4),
            content: "Aut consequuntur nemo possimus cupiditate suscipit repellat aut facilis eaque. Ex et atque ea exercitationem veliteaque enim ut. Numquam facere",
            background: "rgb(178, 196, 247)"
        },
        {
            location: "Belfest",
            name: "Jordi Santiago",
            imgUrl: (img5),
            content: "Aut consequuntur nemo possimus cupiditate suscipit repellat aut facilis eaque. Ex et atque ea exercitationem veliteaque enim ut. Numquam facere",
            background: "pink"
        },
        {
            location: "Kansas City",
            name: "Delectus Man",
            imgUrl: (img6),
            content: "Aut consequuntur nemo possimus cupiditate suscipit repellat aut facilis eaque. Ex et atque ea exercitationem veliteaque enim ut. Numquam facere",
            background: `rgb(228, 216, 218)`
        }
    ])
    return (
        <Fragment>
            <Container className="main-comtainer">
                <Box className="member-container">
                    <RubberBand>
                        <Typography variant="h4">
                            Members are loving FaithCircle
                        </Typography>
                    </RubberBand>
                    <Box>
                        <Grid container md>
                            {
                                people.map(person => (
                                    <Grid item xs={6} md={4} justify="space-evenly">
                                        <Fade up>
                                            <Card className="person-card" style={{ background: person.background}}>
                                                <Typography variant="body1" className="content">
                                                    {person.content}
                                                </Typography>
                                                <Box className="extra-details">
                                                    <img src={person.imgUrl} alt=""/>
                                                    <Box className="description">
                                                        <Typography variant="h5">
                                                            {person.name}
                                                        </Typography>
                                                        <Typography variaint="h6" className="location">
                                                            {person.location}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Card>
                                        </Fade>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Fragment>
    )
}

export default Members

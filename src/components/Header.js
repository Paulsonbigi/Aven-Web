import React, { useState, Fragment, useRef, useEffect } from 'react';
import "../assets/css/header.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Box } from '@material-ui/core';
import Logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import { TramOutlined } from '@material-ui/icons';
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"
import Zoom from "react-reveal/Zoom"

export default function ButtonAppBar() {
  const dropdownRef = useRef(null)
  const [open, setOpen] = useState(true)
  const [pages, setPages] = useState([
    {
      title: "Home",
      pageUrl: "/"
    },
    {
      title: "About",
      pageUrl: "/about"
    },
    {
      title: "Contact",
      pageUrl: "contact"
    }
  ])
  return (
    <div>
      <AppBar position="static" className="header-container">
        <Toolbar >
            <Container className="flex-display">
              <Box className="main-display">
                <Box>
                  <img src={Logo} alt=""/>
                </Box>
                <Box>
                  <ul className="nav-links">
                      {
                        pages.map( (page, key) => (
                          <li key={page.title}><Link to={page.pageUrl}>{page.title}</Link></li>
                        ))
                      }
                  </ul>
                </Box>
                <MenuIcon className="toggle" onClick={() => {setOpen(!open)}}/>
              </Box>
            </Container>
            <box ref={dropdownRef} className={`dropdown ${ open ? "show" : ""}`}>
                <ul className="dropdown-links">
                  {
                    pages.map( (page, key) => (
                      <li key={page.title}><Link to={page.pageUrl}>{page.title}</Link></li>
                    ))
                  }
                </ul>
              </box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
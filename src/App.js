import React, { useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "../src/components/Header"
import Home from "../src/Pages/Home"
import Contact from "../src/Pages/Contact"
import About from "../src/Pages/About"
import { css } from "@emotion/core"
import { BounceLoader, CircleLoader } from "react-spinners"
import "./App.css"
const override = css `
  display: block;
  margin: auto;
  align-item: center;
  justify-content: center;
  border-color: red
`
function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading){
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }, [loading])
  return (
    <Router>
      <>
      {
        loading ? <div 
                    className="loader-show">
                    <CircleLoader
                      size={50}
                      css={override}
                      margin= {"auto"}
                      color={"red"}/> 
                    </div>: (
          <div className="app">
          <Switch>
            <Route path="/contact">
                <Header/>
                <Contact/>
              </Route>
              <Route path="/about">
                <Header/>
                <About/>
              </Route>
              <Route exact path="/">
                <Header/>
                <Home/>
              </Route>
          </Switch>
        </div>
        )
      }
        
      </>
    </Router>
  )
}

export default App

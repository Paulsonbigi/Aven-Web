import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { Container, InputBase } from "@material-ui/core"
import {TabContext} from '@material-ui/lab';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    backgroundColor: "rebeccapurple !important"
  },
  text: {
    lineHeight: 1.5
  }
}));

export default function LabTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container>
        <TabContext value={value}>
          <h3>FAQ</h3>
          <AppBar position="static" className={classes.container}>
            <TabList onChange={handleChange} centered aria-label="simple tabs example">
              <Tab label="Investment" value="1" />
              <Tab label="Support options" value="2" />
              <Tab label="T & C" value="3" />
            </TabList>
          </AppBar>
          <TabPanel value="1" className={classes.text}>We have succinnt plan to help you grow your money with our ever
           customer-centric plans, we hope to serve your interest React components for faster and easier web development. Build your own design system, or start with Material Design.</TabPanel>
          <TabPanel value="2" className={classes.text}>With our plan to scale up the well-being of the less privileged with your support that is ever welcome and appreciated. React components for faster and easier web development. Build your own design system, or start with Material Design.</TabPanel>
          <TabPanel value="3" className={classes.text}>We have well documented terms and conditions we hope you consider before futhering your interest with us. React components for faster and easier web development. Build your own design system, or start with Material Design.</TabPanel>
          </TabContext>
        </Container>
    </div>
  );
}
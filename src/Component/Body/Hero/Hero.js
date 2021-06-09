import React from 'react';
import classes from './Hero.css';

const Hero = (props) => {
   
    return (
          <header className={props.hero}>
              {props.children}
          </header>
    );
 
}

export default Hero;
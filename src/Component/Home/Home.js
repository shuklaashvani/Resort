import React from "react";
import Banner from "../Body/Hero/Parts/Banner";
import Button from "../Body/Hero/Parts/Button";
import Hero from "../Body/Hero/Hero";
import classes from "./Home.module.css";
import Service from "../Body/Services/Service";
import Feature from "../rooms/FeaturedRoom";

const Home = () => {
  return (
    <div className={classes.di}>
      <Hero hero="defaultHero">
        <Banner title="Luxurous Rooms" subtitle="Deluxe rooms starting at $299">
          <Button pa="/Rooms">Our rooms</Button>
        </Banner>
      </Hero>
      <Service />
      <Feature />
    </div>
  );
};

export default Home;

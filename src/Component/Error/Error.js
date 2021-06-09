import React from "react";
import Banner from "../Body/Hero/Parts/Banner";
import Button from "../Body/Hero/Parts/Button";
import Hero from "../Body/Hero/Hero";

const Error = () => {
  return (
    <Hero hero={"defaultHero"}>
      <Banner title="404" subtitle="Page not found">
        <Button pa="/">Return Home</Button>
      </Banner>
    </Hero>
  );
};

export default Error;

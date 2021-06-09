import React, { Component } from "react";
import Title from "./Title";
import classes from "./Services.module.css";
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from "react-icons/fa";

class Service extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        Title: "Free Cocktail",
        info:
          "Free cock tail Free cock tail Free cock tail Free cockt ail Free cockt ail Free cock tail Free cock tail Free cock tail Fr ",
      },
      {
        icon: <FaHiking />,
        Title: "Free Hiking",
        info:
          "Free Hiking Free Hiking Free Hiking Free Hiking Free Hiking Free Hik Free Hiking Free Hiking Free Hiking Free Hiking Free Hiking Free Hik Hik",
      },
      {
        icon: <FaShuttleVan />,
        Title: "Free shuttle",
        info:
          "Vhycle available Vhycle available Vhycle available Vhycle available Vhycle availa  Vhycle available Vhycle available Vhycle available Vhycle available ",
      },
      {
        icon: <FaBeer />,
        Title: "Strongest Beer",
        info:
          "Free beer Free beer Free beer Free beer Free beer Free beer Free beer Free beer Free beer eer Free beer Free beer Free b eer Free beer Free beer Free beer Free beer Free beer eer Free beer Free beer Free b",
      },
    ],
  };

  render() {
    return (
      <section className={classes.Services}>
        <Title>Services</Title>
        <div className={classes.Services_center}>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className={classes.service}>
                <span>{item.icon}</span>
                <h1>{item.Title}</h1>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section> 
    );
  }
}

export default Service;

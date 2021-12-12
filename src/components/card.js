import React from "react";
import "./card.css";
export const Card = () => {
  return (
    <div className="card">
      <div className="content">
        <h4>CONTENT</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="main">
        <h4>MAIN</h4>
        <p>
          The Avengers began as a group of extraordinary individuals who were
          assembled to defeat Loki and his Chitauri army in New York City. Since
          then, the team has expanded its roster and faced a host of new
          threats, while dealing with their own turmoil.
        </p>
      </div>
      <div className="about">
        <h4>ABOUT</h4>
        <p>
          The series was initially intended as a limited series to be told in
          two parts. It had its original run of 15 episodes on Spanish network
          Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired
          global streaming rights in late 2017. It re-cut the series into 22
          shorter episodes and released them worldwide.
        </p>
      </div>
    </div>
  );
};

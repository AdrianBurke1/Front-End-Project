import React from "react";
import "./About.css";

export default function About() {
  const ourTeam = {
    adrianBurke: {
      name: "Adrian Burke",
      bio: "Thrive Apprentice",
      github: "https://github.com/AdrianBurke1",
      image: "https://avatars.githubusercontent.com/u/114108495?v=4",
    },
  };

  return (
    <div className="about-container">
      <div className="about">
        <p style={{ fontSize: 20 }}>
          <em>
            <strong>About Me</strong>
          </em>
          <br />
          <br />
          We created a YouTube replica using React, collaborating to build a
          functional UI. This project boosted our practical experience and
          understanding of web dev practices in a team-based environment.
        </p>
        <br />
        <h1 className="meet-the-team">Hi I'm Adrian</h1>
        <hr />
        <div className="developers">
          <div className="developer">
            <img
              src={ourTeam.adrianBurke.image}
              alt="Adrian Burke"
              style={{ width: "300px" }}
            />
            <p>{ourTeam.adrianBurke.bio}</p>
            <div className="button-container">
              <button className="button">
                <a href={ourTeam.adrianBurke.github}>Adrian's GitHub</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        {/* Sidebar content */}
      </div>
    </div>
  );
}
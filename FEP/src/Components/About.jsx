import React from "react";
import "./About.css"; // Import the CSS file

function About() {
  const ourTeam = {
    adrianBurke: {
      name: "Adrian Burke",
      bio: "Thrive Apprentice",
      github: "https://github.com/AdrianBurke1",
      image: "https://avatars.githubusercontent.com/u/114108495?v=4",
    },
    evanRosas: {
      name: "Evan Rosas",
      bio: "Thrive Apprentice",
      github: "https://github.com/evanmrosas",
      image: "https://avatars.githubusercontent.com/u/147665124?v=4",
    },

  };

  return (
      <div className="about-container">
        <div className="about">
          <p style={{ fontSize: 20 }}>
          </p>
          <h1 className="meet-the-team"> Meet The Team </h1>
          <div className="developers">
            {/* DEV 1  */}
            <div className="developer">
              <img
                src={ourTeam.evanRosas.image}
                alt="Evan Rosas"
              />
              <p>{ourTeam.evanRosas.bio}</p>
              <div className="button-container">
                <button className="button">
                  <a href={ourTeam.evanRosas.github}>Evan's GitHub</a>
                </button>
              </div>
            </div>
            {/* DEV 2 */}
            <div className="developer">
              <img
                src={ourTeam.adrianBurke.image}
                alt="Adrian Burke"
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
        <div className="sidebar">{/* Sidebar content */}</div>
      </div>
  );
}

export default About;

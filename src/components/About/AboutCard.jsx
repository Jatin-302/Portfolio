import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jatin Soni</span>
            from <span className="green">Goregaon Mumbai, India.</span>
            <br />
            A passionate full-stack developer (MERN) actively building projects,
            <br />
            learning backend technologies, and seeking opportunities to
            contribute to impactful software solutions.
            <br />I have also gained strong knowledge in{" "}
            <span className="purple">manual and automation testing</span>
            through coursework, understanding various testing tools and
            frameworks to ensure software quality and performance.
            <br />
            I have completed Electronics and Telecommunication from D J Sanghvi
            COE Mumbai.
            <br />
            <br />
            Apart from coding and testing, some other activities that I love to
            do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jatin Soni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <h4>About MetaBlog</h4>
        <p>
         Welcome to MetaBlog, a modern space designed for thinkers, creators, and tech enthusiasts. This platform was built with the vision of providing a seamless, high-performance environment for sharing ideas and staying connected with the evolving world of technology.
        </p>
        <h4>Our Mission</h4>
        <p>
          MetaBlog isn't just a blogging site; it's a community-driven hub. We aim to bridge the gap between complex technical concepts and everyday readers by offering a clean, intuitive, and engaging user experience.
        </p>
        <h4>The Developer's</h4>
         <p>
          <h6>First Developer:</h6>Hi, i am sudhanshu a passionate Full-Stack Developer currently pursuing my Bachelor’s degree in Computer Applications. My focus lies in building scalable, efficient web applications using the MERN stack (MongoDB, Express.js, React, and Node.js).
         </p>
         <p>
          <h6>Second Developer:</h6>Hi, i am Suhani , an enthusiastic ML developer currently pursuing my Bachelor’s degree in Computer Applications. My goal is to build intelligent and impactful solutions through Machine Learning and continuously enhance my technical expertise.
         </p>

      </div>
    </article>
  );
};

export default About;

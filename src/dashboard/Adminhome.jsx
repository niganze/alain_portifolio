
// function Adminhome() {
//   return (
//     <div>
//       thus is my home of w
//     </div>
//   )
// }

// export default Adminhome


// import React from "react";
import '../css/Homedash.css'
function HomeDashboard() {
  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and accomplishments</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>
          Hi there! I m [Your Name], a [Your Profession] with a passion for
          [Your Interests]. I ve been working in the industry for [Years of
          Experience] and have had the opportunity to collaborate on various
          exciting projects.
        </p>
        <p>[Additional Personal Info or Achievements]</p>
      </section>
      <section>
        <h2>My Work</h2>
        <div className="portfolio-items">
          {/* Display your portfolio items here */}
          <div className="portfolio-item">
            <img src="project1-thumbnail.jpg" alt="Project 1" />
            <h3>Project 1 Title</h3>
            <p>Short description of the project.</p>
          </div>
          <div className="portfolio-item">
            <img src="project2-thumbnail.jpg" alt="Project 2" />
            <h3>Project 2 Title</h3>
            <p>Short description of the project.</p>
          </div>
          
        </div>
      </section>
      <section>
        <h2>Contact Me</h2>
        <p>
          I m open to new opportunities and collaborations. Feel free to reach
          out to me at [Your Email] or connect with me on [Your Social Media].
        </p>
      </section>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default HomeDashboard;

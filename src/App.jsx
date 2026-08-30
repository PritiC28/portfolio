import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
/* =========================
CONTACT FORM
========================= */

const [formStatus, setFormStatus] = useState("");

const handleContactSubmit = async (event) => {
event.preventDefault();

setFormStatus("Sending...");

const formData = new FormData(event.target);

formData.append(
  "access_key",
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
);

formData.append(
  "subject",
  "New Contact Form Submission - Portfolio"
);

formData.append(
  "from_name",
  "Priti's Portfolio"
);

try {
  const response = await fetch(
    "https://api.web3forms.com/submit",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (data.success) {
    setFormStatus(
      "Message sent successfully! I'll get back to you soon."
    );

    event.target.reset();
  } else {
    setFormStatus(
      "Something went wrong. Please try again."
    );
  }
} catch (error) {
  console.error(error);

  setFormStatus(
    "Unable to send the message. Please try again."
  );
}

};

/* =========================
EXPERIENCE ROLES
========================= */

const roles = [
"Software Developer",
"Backend Developer",
"Full Stack Developer",
];

const [roleIndex, setRoleIndex] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setRoleIndex((prev) => (prev + 1) % roles.length);
}, 2500);

return () => clearInterval(interval);

}, []);

/* =========================
SKILLS
========================= */

const skillCategories = {
Backend: [
["Java", "Core language & backend development"],
["Spring Boot", "REST APIs & microservices"],
["Spring Security", "Authentication & authorization"],
["REST APIs", "Service communication & API design"],
["Microservices", "Distributed application architecture"],
["JWT", "Token-based authentication"],
],

Frontend: [
  ["React", "Component-based UI development"],
  ["JavaScript", "Modern frontend development"],
  ["HTML5", "Semantic web structure"],
  ["CSS3", "Responsive UI & styling"],
  ["Vite", "Fast frontend development"],
],

Cloud: [
  ["AWS", "Cloud infrastructure & services"],
  ["S3", "Object storage & file management"],
  ["DynamoDB", "NoSQL cloud database"],
  ["SQS", "Message queuing & communication"],
  ["CloudWatch", "Monitoring & application logs"],
],

DevOps: [
  ["Git", "Version control & collaboration"],
  ["GitHub", "Source control & repositories"],
  ["Jenkins", "CI/CD exposure"],
  ["AWS CloudWatch", "Monitoring & log analysis"],
],

Database: [
  ["MySQL", "Relational database development"],
  ["DynamoDB", "AWS NoSQL database"],
  ["Neo4j", "Graph database technology"],
],

};

const [activeCategory, setActiveCategory] = useState("Backend");

/* =========================
HOW I BUILD
========================= */

const buildApproach = [
{
number: "01",
title: "Backend",
description:
"I build reliable backend services using Java and Spring Boot, with REST APIs and microservice-based architecture.",
technologies: "Java · Spring Boot · REST APIs · Microservices",
},
{
number: "02",
title: "Frontend",
description:
"I use React to create responsive, component-based interfaces and connect them with backend services.",
technologies: "React · JavaScript · HTML · CSS",
},
{
number: "03",
title: "Data",
description:
"I work with relational, NoSQL, and graph databases depending on the application's requirements.",
technologies: "MySQL · PostgreSQL · DynamoDB · Neo4j",
},
{
number: "04",
title: "Cloud & DevOps",
description:
"I use cloud and DevOps tools for deployment, monitoring, troubleshooting, and maintaining applications.",
technologies: "AWS · Git · Jenkins · Docker",
},
];

return (
<div className="app">

  {/* =========================
      NAVBAR
  ========================= */}

  <nav className="navbar">

    <div className="logo">
      PRITI<span>.</span>
    </div>

    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
    </div>

    <a href="#contact" className="contact-btn">
      Let's Talk
    </a>

  </nav>


  {/* =========================
      HERO
  ========================= */}

  <main className="hero">

    <motion.div
      className="hero-content"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >

      <p className="hero-greeting">
        Hello, I'm Priti 👋
      </p>

      <h1>
        Software Engineer
        <span>building digital experiences.</span>
      </h1>

      <p className="hero-description">
        I build scalable applications using Java, Spring Boot, React,
        and cloud technologies — turning ideas into reliable software.
      </p>

      <div className="hero-buttons">

        <a
          href="#projects"
          className="primary-btn"
        >
          Explore My Work →
        </a>

        <a
          href="https://github.com/PritiC28"
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >
          GitHub ↗
        </a>

      </div>

      <div className="hero-tech">

        {["Java", "Spring Boot", "React", "AWS"].map(
          (tech, index) => (

            <motion.span
              key={tech}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.15,
              }}
            >
              {tech}
            </motion.span>

          )
        )}

      </div>

    </motion.div>


    {/* Code Card */}

    <motion.div
      className="hero-visual"
      initial={{
        opacity: 0,
        scale: 0.9,
        x: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 0.9,
        delay: 0.2,
      }}
    >

      <motion.div
        className="code-card"
        animate={{
          y: [0, -10, 0],
          rotate: [2, 1, 2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.03,
          rotate: 0,
        }}
      >

        <div className="code-header">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <pre>

{`const developer = {
name: "Priti Choubey",
role: "Software Engineer",

stack: [
"Java",
"Spring Boot",
"React",
"AWS"
],

passion:
"Building great software"
};`}
</pre>

      </motion.div>

      <div className="glow"></div>

    </motion.div>

  </main>


  {/* =========================
      ABOUT
  ========================= */}

  <section
    id="about"
    className="about-section"
  >

    <div className="section-label">
      01 — ABOUT ME
    </div>

    <div className="about-grid">

      <motion.div
        className="about-heading"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
      >

        <h2>
          Building software
          <span>with purpose.</span>
        </h2>

      </motion.div>


      <motion.div
        className="about-content"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
      >

        <p>
          I'm a Software Engineer with 5+ years of experience working
          with Java, Spring Boot, microservices, REST APIs, React,
          and AWS.
        </p>

        <p>
          I enjoy designing backend services, solving technical
          problems, working with cloud technologies, and creating
          applications that are reliable and easy to maintain.
        </p>

        <div className="about-stats">

          <div>
            <strong>5+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>Java</strong>
            <span>Backend Engineering</span>
          </div>

          <div>
            <strong>AWS</strong>
            <span>Cloud Technologies</span>
          </div>

        </div>

      </motion.div>

    </div>

  </section>


  {/* =========================
      SKILLS
  ========================= */}

  <section
    id="skills"
    className="skills-section"
  >

    <div className="section-label">
      02 — TECH STACK
    </div>

    <div className="skills-header">

      <div>

        <h2>
          Tools I use to
          <span>build things.</span>
        </h2>

      </div>

      <p>
        A practical stack built around backend engineering, modern
        frontend development, cloud infrastructure, and DevOps.
      </p>

    </div>


    <div className="skills-container">

      {/* Skill Tabs */}

      <div className="skill-tabs">

        {Object.keys(skillCategories).map(
          (category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>

          )
        )}

      </div>


      {/* Skill Cards */}

      <motion.div
        className="skills-grid"
        key={activeCategory}
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
        }}
      >

        {skillCategories[activeCategory].map(
          ([name, description], index) => (

            <motion.div
              className="skill-card"
              key={name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
              }}
              whileHover={{
                y: -6,
              }}
            >

              <div className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>
                {name}
              </h3>

              <p>
                {description}
              </p>

              <span className="skill-arrow">
                ↗
              </span>

            </motion.div>

          )
        )}

      </motion.div>

    </div>

  </section>


  {/* =========================
      HOW I BUILD
  ========================= */}

  <section className="build-section">

    <div className="section-label">
      03 — HOW I BUILD
    </div>

    <div className="build-header">

      <div>

        <h2>
          From idea to
          <span>working software.</span>
        </h2>

      </div>

      <p>
        I combine backend engineering, frontend development, data,
        and cloud technologies to build practical end-to-end solutions.
      </p>

    </div>


    <div className="build-intro">

      <p>
        I focus on building clean, maintainable applications where
        each layer has a clear responsibility — from APIs and data
        services to responsive user interfaces and cloud infrastructure.
      </p>

    </div>


    <div className="build-grid">

      {buildApproach.map((item, index) => (

        <motion.div
          className="build-card"
          key={item.number}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          whileHover={{
            y: -5,
          }}
        >

          <span className="build-number">
            {item.number}
          </span>

          <h3>
            {item.title}
          </h3>

          <p>
            {item.description}
          </p>

          <span className="build-technologies">
            {item.technologies}
          </span>

        </motion.div>

      ))}

    </div>

  </section>


  {/* =========================
      PROJECTS
  ========================= */}

  <section
    id="projects"
    className="projects-section"
  >

    <div className="section-label">
      04 — SELECTED WORK
    </div>


    <div className="projects-header">

      <div>

        <h2>
          Projects I've
          <span>built & explored.</span>
        </h2>

      </div>

      <p>
        A selection of applications I've built to strengthen my
        full-stack development, backend engineering, authentication,
        and cloud technology skills.
      </p>

    </div>


    <div className="projects-grid">


      {/* CineGraph */}

      <motion.article
        className="project-card project-featured"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        whileHover={{
          y: -8,
        }}
      >

        <div className="project-top">

          <span className="project-number">
            01
          </span>

          <span className="project-status">
            ● LIVE
          </span>

        </div>


        <div className="project-content">

          <h3>
            CineGraph
          </h3>

          <p className="project-description">
            A graph-based movie recommendation application that
            connects users, movies, genres, and directors using
            Neo4j. Built with a React frontend and Spring Boot
            REST API.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Spring Boot</span>
            <span>Neo4j</span>
            <span>REST API</span>
          </div>

        </div>


        <div className="project-links">

          <a
            href="https://cinegraph-frontend.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>

          <a
            href="https://github.com/PritiC28"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

        </div>

      </motion.article>


      {/* Flight Management */}

      <motion.article
        className="project-card"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
        whileHover={{
          y: -8,
        }}
      >

        <div className="project-top">

          <span className="project-number">
            02
          </span>

        </div>


        <div className="project-content">

          <h3>
            Flight Management System
          </h3>

          <p className="project-description">
            A backend-focused flight management application
            designed to handle flight operations, reservations,
            and related REST API services.
          </p>

          <div className="project-tech">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>REST API</span>
            <span>MySQL</span>
          </div>

        </div>


        <div className="project-links">

          <a
            href="https://github.com/PritiC28"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

        </div>

      </motion.article>


      {/* JWT Authentication */}

      <motion.article
        className="project-card"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        whileHover={{
          y: -8,
        }}
      >

        <div className="project-top">

          <span className="project-number">
            03
          </span>

        </div>


        <div className="project-content">

          <h3>
            JWT Authentication System
          </h3>

          <p className="project-description">
            A secure authentication system implementing
            JWT-based login, authorization, protected APIs,
            and Spring Security for role-based access control.
          </p>

          <div className="project-tech">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Spring Security</span>
            <span>JWT</span>
            <span>MySQL</span>
          </div>

        </div>


        <div className="project-links">

          <a
            href="https://github.com/PritiC28/spring-boot-jwt-auth-system"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

        </div>

      </motion.article>


      {/* E-Commerce */}

      <motion.article
        className="project-card"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        whileHover={{
          y: -8,
        }}
      >

        <div className="project-top">

          <span className="project-number">
            04
          </span>

        </div>


        <div className="project-content">

          <h3>
            E-Commerce Application
          </h3>

          <p className="project-description">
            A full-stack e-commerce application designed with
            secure authentication, product management, and
            RESTful backend services.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Spring Boot</span>
            <span>Spring Security</span>
            <span>JWT</span>
            <span>MySQL</span>
          </div>

        </div>


        <div className="project-links">

          <a
            href="https://github.com/PritiC28"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

        </div>

      </motion.article>


    </div>

  </section>


  {/* =========================
      EXPERIENCE
  ========================= */}

  <section
    id="experience"
    className="experience-section"
  >

    <div className="section-label">
      05 — EXPERIENCE
    </div>


    <div className="experience-header">

      <div>

        <h2>
          Where I've
          <span>grown & contributed.</span>
        </h2>

      </div>

      <p>
        5+ years of experience building, supporting, and maintaining
        enterprise applications in a production environment.
      </p>

    </div>


    <div className="experience-card">


      <div className="experience-top">

        <div>

          <h3>
            TCS
          </h3>

          <motion.p
            className="experience-role"
            key={roles[roleIndex]}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            {roles[roleIndex]}
          </motion.p>

        </div>


        <div className="experience-duration">

          <span>
            08 Jul 2021 — Present
          </span>

          <small>
            5+ Years
          </small>

        </div>

      </div>


      <div className="experience-divider"></div>


      <div className="experience-content">


        <div className="experience-summary">

          <p>
            Working on enterprise applications in the retail domain,
            contributing to backend development, production support,
            troubleshooting, and cloud-based services.
          </p>

        </div>


        <div className="experience-points">


          <div>

            <span>
              01
            </span>

            <p>
              Developed and maintained backend services using
              Java and Spring Boot, including REST APIs and
              microservices.
            </p>

          </div>


          <div>

            <span>
              02
            </span>

            <p>
              Worked with AWS services including S3, DynamoDB,
              SQS, and CloudWatch for application data,
              messaging, monitoring, and troubleshooting.
            </p>

          </div>


          <div>

            <span>
              03
            </span>

            <p>
              Investigated production issues using application
              logs and monitoring tools, identifying root causes
              and implementing reliable fixes.
            </p>

          </div>


          <div>

            <span>
              04
            </span>

            <p>
              Collaborated with cross-functional teams to resolve
              issues, deliver enhancements, and maintain reliable
              application services.
            </p>

          </div>


        </div>

      </div>


      <div className="experience-tech">

        <span>Java</span>
        <span>Spring Boot</span>
        <span>Microservices</span>
        <span>REST APIs</span>
        <span>AWS</span>
        <span>DynamoDB</span>
        <span>SQS</span>
        <span>CloudWatch</span>

      </div>

    </div>

  </section>


  {/* =========================
      CONTACT
  ========================= */}

  <section
    id="contact"
    className="contact-section"
  >

    <div className="section-label">
      06 — CONTACT
    </div>

    <div className="contact-card">

      <div className="contact-content">

        <h2>
          Let's build
          <span>something useful.</span>
        </h2>

        <p className="contact-description">
          I'm open to discussing software engineering opportunities,
          interesting projects, and new challenges.
        </p>


        <form
          className="contact-form"
          onSubmit={handleContactSubmit}
        >

          <div className="contact-form-row">

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
              />

            </div>

          </div>


          <div className="form-group">

            <label htmlFor="visitor_subject">
              Subject
            </label>

            <input
              type="text"
              id="visitor_subject"
              name="visitor_subject"
              placeholder="What would you like to discuss?"
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me a little about your project or opportunity..."
              required
            ></textarea>

          </div>


          <button
            type="submit"
            className="primary-btn contact-submit"
            disabled={formStatus === "Sending..."}
          >
            {formStatus === "Sending..."
              ? "Sending..."
              : "Send Message →"}
          </button>


          {formStatus && (
            <p className="form-status">
              {formStatus}
            </p>
          )}

        </form>

      </div>

    </div>

  </section>


  {/* =========================
      FOOTER
  ========================= */}

  <footer className="footer">

    <p>
      © 2026 Priti Choubey
    </p>

    <p>
      Built with React & Framer Motion
    </p>

  </footer>

</div>

);
}

export default App;
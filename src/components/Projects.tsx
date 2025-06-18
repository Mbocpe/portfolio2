import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { id: 1, title: "Project 1", desc: "Description...", github: "#", live: "#" },
    // Add more projects
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -10 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="links">
              <a href={project.github}>GitHub</a>
              <a href={project.live}>Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
import styles from './ProjectsStyles.module.css';
import project1 from '../../assets/coming-soon.png';
import project2 from '../../assets/coming-soon.png';
import project3 from '../../assets/coming-soon.png';
import project4 from '../../assets/coming-soon.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={project1} link="https://github.com/mochamadrizal26" h3="Project" p="Project Description"/>
        <ProjectCard src={project2} link="https://github.com/mochamadrizal26" h3="Project" p="Project Description"/>
        <ProjectCard src={project3} link="https://github.com/mochamadrizal26" h3="Project" p="Project Description"/>
        <ProjectCard src={project4} link="https://github.com/mochamadrizal26" h3="Project" p="Project Description"/>
      </div>
    </section>
  );
}

export default Projects;
import styles from './HeroStyles.module.css';
import heroImgLight from '../../assets/rizal-light.png';
import heroImgDark from '../../assets/rizal-dark.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const heroImg = theme === 'light' ? heroImgLight : heroImgDark;
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}> 
        <img
          className={styles.hero} 
          src={heroImg} 
          alt="Profile picture of Rizal Hidayat"
        />
        <img
          className={styles.colorMode} 
          src={themeIcon} 
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Rizal
          <br />
          Hidayat
        </h1>
        <h2>
          Java Software Developer
        </h2>
        <span>
          <a href="https://github.com/mochamadrizal26" target="_blank">
            <img src={githubIcon} alt='github icon' />
          </a>
          <a href="https://www.linkedin.com/in/mochamad-rizal-hidayat" target="_blank">
            <img src={linkedinIcon} alt='linkedin icon' />
          </a>
        </span>
        <p className={styles.description}>
          Driven Java developer focused on creating reliable and maintainable solutions for businesses.
        </p>
        <a href="https://docs.google.com/document/d/1U4FnOdAj8qb6nKp2KpsefFf5QfqA7s3hRU9aZlpEZXg/export?format=pdf" download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
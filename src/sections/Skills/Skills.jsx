import styles from './SkillsStyles.module.css';
import checkMarkLight from '../../assets/checkmark-light.svg'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme, toggleTheme } = useTheme();
    
    const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;

    return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Java 17" />
            <SkillList src={checkMarkIcon} skill="Spring Boot" />
            <SkillList src={checkMarkIcon} skill="REST API" />
            <SkillList src={checkMarkIcon} skill="MySQL" />
            <SkillList src={checkMarkIcon} skill="Hibernate" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="Javascript" />
            <SkillList src={checkMarkIcon} skill="Thymeleaf" />
        </div>
                <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Docker" />
            <SkillList src={checkMarkIcon} skill="Git" />
            <SkillList src={checkMarkIcon} skill="YAML" />
            <SkillList src={checkMarkIcon} skill="Shell scripting" />
        </div>
    </section>
  );
}

export default Skills;
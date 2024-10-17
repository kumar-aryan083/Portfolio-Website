import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="me sitting with the laptop" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Image" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server Image" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimised back-end systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI Image" />
                        <div className={styles.aboutItemText}>
                            <h3>Competitive Programmer</h3>
                            <p>I am a passionate Competitive Programmer and have 1000 rating (newbie) at Codeforces and 1500 rating at Leetcode. You can access my profiles through my linkedin</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;

import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Aryan</h1>
                <p className={styles.description}>I'm a full-stack developer who is looking for an entry level job. Reach out if you'd like to learn more about my skills and achievements.</p>
                <a href="https://www.linkedin.com/in/kumar-aryan083/" target='_blank' className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
}

export default Hero;

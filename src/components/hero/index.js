import Image from 'next/image';
import styles from './styles.module.scss';
import clsx from 'clsx';

export default function Index(params) {
    return (
        <>
            <section id="hero" className={styles.hero}>
                <div className='container'>
                    <div className={styles.hero_container}>
                        <div className={clsx(styles.col, styles.col_60)}>
                            <p className={styles.intro}>Kindergarten Program</p>
                            <h2>Best Children’s <br /> Education Curriculum</h2>
                            <p className={styles.admission_date}>Admission Open 20-24 April</p>
                            <button className="cta">Apply Now</button>
                        </div>
                        <div className={clsx(styles.col, styles.col_40)}>
                            <Image src={'/images/hero-img.png'} alt='hero-image' width={875} height={738} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

'use client';
import styles from './styles.module.scss';

export function ExtraClassesSlider({ item }) {
    return (
        <>
            <div className={styles.swiper_slide}>
                <div className={styles.image_container}>
                    <img src={item.image} alt={item.title} />
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className={styles.info_container}>
                    <div className={styles.info_item}>
                        <span>{item.age}</span>
                        <span className={styles.info_item_text}>Age</span>
                    </div>
                    <div className={styles.info_item}>
                        <span>{item.weekly}</span>
                        <span className={styles.info_item_text}>Weekly</span>
                    </div>
                    <div className={styles.info_item}>
                        <span>{item.period}</span>
                        <span className={styles.info_item_text}>Period</span>
                    </div>
                </div>
            </div>
        </>
    );
}

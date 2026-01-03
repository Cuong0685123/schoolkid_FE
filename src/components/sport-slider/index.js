'use client';
import styles from './styles.module.scss';

export function SportSlider({ item }) {
    return (
        <>
            <div className={styles.swiper_slide}>
                <div className={styles.image_container}>
                    <img src={item.image} alt={item.title} />
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button>{item.buttonText}</button>
            </div>
        </>
    );
}

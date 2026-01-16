'use client';
import Image from 'next/image';
import styles from './styles.module.scss';

export function TeacherSlider({ item }) {
    return (
        <>
            <div className={styles.swiper_slide}>
                <div className={styles.image_container}>
                    <img src={item.image} alt={item.title} />

                    <div className={styles.content_container}>
                        <h2>{item.name}</h2>
                        <p>{item.role}</p>
                    </div>
                    
                    <div className={styles.social_links}>
                        <a href={item.facebook} target="_blank" rel="noopener noreferrer">
                            <Image src="/images/components/teachers/facebook.svg" alt="Facebook" width={20} height={20} />
                        </a>
                        <a href={item.twitter} target="_blank" rel="noopener noreferrer">
                            <Image src="/images/components/teachers/twitter.svg" alt="Twitter" width={20} height={20} />
                        </a>
                        <a href={item.youtube} target="_blank" rel="noopener noreferrer">
                            <Image src="/images/components/teachers/youtube.svg" alt="YouTube" width={20} height={20} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

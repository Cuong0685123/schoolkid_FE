import Image from 'next/image';
import styles from './styles.module.scss';

export default function Index(params) {
    return (
        <>
            <section id="content-image" className={styles.content_image} component="content-image">
                <div className='container'>
                    <div className={styles.col}>
                        <div className={styles.col_left}>
                            <Image src={"/images/image.png"} width={891} height={715} alt="content-image"></Image>
                        </div>
                        <div className={styles.col_right}>
                            <h3>Our Programs</h3>
                            <p className={styles.content_image_description}>Being brave isn’t always a grand gesture sometimes it just means having a go attempting that difficult question, offering an answer in a lesson when you’re simply really trying new.</p>
                            <div className={styles.content_image_stats}>
                                <div>
                                    <p className={styles.content_image_stats_number}>14+</p>
                                    <p className={styles.content_image_stats_text}>Years of Experience</p>
                                </div>
                                <div>
                                    <p className={styles.content_image_stats_number}>14+</p>
                                    <p className={styles.content_image_stats_text}>Students each year</p>
                                </div>
                                <div>
                                    <p className={styles.content_image_stats_number}>14+</p>
                                    <p className={styles.content_image_stats_text}>Award Winning</p>
                                </div>
                            </div>
                            <p className={styles.content_image_quote}><span><Image src={"/images/arrow-right.svg"} width={33} height={33} alt="quote"></Image></span> We believe every child is intelligent so we care.</p>
                            <p className={styles.content_image_quote}><span><Image src={"/images/arrow-right.svg"} width={33} height={33} alt="quote"></Image></span> Teachers make a difference of your child.</p>
                            <div className={styles.ctaContainer}>
                                <button className={styles.cta}>View more</button>
                                <button className={styles.promotionalVideo}>
                                    <span>
                                        <Image src={"/images/promotion-video.svg"} width={77} height={77} alt="play"></Image>
                                    </span>
                                    Promotional Video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

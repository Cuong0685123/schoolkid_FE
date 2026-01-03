'use client';
import Image from 'next/image';
import styles from './styles.module.scss';
import { useState } from 'react';

export default function Index({ data: accordionData }) {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };
    return (
        <>
            <section id="content-image" className={styles.content_image} component="content-image">
                <div className='container'>
                    <div className={styles.col}>
                        <div className={styles.col_right}>
                            <h3>Know more about EduKid</h3>
                            <div className={styles.accordion}>
                                {accordionData.map((item, index) => (
                                    <div key={index} className={styles.item}>
                                        <button className={styles.header} onClick={() => toggle(index)}> Accordion title {item.title}
                                            {open == index ? <span><Image src="/images/accordion-close.svg" width={24} height={24} alt="accordion-close" /></span> : <span><Image src="/images/accordion-open.svg" width={24} height={24} alt="accordion-open" /></span>}
                                        </button>
                                        {open === index && (
                                            <div className={styles.content}>
                                                Accordion content {item.content}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.col_left}>
                            <Image src={"/images/image.png"} width={891} height={715} alt="content-image"></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

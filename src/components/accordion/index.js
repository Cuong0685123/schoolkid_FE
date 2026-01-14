'use client';
import Image from 'next/image';
import styles from './styles.module.scss';
import React, { useState } from 'react';

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
                                    <div 
                                        key={index} 
                                        className={`${styles.accordion_item} ${open === index ? styles.active : ''}`}
                                    >
                                        <button 
                                            className={styles.accordion_summary}
                                            onClick={() => toggle(index)}
                                            aria-expanded={open === index}
                                        >
                                            {item.title}
                                        </button>
                                        <div className={styles.accordion_content}>
                                            <div className={styles.accordion_inner}>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
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

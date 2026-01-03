import styles from './styles.module.scss';
import clsx from 'clsx';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import {SportSlider} from '@/components/sport-slider';
import {ExtraClassesSlider} from '@/components/extraclass-slider';
import {TeacherSlider} from '@/components/teacher-slider';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Index({type, data}) {


    

    return (
        <>
            <section className={clsx(styles.content_slider, styles[`${type}_slider`])} id="content-slider" component="content-slider">
                <div className='container'>
                    <h1>Our Programs</h1>
                    <div>Our multi-level kindergarten cater to the age groups 2-5 years with a curriculum focussing children.</div>

                    <div className={styles.swiper_container}>
                        <Swiper
                            modules={[Pagination]}
                            pagination={{
                                clickable: true,
                            }}
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    centeredSlides: true,
                                },
                                768: {
                                    slidesPerView: 2,
                                    centeredSlides: false,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    centeredSlides: false,
                                },
                            }}
                        >
                            {
                                data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        {
                                            type === 'extraClasses' && <ExtraClassesSlider item={item} />
                                        }
                                        {
                                            type === 'teachers' && <TeacherSlider item={item} />
                                        }
                                        {
                                            type === 'sports' && <SportSlider item={item} />
                                        }
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

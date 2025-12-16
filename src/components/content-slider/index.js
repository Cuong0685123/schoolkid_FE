import styles from './styles.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Index(params) {

    const sportArray = [
        {
            title: 'Sport Class',
            description: 'Each day at EduKid is a celebration. We celebrate all sports!',
            buttonText: 'View Details',
            image: '/images/components/content-slider/sport-1.svg'
        },
        {
            title: 'Music Class',
            description: 'Musical indoor and outdoor activities that cater to all domains development!',
            buttonText: 'View Details',
            image: '/images/components/content-slider/sport-2.svg'

        },
        {
            title: 'Drawing Class',
            description: 'Fun Arts and Crafts projects for the children to work on together!',
            buttonText: 'View Details',
            image: '/images/components/content-slider/sport-3.svg'
        },
        {
            title: 'Drawing Class',
            description: 'Fun Arts and Crafts projects for the children to work on together!',
            buttonText: 'View Details',
            image: '/images/components/content-slider/sport-3.svg'
        },
        {
            title: 'Drawing Class',
            description: 'Fun Arts and Crafts projects for the children to work on together!',
            buttonText: 'View Details',
            image: '/images/components/content-slider/sport-3.svg'
        },
    ];

    return (
        <>
            <section className={styles.content_slider}>
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
                                sportArray.map((sport, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={styles.swiper_slide}>
                                            <div className={styles.image_container}>
                                                <img src={sport.image} alt={sport.title} />
                                            </div>
                                            <h2>{sport.title}</h2>
                                            <p>{sport.description}</p>
                                            <button>{sport.buttonText}</button>
                                        </div>
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

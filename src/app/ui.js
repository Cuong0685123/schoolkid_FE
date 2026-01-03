'use client';
import React from 'react';
import styles from './page.module.scss';
import Header from '@/components/header';
import Hero from '@/components/hero';
import ContentSlider from '@/components/content-slider';
import ContentImage from '@/components/content-image';
import ViewMore from '@/components/viewmore';
import ContentVideo from '@/components/content-video';
import News from '@/components/news';
import Newsletter from '@/components/newsletter';
import Footer from '@/components/footer';
import Accordion from '@/components/accordion';


export default function UI() {
    const sports = 'sports';
    const extraClasses = 'extraClasses';
    const teachers = 'teachers';
    
    const sportsData = [
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

    const extraCurricularData = [
        {
            title: 'Settling',
            description: 'To round out our weekend of celebrations, we are holding our reunion.',
            image: '/images/components/content-slider/extraClass-1.jpg',
            age: '4-5 yrs',
            weekly: '3 days',
            period: '3.30 hrs'
        },
        {
            title: 'Play Group',
            description: 'We will be magically transforming the School’s Sports Center into a full game area.',
            image: '/images/components/content-slider/extraClass-2.jpg',
            age: '4-5 yrs',
            weekly: '3 days',
            period: '3.30 hrs'
        },
        {
            title: 'Pre-Nursery',
            description: 'EduKid is thrilled to teach pre-nursery courses to better the lives of our children.',
            image: '/images/components/content-slider/extraClass-3.jpg',
            age: '4-5 yrs',
            weekly: '3 days',
            period: '3.30 hrs'
        },
        {
            title: 'Play Group',
            description: 'We will be magically transforming the School’s Sports Center into a full game area.',
            image: '/images/components/content-slider/extraClass-2.jpg',
            age: '4-5 yrs',
            weekly: '3 days',
            period: '3.30 hrs'
        },
        {
            title: 'Play Group',
            description: 'We will be magically transforming the School’s Sports Center into a full game area.',
            image: '/images/components/content-slider/extraClass-2.jpg',
            age: '4-5 yrs',
            weekly: '3 days',
            period: '3.30 hrs'
        },
    ];

    const accordionData = [
        {
            title: 'To round out our weekend of celebrations, we are holding - 1',
            content: 'Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus sagittis pellentesque eget convallis commodo. Sit pellentesque dolor neque a diam malesuada.'
        },
        {
            title: 'To round out our weekend of celebrations, we are holding - 2',
            content: 'Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus sagittis pellentesque eget convallis commodo. Sit pellentesque dolor neque a diam malesuada.'
        },
        {
            title: 'To round out our weekend of celebrations, we are holding - 3',
            content: 'Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat. At nulla erat nisi nunc. Sit risus sagittis pellentesque eget convallis commodo. Sit pellentesque dolor neque a diam malesuada.'
        },
    ]
    return (
        <>
            <Header />
            <Hero />
            <ContentSlider type={sports} data={sportsData} />
            <ContentImage />
            <ContentSlider type={extraClasses} data={extraCurricularData} />
            <Accordion data={accordionData} />
            {/* <ContentImage /> */}
            {/* <ViewMore /> */}
            {/* <ContentSlider /> */}
            {/* <ContentVideo /> */}
            {/* <News /> */}
            {/* <Newsletter /> */}
            {/* <Footer /> */}


        </>
    );
}

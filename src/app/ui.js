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


export default function UI() {
    return (
        <>
            <Header />
            <Hero />
            <ContentSlider />
            <ContentImage />
            <ContentSlider />
            <ContentImage />
            <ViewMore />
            <ContentSlider />
            <ContentVideo />
            <News />
            <Newsletter />
            <Footer />


        </>
    );
}

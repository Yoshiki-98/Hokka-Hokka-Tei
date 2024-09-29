import React, { useRef, useCallback } from 'react';
import Image from "next/image";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // フェードエフェクトのCSSを追加
import styles from "./index.module.css";
import LeftArrowButton from '../svg/button/trigger/left-arrow';
import RightArrowButton from '../svg/button/trigger/right-arrow';

const banners = [
  { id: '1a', url: '/images/banner_00.png'},
  { id: '1a2b', url: '/images/banner_01.png'},
  { id: '1a2b3c', url: '/images/banner_02.png'},
  { id: '1a2b3c4d', url: '/images/banner_03.png'},
  { id: '1a2b3c4d5e', url: '/images/banner_04.png'},
  { id: '1a2b3c4d5e6f', url: '/images/banner_05.png'},
  { id: '1a2b3c4d5e6f7g', url: '/images/banner_06.png'},
  { id: '1a2b3c4d5e6f7g8h', url: '/images/banner_07.png'},
  { id: '1a2b3c4d5e6f7g8h9i', url: '/images/banner_08.png'},
];

export default function BannerSlider() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, []);

  return (
    <Box className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        // effect="fade"
        // fadeEffect={{
        //   crossFade: true
        // }}
        // breakpointsを削除
        slidesPerView={1} // フェードエフェクトを使用する場合は1に固定
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          // enabled: true, // この行を削除
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return '<span class="' + className + ' ' + styles.customBullet + '"></span>';
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // ナビゲーションの初期化と更新を追加
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className={isSmUp ? styles.slideWrapperSmUp : styles.slideWrapperSmDown}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Image
              src={banner.url}
              width={1000}
              height={400}
              alt="Slider Image"
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {
        isLgUp && (
          <Box ref={prevRef} className={styles.navPrev} onClick={handlePrev}>
            <LeftArrowButton className="flex justify-center" />
          </Box>
        )
      }
      {
        isLgUp && (
          <Box ref={nextRef} className={styles.navNext} onClick={handleNext}>
            <RightArrowButton className="flex justify-center" />
          </Box>
        )
      }
    </Box>
  );
}

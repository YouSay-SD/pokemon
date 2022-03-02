import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import styles from './ImageGallery.module.scss'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-fade'

const ImageGallery = () => {
  return (
    <div className={styles['image-gallery']}>
      <Swiper
        className={`mySwiper ${styles.swiper}`}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        effect={'fade'}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, EffectFade]}
      >
        <SwiperSlide>
          <Image
            className={styles.img}
            src='/img/background-1.jpg'
            alt='Slide 1'
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.img}
            src='/img/background-2.jpg'
            alt='Slide 2'
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImageGallery

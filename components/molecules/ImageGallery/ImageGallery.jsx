import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import styles from './ImageGallery.module.scss'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-fade'

const ImageGallery = () => {
  const pokemons = [
    { name: 'pikachu' },
    { name: 'charmander' },
    { name: 'squirtle' },
    { name: 'bulbasaur' }
  ]

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
        {pokemons.map(({ name }) => {
          return (
            <SwiperSlide key={name}>
              <Image
                className={styles.img}
                src={`/img/${name}.png`}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ImageGallery

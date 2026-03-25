import { useRef, useState, useCallback, useEffect } from "react";
import Slider from "react-slick";

import arrowLeft from "../../assets/images/sliderImages/switchLeft.svg";
import arrowRight from "../../assets/images/sliderImages/switchRight.svg";

import { motion } from "framer-motion";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { TGallerySwiperProps } from "../../types/types";

// Иконки для кастомных кнопок

const PerspectiveSlider: React.FC<TGallerySwiperProps> = ({
  images,
  onSlideChange,
  initialSlide = 0,
}) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  useEffect(() => {
    const btns = document.querySelectorAll(".slick-arrow");
    btns.forEach((btn) => {
      const htmlBtn = btn as HTMLElement;
      htmlBtn.style.display = "none";
    });
  }, []);

  // Настройки слайдера
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2, // Показываем 3 слайда одновременно
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: initialSlide,
    centerMode: true,
    centerPadding: "0px", // Убираем padding для лучшего контроля
    focusOnSelect: true,
    swipeToSlide: true,
    draggable: true,
    pauseOnHover: true,
    variableWidth: false, // Используем фиксированную ширину

    beforeChange: (next) => {
      setCurrentSlide(next);
      onSlideChange?.(next);
    },

    // Адаптивность
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  // Функции для навигации
  const nextSlide = useCallback(() => {
    sliderRef.current?.slickNext();
  }, []);

  const prevSlide = useCallback(() => {
    sliderRef.current?.slickPrev();
  }, []);

  const goToSlide = useCallback((index: number) => {
    sliderRef.current?.slickGoTo(index);
  }, []);

  // Функция для определения стилей слайда на основе его позиции
  const getSlideStyles = (index: number) => {
    const totalSlides = images.length;

    // Вычисляем расстояние от текущего слайда с учетом бесконечной прокрутки
    let distance = index - currentSlide;

    // Корректируем для бесконечной прокрутки
    if (distance > totalSlides / 2) distance -= totalSlides;
    if (distance < -totalSlides / 2) distance += totalSlides;

    const absDistance = Math.abs(distance);

    // Базовые стили
    let scale = 1;
    let translateX = 0;
    let zIndex = 30 - absDistance * 5;

    // Применяем эффекты в зависимости от расстояния
    if (absDistance === 0) {
      // Центральный слайд
      scale = 1;
      translateX = 0;
    } else if (absDistance === 1) {
      // Соседние слайды
      scale = 0.8;
      translateX = distance > 0 ? 40 : -40;
    } else if (absDistance === 2) {
      // Слайды через один
      scale = 0.3;
      translateX = distance > 0 ? 80 : -80;
    } else {
      // Дальние слайды
      scale = 0.2;
      translateX = distance > 0 ? 90 : -90;
    }

    return {
      scale,
      translateX,
      zIndex,
      transform: `translateX(${translateX}px) scale(${scale})`,
    };
  };

  return (
    <div className="relative flex items-center w-full h-[666px]">
      {/* Контейнер слайдера */}
      <div className="w-full max-w-[730px] mx-auto max-[400px]:w-[400px]">
        {/* Заголовок */}

        {/* Обертка слайдера с фиксированной высотой */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: -330 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Slider ref={sliderRef} {...settings} className="w-full ">
            {images.map((slide, index) => {
              const styles = getSlideStyles(index);
              const isActive = index === currentSlide;

              return (
                <motion.div key={slide.id} className="px-5 outline-none ">
                  <div
                    className={`
                      relative rounded-xl overflow-hidden cursor-pointer
                      transition-all duration-700 ease-out
                      ${isActive && "shadow-2xs  shadow-black"}
                      hover:shadow-2xl hover:shadow-primary/30
                      mx-auto w-[500px] max-[600px]:w-[350px] max-[400px]:w-[250px]
                    `}
                    style={{
                      transform: styles.transform,
                      zIndex: styles.zIndex, // Фиксированная ширина для всех слайдов
                      margin: "0 auto",
                    }}
                    onClick={() => goToSlide(index)}
                  >
                    {/* Изображение */}
                    <motion.div
                      className="relative aspect-[4/5] rounded-xl"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: 0.2 * index }}
                    >
                      <img
                        src={slide.img}
                        alt={slide.alt}
                        className="w-full h-full transition-transform duration-700 hover:scale-110"
                        loading="lazy"
                      />

                      {/* Градиентный оверлей */}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </Slider>
        </motion.div>

        {/* Кастомные кнопки навигации */}
        <button
          onClick={prevSlide}
          className={`absolute -left-14 top-1/2 -translate-y-1/2 z-50
            w-[34px] h-[13px]
            cursor-pointer
            max-[1600px]:left-0
            flex items-center justify-center
            hover:scale-110 transition-all duration-300
            focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg`}
          aria-label={`Previous slide`}
        >
          <img src={arrowLeft} alt="" />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute -right-14 top-1/2 -translate-y-1/2 z-50
            w-[34px] h-[13px]
            cursor-pointer
             max-[1600px]:right-0
            flex items-center justify-center
            hover:scale-110 transition-all duration-300
            focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg`}
          aria-label={`Next slide`}
        >
          <img src={arrowRight} alt="" />
        </button>

        {/* Кастомная пагинация */}
        <div className="flex justify-center items-center gap-10 mt-12">
          {images.map((_, index) => {
            const isActive = index === currentSlide;
            const isNear = Math.abs(index - currentSlide) === 1;

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  relative transition-all duration-300 rounded-full w-3.5 h-3.5 bg-primary/40 border-2 border-primary/40
                  cursor-pointer
                  focus:outline-none focus:bg-primary
                  ${
                    isActive
                      ? " bg-primary after:absolute after:left-[14px] after:top-1/2 after:w-[20px] after:h-[1px] after:bg-primary/40"
                      : isNear
                        ? "bg-transparent  hover:bg-white/70"
                        : "bg-transparent  hover:bg-white/50"
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Индикатор текущего слайда */}
        <div className="text-center mt-6 text-white/60 text-sm">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
    </div>
  );
};

export default PerspectiveSlider;

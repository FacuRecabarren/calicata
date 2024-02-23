import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './styles.css'

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708712604/Carla_Rodr%C3%ADguez_2_cdtjci.png" alt=""  className='rounded-lg w-[30rem] px-3 shadow-xl'/>
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708712755/Carla_Rodr%C3%ADguez_3_wycrcr.png" alt=""  className='rounded-lg w-[30rem] px-3 shadow-xl'/>
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708713081/Carla_Rodr%C3%ADguez_4_kghury.png" alt=""  className='rounded-lg w-[30rem] px-3 shadow-xl'/>
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708713294/Carla_Rodr%C3%ADguez_5_mhjjr4.png" alt=""  className='rounded-lg w-[30rem] px-3 shadow-xl'/>
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708713491/Carla_Rodr%C3%ADguez_6_apv4am.png" alt=""  className='rounded-lg w-[30rem] px-3 shadow-xl'/>
        </div>
        
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel

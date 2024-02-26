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
        <div className="embla__container cursor-grab">
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708712604/Carla_Rodr%C3%ADguez_2_cdtjci.png" alt=""  className='rounded-lg w-[30rem] px-3 shadow-xl'/>
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708712755/Carla_Rodr%C3%ADguez_3_wycrcr.png" alt=""  className='rounded-lg w-[30rem] px-3 shadow-xl'/>
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708713081/Carla_Rodr%C3%ADguez_4_kghury.png" alt=""  className='rounded-lg w-[30rem] px-3 shadow-xl'/>
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708713294/Carla_Rodr%C3%ADguez_5_mhjjr4.png" alt=""  className='rounded-lg w-[30rem] px-3 shadow-xl'/>
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708713491/Carla_Rodr%C3%ADguez_6_apv4am.png" alt=""  className='rounded-lg w-[30rem] px-3 shadow-xl'/>
        </div>
        
      </div>

      <div className="embla__controls w-full flex justify-center items-center">
        <div className="embla__buttons ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className='text-[#218B7D] hover:text-[#66a295] duration-300 w-20 flex justify-center items-center outline-none'/>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className='text-[#218B7D] hover:text-[#66a295] duration-300 w-20 flex justify-center items-center outline-none' />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel

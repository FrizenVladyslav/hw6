//import styles
import './scss/styles.scss'

//import modules
import { prevSlide, nextSlide } from './controller'
import {slides, carousel, leftBtn, rightBtn} from './DOM'

let swapStart;

//add listeners
leftBtn.addEventListener('click', () => prevSlide(slides))
rightBtn.addEventListener('click', () => nextSlide(slides))
document.addEventListener('keydown', (e) => {
  if(e.keyCode == 37) prevSlide(slides)
  if(e.keyCode == 39) nextSlide(slides)
})
carousel.addEventListener('mousedown', ({screenX}) => swapStart = screenX)
carousel.addEventListener('mouseup', ({screenX}) => {
  if(swapStart - screenX > 50) nextSlide(slides)
  if(swapStart - screenX < -50) prevSlide(slides)
})
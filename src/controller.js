export const prevSlide = slides => {
  let index = Array.prototype.findIndex.call(slides, slide => slide.classList.contains('active'))
  slides[index].classList.remove('active')
  
  if(index == 0){
    slides[slides.length-1].classList.add('active')
  }else{
    slides[--index].classList.add('active')
  }
}

export const nextSlide = slides => {
  let index = Array.prototype.findIndex.call(slides, slide => slide.classList.contains('active'))
  slides[index].classList.remove('active')
  
  if(index == slides.length-1){
    slides[0].classList.add('active')
  }else{
    slides[++index].classList.add('active')
  }
}
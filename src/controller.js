export const handleTagMove = (e, tag) => {
  tag.style.left = e.pageX - tag.offsetWidth / 2 + 'px';
  tag.style.top = e.pageY - tag.offsetHeight / 2 + 'px';
}

export const handleMouseDown = tag => {
  tag.style.backgroundColor = 'blue'
  document.onmousemove = (e) => handleTagMove(e, tag)
}

export const handleMouseUp = tag => {
  tag.style.backgroundColor = '#e4e4e4'
  document.onmousemove = null
}

export const handleDeleteTag = ({ target }, box) => {
  box.removeChild(target.parentNode)
}
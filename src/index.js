import './scss/styles.scss' //import styles

import { box, tags, closeBtns } from './DOM' //import DOM elemenst
import { handleMouseDown, handleMouseUp, handleDeleteTag } from './controller' //import controller function


tags.forEach(tag => {
  tag.addEventListener('mousedown', e => handleMouseDown(tag,e))
  tag.addEventListener('mouseup', e => handleMouseUp(tag, e))
})

closeBtns.forEach(btn => {
  btn.addEventListener('click', e => handleDeleteTag(e, box))
})



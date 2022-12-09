'use client'

import React, { useState } from 'react'
import { changeColor } from '../functions/changeColor';
import styles from './ThemeButton.module.css'

export default function ThemeButton() {

  const [icon, setIcon] = useState(false)
  const [primera, setPrimera] = useState(true)

  return (
    <button 
    onClick={() => {
      changeColor(setIcon,primera, setPrimera)
    }}
    className={styles.button}
    >
      {
      icon ? <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/> </svg>
      : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill-rule="nonzero" d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"/> </g> </svg>
      }
      
        Dark Mode
    </button>
  )
}

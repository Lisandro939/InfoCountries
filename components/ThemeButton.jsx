'use client'

import React, { useState } from 'react'
import { changeColor } from '../functions/changeColor';
import styles from './ThemeButton.module.css'
import { BsMoonFill, BsMoon } from "react-icons/bs";

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
      icon ? <BsMoonFill className={styles.moonFill} />
      : <BsMoon className={styles.moon} />
      }
        Dark Mode
    </button>
  )
}

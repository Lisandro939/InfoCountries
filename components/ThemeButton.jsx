'use client'

import React from 'react'
import { changeColor } from '../functions/changeColor';

export default function ThemeButton() {

  return (
    <button onClick={() => changeColor()}>
        Dark Mode
    </button>
  )
}

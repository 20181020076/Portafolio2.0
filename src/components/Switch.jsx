"use client";
import React, { useState } from 'react'

const Switch = () => {
    const [isSelected, setIsSelected] = useState(true);

  return (
    <div className={`flex w-20 h-10 bg-gray-600 m-10 rounded-full relative transition-all duration-500 ${isSelected? "bg-green-500":""}`} onClick={()=>setIsSelected(!isSelected)}>
        <span className={`h-10 w-10  bg-white rounded-full absolute transition-all duration-500 shadow-lg ${isSelected? "translate-x-full":"translate-x-0"}`} />
    </div>
  )
}

export default Switch
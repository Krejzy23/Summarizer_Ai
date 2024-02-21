import React from 'react'

import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex w-full justify-between items-center flex-row mb-10 pt-3'>
        <img 
          src={ logo }
          alt='sumz_logo'
          className='w-28 object-contain'
        />

        <button
          type='button'
          onClick={() => window.open('https://github.com/Krejzy23')}
          className='black_btn'
        >
          GitHub
        </button>

      </nav>

      <h1 className='head_text'>
        Summerize Article with <br className='max-md:hidden'/>
        <span className='orange_gradient'>Open AI GPT-4</span>

      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize,an open-source article summarizer that transform lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero
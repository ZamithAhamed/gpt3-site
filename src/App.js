import React from 'react'

import { Features, WhatGPT3, Header, Possibility, Blog, Footer } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div class="App">
        <div class="gradient__bg">
           <Navbar />
           <Header />
        </div>
           <Brand />
           <WhatGPT3 />
           <Features />
           <Possibility />
           <CTA />
           <Blog />
           <Footer />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import { courses } from './data'
import Course from './components/Course'


function App() {


  return (
    <div>
      <Header />
      {
        courses?.map((course => (
          <Course key={course.id} course={course} />
        )))
      }
    </div>

  )
}

export default App

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'R','i', 'c', 'h', 'a', 'r', 'd', ',']
  const jobArray = [
    'a',
    ' ',
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>
          <h2>C++ / JavaScript / Python</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <p className='aboutone'>
          I am currently a computer science student at the University of Santa Barbara, California 
          with extensive programming experience in C++, JavaScript, and Python. I have interned at 
          multiple local companies as a software engineer and I am an active member of my community 
          having lead and been a part of several non-profit initiatives aiming to make a positive 
          impact using technology.
        </p>
        <p className='abouttwo'>
          I would describe myself as someone who is highly motivated, naturally curious, and extraordinarily
          resilient. I love learning new things and I am constantly seeking out ways to improve on everything. 
          In my free time, I enjoy reading fantasy stories, discovering new music, and playing a wild assortment
          of sports and games with my friends.
        </p>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
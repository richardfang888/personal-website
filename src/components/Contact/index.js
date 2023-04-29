import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p><span style={{ fontSize: '20px' }}>Email: richardfang888@gmail.com</span></p>
          <p><span style={{ fontSize: '20px' }}>Phone: (949) 880-5795</span></p>
          
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
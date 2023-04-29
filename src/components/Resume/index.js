import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container resume-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['R', 'e', 's', 'u', 'm', 'e']}
              idx={15}
            />
          </h1>
          <iframe 
            src="https://drive.google.com/file/d/1huHsiY1okfNxTEleWe0I5FCN0szWn28O/preview"
            width="640"
            height="380"
            allow="autoplay"
          >
          </iframe>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Resume
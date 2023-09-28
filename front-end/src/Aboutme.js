import { Link } from 'react-router-dom'
import './Home.css'
import MyImage from './photo.jpeg'

/**
 * A React component that represents the About me of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Aboutme = props => {
  return (
    <>
      <h1>My name is avinash gyawali!</h1>
      <p>Hello there! My name is Avinash Gyawali. I am a XR developer , and I'm very passionate about spatial computing and its applications in the real world .I am a creative game developer passionate about immersive technologies such as AR/VR/MR
        A Computer Science student with a passion for Extended Reality (XR) is a dynamic and forward-thinking individual who blends their technical expertise with a
        fascination for cutting-edge technologies. XR, which encompasses Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR), offers an exciting 
        intersection of computer science and immersive experiences. Here's a description of such a student:
      </p>
      <p>
        I am Computer Science student with a profound fascination for Extended Reality (XR). This dynamic individual blends their strong academic background in
        programming, software development, and computer systems with a passion for the immersive experiences offered by XR, encompassing Virtual Reality (VR), 
        Augmented Reality (AR), and Mixed Reality (MR). Proficient in languages like C++, C#, Python, and JavaScript, [Your Name] possesses the technical expertise
        required to develop tailored XR applications and environments. Their skills extend to computer graphics, physics simulations, and algorithms, essential components
        for creating realistic XR spaces. [Your Name]'s project portfolio includes immersive VR games, educational AR applications, and innovative gesture-based interfaces. 
        They've garnered recognition within the XR development community and have a vision of making XR accessible and impactful, particularly in fields like education, healthcare, 
        and entertainment. [Your Name] aspires to be at the forefront of this technological revolution, pushing the boundaries of XR's potential and inspiring others to explore this 
        captivating realm of computer science.
      </p>
       <img src={MyImage} alt="A sample image" />
    </>
  )
}

// make this component available to be imported into any other file
export default Aboutme

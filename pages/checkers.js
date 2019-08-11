import { Fade } from 'react-reveal'
import Checkerboard from '../components/Checkerboard'

const Page = () => (
  <Fade>
    <Checkerboard dimensions={8} />
  </Fade>
)

export default Page

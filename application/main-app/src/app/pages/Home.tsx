import { Box, Heading, Image, Text } from '@chakra-ui/react'
import landingImg from '../images/DALL_E_landing.webp'

const Home = () => (
  <Box>
    <Heading size='xl'>Welcome to Michelangelo Codes</Heading>
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Image
        src={landingImg}
        alt='Abstract Landing Page Image'
        borderRadius='lg'
        mb={5}
        width='75%'
      />
    </Box>
    <Text>
      Hello, I'm Michelangelo Markus. Welcome to my corner of the internet where
      I unravel the mysteries of cloud technology and solutions architecture.
      With experience from AWS and currently as a Senior Cloud Engineering
      Consultant at an AWS Advanced Consulting Partner, I share insights,
      tutorials, and stories from my tech journey. Whether you're an aspiring
      cloud engineer or a seasoned pro, you'll find a mix of practical advice,
      industry insights, and a touch of humor. Dive in, explore, and let's
      navigate the cloud together!
    </Text>
  </Box>
)

export default Home

import { Box, Heading, Image, Text } from '@chakra-ui/react'
import meImg from '../images/me.jpg'

const About = () => (
  <Box>
    <Heading size='xl'>About Me</Heading>
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Image
        src={meImg}
        alt='Michelangelo Markus Profile Picture'
        borderRadius='lg'
        mb={5}
        width='75%'
      />
    </Box>
    <Text>
      Hey there, I'm Michelangelo Markus. I once founded my own cloud
      consultancy company and spent a few years as a Solutions Architect at AWS.
      Now, I'm a Senior Cloud Engineering Consultant at an AWS Advanced
      Consulting Partner. I've devoted my career to cloud technology, focusing
      on AWS, Infrastructure as Code (IaC), and pushing research innovations
      forward.
    </Text>
    <Heading size='lg' mt={4}>
      My Professional Odyssey
    </Heading>
    <Text>
      During my stint at AWS, I dove deep into cloud solutions and IaC,
      contributing to the AWS Cloud Development Kit (CDK). I helped create the
      AWS CDK Immersion Day, empowering developers globally. You might've seen
      me at AWS events like re:Invent, talking about cost optimization and
      generative AI in research.
    </Text>
    <Heading size='lg' mt={4}>
      Beyond the Cloud
    </Heading>
    <Text>
      When I'm not buried in code, I'm probably out in nature, globe-trotting,
      or lost in a book. These escapes keep me sane and add a dash of creativity
      to my work.
    </Text>
    <Heading size='lg' mt={4}>
      Let's Connect
    </Heading>
    <Text>
      I'm always up for a chat about cloud, tech, research, or even the latest
      in Berlin's food scene. Feel free to connect!
    </Text>
  </Box>
)

export default About

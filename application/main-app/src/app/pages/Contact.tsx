import { Box, Heading, Image, Link, Text } from '@chakra-ui/react'
// import contactImg from '../images/DALL_E_contact.png'

const Contact = () => (
  <Box>
    <Heading size='xl'>Contact Me</Heading>
    <Text>
      I'd love to hear from you! Whether you have a question about cloud
      technology, want to discuss a project, or just want to say hi, feel free
      to reach out.
    </Text>
    {/* <Box display='flex' justifyContent='center' alignItems='center'>
      <Image
        src={contactImg}
        alt='Contact Michelangelo Markus'
        borderRadius='md'
        m={5}
        width='50%'
      />
    </Box> */}
    <Heading size='lg' mt={4}>
      Email
    </Heading>
    <Text>
      You can email me at{' '}
      <Link href='mailto:contact@michelangelo.codes' color='blue.100'>
        contact@michelangelo.codes
      </Link>
      .
    </Text>
    <Heading size='lg' mt={4}>
      LinkedIn
    </Heading>
    <Text>
      Connect with me on{' '}
      <Link
        href='https://www.linkedin.com/in/michelangelo-markus'
        color='blue.100'
      >
        LinkedIn
      </Link>
      .
    </Text>
  </Box>
)

export default Contact

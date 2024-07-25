import { ReactNode } from 'react'
import { Box, Flex, Heading, Image, Tab, TabList, Tabs } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../images/logo.png'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Box>
    <Flex
      as='header'
      bg='brand.900'
      p={4}
      align='center'
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex align='center' mb={{ base: 4, md: 0 }}>
        <Image src={logo} alt='Site Logo' boxSize='50px' />
        <Heading as='h1' size='lg' ml={4}>
          Michelangelo Codes
        </Heading>
      </Flex>
      <Flex ml={{ base: 0, md: 'auto' }} w={{ base: '100%', md: 'auto' }}>
        <Tabs w='100%'>
          <TabList justifyContent={{ base: 'center', md: 'flex-end' }}>
            <Tab as={RouterLink} to='/' p={2} _focus={{ boxShadow: 'none' }}>
              Home
            </Tab>
            <Tab
              as={RouterLink}
              to='/about'
              p={2}
              _focus={{ boxShadow: 'none' }}
            >
              About
            </Tab>
            <Tab
              as={RouterLink}
              to='/contact'
              p={2}
              _focus={{ boxShadow: 'none' }}
            >
              Contact
            </Tab>
            <Tab
              as={RouterLink}
              to='/blog'
              p={2}
              _focus={{ boxShadow: 'none' }}
            >
              Blog
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
    </Flex>
    <Box as='main' p={4}>
      {children}
    </Box>
  </Box>
)

export default Layout

import { ReactNode } from 'react'
import { Box, Flex, Heading, Image, Tab, TabList, Tabs } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Box>
    <Flex as='header' bg='brand.900' p={4} align='center'>
      <Image src='/path/to/your/image.png' alt='Site Logo' boxSize='50px' />
      <Heading as='h1' size='lg' ml={4}>
        My Blog
      </Heading>
      <Flex ml='auto'>
        <Tabs>
          <TabList ml='auto'>
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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './chakra_global/theme'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BlogHome from './pages/BlogHome'
import BlogPost from './pages/BlogPost'

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<BlogHome />} />
          <Route path='/blog/:id' element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  </ChakraProvider>
)

export default App

import { useEffect, useState } from 'react'
import { Box, Heading, Text, Grid, GridItem, Input } from '@chakra-ui/react'
import axios from 'axios'
import { Link as RouterLink } from 'react-router-dom'

const BlogHome = () => {
  const [posts, setPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get('/ghost/api/v3/content/posts/?key=c5d6f3c98e91ee8c5666689fae')
      .then((response) => setPosts(response.data.posts))
      .catch((error) => console.error(error))
  }, [])

  interface Post {
    id: string
    title: string
    excerpt: string
    html: string // Assuming the post content is available in the 'html' field
  }

  const filteredPosts = posts.filter(
    (post: Post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.html.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Box p={4}>
      <Heading mb={6}>Blog Home</Heading>
      <Input
        placeholder='Search posts'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={8}
        bg='gray.600'
        fontFamily='inherit'
        color='gray.200'
        border='1px solid'
        borderColor='gray.600'
        _focus={{ borderColor: 'gray.800' }}
      />
      <Grid templateColumns='repeat(auto-fill, minmax(300px, 1fr))' gap={6}>
        {filteredPosts.map((post: Post) => (
          <GridItem
            as={RouterLink}
            to={`/blog/${post.id}`}
            key={post.id}
            p={4}
            borderWidth='1px'
            borderRadius='md'
            boxShadow='sm'
            _hover={{
              bg: 'rgba(255, 255, 255, 0.1)',
              boxShadow: 'md',
              transform: 'translateY(-2px)',
            }}
            transition='all 0.2s ease-in-out'
            textDecoration='none'
          >
            <Heading size='md' color='blue.400' mb={2}>
              {post.title}
            </Heading>
            <Text>{post.excerpt}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default BlogHome

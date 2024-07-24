import { useEffect, useState } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('/ghost/api/v3/content/posts/?key=c5d6f3c98e91ee8c5666689fae')
      .then((response) => setPosts(response.data.posts))
      .catch((error) => console.error(error))
  }, [])

  return (
    <Box>
      <Heading>Blog Page</Heading>
      {posts.map((post: { id: string; title: string; excerpt: string }) => (
        <Box key={post.id} p={4} borderWidth='.15em' borderRadius='md' mb={4}>
          <Heading size='md'>{post.title}</Heading>
          <Text>{post.excerpt}</Text>
        </Box>
      ))}
    </Box>
  )
}

export default Blog

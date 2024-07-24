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
  }

  const filteredPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Box>
      <Heading>Blog Home</Heading>
      <Input
        placeholder='Search posts'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
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
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
            textDecoration='none'
          >
            <Heading size='md'>{post.title}</Heading>
            <Text>{post.excerpt}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default BlogHome

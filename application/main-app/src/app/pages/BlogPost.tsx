import { useEffect, useState } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BlogPost = () => {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    axios
      .get(`/ghost/api/v3/content/posts/${id}/?key=c5d6f3c98e91ee8c5666689fae`)
      .then((response) => setPost(response.data.posts[0]))
      .catch((error) => console.error(error))
  }, [id])

  if (!post) {
    return <Text>Loading...</Text>
  }

  return (
    <Box>
      <Heading>{post.title}</Heading>
      <Text>{post.html}</Text>
    </Box>
  )
}

export default BlogPost

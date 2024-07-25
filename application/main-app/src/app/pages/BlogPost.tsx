import { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Divider,
  Code,
  Flex,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import parse, { domToReact } from 'html-react-parser'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism-okaidia.css' // Importing the dark theme

const BlogPost = () => {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    axios
      .get(`/ghost/api/v3/content/posts/${id}/?key=c5d6f3c98e91ee8c5666689fae`)
      .then((response) => {
        const post = response.data.posts.find((p: any) => p.id === id)
        setPost(post)
      })
      .catch((error) => console.error(error))
  }, [id])

  useEffect(() => {
    if (post) {
      Prism.highlightAll()
    }
  }, [post])

  if (!post) {
    return <Text>Loading...</Text>
  }

  const options = {
    replace: ({ name, attribs, children }: any) => {
      if (!attribs) return

      switch (name) {
        case 'p':
          return <Text mb={6}>{domToReact(children, options)}</Text>
        case 'img':
          return (
            <Image
              src={attribs.src}
              srcSet={attribs.srcset}
              alt={attribs.alt}
              my={4}
              mx='auto'
              maxW='100%'
              borderRadius='md'
              onError={(e) => {
                const target = e.target as HTMLImageElement
                console.error('Image failed to load:', attribs.src, e)
                target.style.display = 'none' // Hide the broken image
              }}
            />
          )
        case 'a':
          return (
            <Link href={attribs.href} color='teal.500'>
              {domToReact(children, options)}
            </Link>
          )
        case 'hr':
          return <Divider my={4} />
        case 'pre':
          return (
            <Box
              as='pre'
              p={4}
              bg='gray.900'
              borderRadius='md'
              my={4}
              color='white'
            >
              {domToReact(children, options)}
            </Box>
          )
        case 'code':
          const className = attribs.class ? attribs.class : ''
          const language = className.split('-')[1] || 'markup'
          return (
            <Code
              p={2}
              bg='gray.900'
              borderRadius='md'
              className={`language-${language}`}
              color='white'
            >
              {domToReact(children, options)}
            </Code>
          )
        case 'figure':
          if (attribs.class && attribs.class.includes('kg-card-hascaption')) {
            return (
              <Box as='figure' my={4} textAlign='center'>
                {domToReact(children, options)}
              </Box>
            )
          }
          if (attribs.class && attribs.class.includes('kg-callout-card')) {
            return (
              <Flex
                as='figure'
                my={4}
                p={4}
                bg='blue.50'
                borderRadius='md'
                alignItems='center'
              >
                <Box as='span' mr={2} fontSize='2xl'>
                  {attribs.class.includes('kg-callout-emoji')
                    ? domToReact(children, options)
                    : '💡'}
                </Box>
                <Box>{domToReact(children, options)}</Box>
              </Flex>
            )
          }
          return (
            <Box as='figure' my={4}>
              {domToReact(children, options)}
            </Box>
          )
        case 'figcaption':
          return (
            <Text
              as='figcaption'
              textAlign='center'
              fontSize='sm'
              color='gray.500'
              mt={2}
            >
              {domToReact(children, options)}
            </Text>
          )
        case 'div':
          if (attribs.class && attribs.class.includes('kg-callout-card')) {
            return (
              <Flex
                my={4}
                p={4}
                bg='blue.900'
                borderRadius='md'
                alignItems='center'
              >
                {children.map((child: any, index: number) => {
                  if (
                    child.attribs &&
                    child.attribs.class &&
                    child.attribs.class.includes('kg-callout-emoji')
                  ) {
                    return (
                      <Box as='span' mr={2} fontSize='2xl' key={index}>
                        {domToReact(child.children, options)}
                      </Box>
                    )
                  }
                  return <Box key={index}>{domToReact([child], options)}</Box>
                })}
              </Flex>
            )
          }
          return
        default:
          return
      }
    },
  }

  return (
    <Box>
      <Heading mb={6}>{post.title}</Heading>
      <Box>{parse(post.html, options)}</Box>
    </Box>
  )
}

export default BlogPost

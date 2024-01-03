import React, { useContext, useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PostsContext } from '../../context/PostsContext'
import PostCard from './PostCard'

const Blog = () => {

  const { fetch, loading, data, error } = useContext(PostsContext)
  const isMount = useRef(false)
  console.log(fetch());
  useEffect(() => {
    if (!isMount.current) {
      fetch()
      isMount.current = true;
    }
  }, [])

  return (
    <section className='py-4'>
      <Container>
        <h2 className='text-center'>Latest Posts</h2>
        <Row xs={'1'} md={'2'} lg={'4'} className='g-4'>
          {loading ? 'Loading...' : 
          <Col>
            <PostCard />
          </Col>}

        </Row>
      </Container>
    </section>
  )
}

export default Blog
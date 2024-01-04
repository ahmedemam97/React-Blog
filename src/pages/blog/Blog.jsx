import React, { useContext, useEffect, useRef } from 'react'
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap'
import { PostsContext } from '../../context/PostsContext'
import PostCard from './PostCard'

const Blog = () => {
  const blogObserveRef = useRef(null)
  const { fetch, loading, data, error, fetching, fetchNext } = useContext(PostsContext)
  const isMount = useRef(false)
  // console.log(fetch());
  useEffect(() => {
    if (!isMount.current) {
      fetch()
      isMount.current = true;
    }
  }, [fetch])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const blogObserver = entries[0]
      if (blogObserver.isIntersecting) {
        //fetch next data
        fetchNext()
      }
    }, {})

    if (blogObserveRef.current) observer.observe(blogObserveRef.current)

    return () => {
      if (blogObserveRef.current) observer.unobserve(blogObserveRef.current)
    }
  }, [data, blogObserveRef, fetchNext])


  return (
    <section className='py-4'>
      <Container>
        <h2 className='text-center pb-4'>Latest Posts</h2>
        {loading ?
          <div className='text-center pt-5'>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div> : ''}

        {error ?
          <div>
            <Alert variant='danger'>{error}</Alert>
          </div>
          : ''}

        {(!loading || !error) && data ? (
          <Row xs={'1'} md={'2'} lg={'4'} className='g-4'>
            {data.map((post) => {
              
              return (
                <Col key={post.id}>
                  <PostCard post={post} />
                </Col>
              );
            })}
          </Row>
        ) : ''}

        {fetching ? <div className='text-center py-5'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div> : ''}

        <div className='blog-observer' ref={blogObserveRef}></div>
      </Container>
    </section>
  )
}

export default Blog
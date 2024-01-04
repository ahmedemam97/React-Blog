import React, { useContext, useEffect, useRef } from 'react'
import styles from './home.module.css'
import { Alert, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PostsContext } from '../../context/PostsContext'
import PostCard from '../../pages/blog/PostCard'

const LatestPost = () => {

    const { fetch, loading, data, error } = useContext(PostsContext)
    const isMount = useRef(false)
    // console.log(fetch());
    useEffect(() => {
        if (!isMount.current) {
            fetch()
            isMount.current = true;
        }
    }, [])
    const navigate = useNavigate()

    return (
        <section className='py-5'>
            <Container>
                <h2 className="text-center py-5">Latest Articles</h2>

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
                        {data.slice(0, 4).map((post) => (
                            <Col key={post.id}>
                                <PostCard post={post} />
                            </Col>
                        ))}
                    </Row>
                ) : ''
                }

                <div className='text-center mt-4'>
                    <Button variant='outline-dark' className='px-5' onClick={() => navigate('/blog')}>
                        See All
                    </Button>
                </div>
            </Container>
        </section>
    )
}

export default LatestPost
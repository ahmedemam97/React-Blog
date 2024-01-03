import React from 'react'
import styles from './home.module.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LatestPost = () => {

    const navigate = useNavigate()

    return (
        <section className='py-5'>
            <Container>
                <h2 className="text-center py-5">Latest Articles</h2>

                <Row xs={'1'} md={'2'} lg={'4'} className='g-4'>
                    {new Array(4).fill('x').map((item, index) => (
                        <Col key={index}>
                            Article
                        </Col>
                    ))}
                </Row>

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
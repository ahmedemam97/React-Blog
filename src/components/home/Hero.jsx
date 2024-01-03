import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Logo from '../../assets/images/logo.png'
import styles from './home.module.css'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate()

    return (
        <section>
            <Container>
                <Row>
                    <Col sm='12' md='10' lg='8' className='mx-auto' >
                        <div className={styles.hero}>
                            <img width={100} className='pb-4'  src={Logo} alt="Logo" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At odit voluptatibus cumque nam est eius illo corporis voluptates, omnis expedita maxime natus, minus officia vitae.</p>
                        </div>

                        <div className="mt-4 d-flex">
                            <Button size='lg' className='mx-auto' onClick={() => navigate('/blog/newPost')}>
                                Add New Article
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero
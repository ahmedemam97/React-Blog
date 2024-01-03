import React from 'react'
import { Button, Container } from 'react-bootstrap'
import notFoundImg from '../../assets/images/not-found.png'
import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.css'
const NotFound = () => {
  let navigate = useNavigate();
  return (
    <section className={styles.notfound }>
      <Container>
        <div className={styles.notfound_items}>
          <img src={notFoundImg} alt="Not Found" className='ms-auto w-25' />
          <p>Page Not Found</p>
          <Button variant='outline-secondary' onClick={()=> navigate('/')}>Back To Home</Button>
        </div>
      </Container>
    </section>
  )
}

export default NotFound
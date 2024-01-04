import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import useFetchDocParams from '../../hooks/useFetchDocParams';
import { Alert, Card, Container, Row } from 'react-bootstrap';
import './blog.module.css'
import styles from './blog.module.css'

const Article = () => {
  const params = useParams()
  const { getData, data, loading, error } = useFetchDocParams('Posts', params.slug)
  const isMount = useRef(null)

  useEffect(() => {
    if (!isMount.current) {
      getData()
      isMount.current = true;
    }
  }, [])

  if (loading) return <p>Loading ...</p>
  if (error) return <Alert variant='danger'>{error}</Alert>
  if (!data) return null
  console.log(data);

  const getDate = (d) => {
    const date = new Date(d);
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <article className='article'>
      <div className={styles.article_hero}>
        <img src={data.image} alt={data.title} />

      </div>

      <Container>
        <Row>
          <Card>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Subtitle className='mt-2 text-muted'>
                <small>By: {data.user}</small> <br />
                <small>{getDate(data.createdAt)}</small>
              </Card.Subtitle>

              <div className='mt-5' dangerouslySetInnerHTML={{ __html: data.body }}>

              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </article>
  )
}

export default Article
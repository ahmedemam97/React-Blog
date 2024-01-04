import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FirebaseContext } from '../../context/FirebaseContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Audio, FidgetSpinner, InfinitySpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [loading, setLoading] = useState(false)
  const { app, db } = useContext(FirebaseContext)
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target.title.value;
    const exert = e.target.exert.value;
    const image = e.target.image.value;
    const slug = title.split(' ').join('-') + '-' + new Date().getTime();

    setLoading(true)


    try {
      const colRef = collection(db, 'Posts')
      await addDoc(colRef, {
        title,
        exert,
        image,
        body,
        slug,
        user: 'Ahmed',
        createdAt: serverTimestamp()
      })

      e.target.reset()
      setBody('')
      navigate(`/blog/${slug}`)
    } catch (error) {
      console.log(error)
    }

    setLoading(false)




    console.log({ title, exert, image, body, slug });
  }



  return (
    <section className='py-5'>
      <Container>
        <Row>
          <Col className='mx-auto' md='8' lg='6'>
            <h2>Add New Post</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Post Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Post Title" name='title' />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formExert">
                <Form.Label>Post Exert</Form.Label>
                <Form.Control type="text" placeholder="Enter Post Exert" name='exert' />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Post Image</Form.Label>
                <Form.Control type="text" placeholder="Enter Image URL" name='image' />
              </Form.Group>

              <ReactQuill theme="snow" value={body} onChange={setBody} />


              <Button type='submit' className='w-100 mt-4' disabled={loading}>
                {loading ? '. . .' : 'Submit'}
              </Button>
            </Form>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NewPost
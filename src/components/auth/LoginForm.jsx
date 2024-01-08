import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import * as Yup from 'yup'
import { AuthContext } from '../../context/AuthContext'
import { ColorRing } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [loading, setLoading] = useState(false)
    const { signIn } = useContext(AuthContext)

    const loginSubmit = (values) => {
        console.log(values);
        if (formik.isValid) {
            setLoading(true)
            try {
                signIn({ email: values.email, password: values.password })
            } catch (error) {
                setLoading(false)
                alert(error.message)
            }
            setLoading(false)
        }
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required('Email Is Required!'),
        password: Yup.string().required('Password Is Required!').min(6)
    })

    const formik = useFormik({
        validateOnMount: true,
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: loginSubmit,
    })

    return (
        <Card className='p-4 mt-5 bg-light w-50'>
            <Form className='' onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        isInvalid={formik.errors.email && formik.touched.email} />

                    {formik.errors.email && formik.touched.email ?
                        <Form.Text className="text-danger">
                            {formik.errors.email}
                        </Form.Text> : ''}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        isInvalid={formik.errors.password && formik.touched.password} />
                </Form.Group>

                {formik.errors.password && formik.touched.password ?
                    <Form.Text className="text-danger">
                        {formik.errors.password}
                    </Form.Text> : ''}

                {loading ?
                    <Button variant="primary" type="submit" className='d-block w-100'>
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    </Button> :
                <Button variant="primary" type="submit" className='d-block w-100'>Submit</Button>
                }
            </Form>

            <Link to={'/register'} className='text-black pt-3'>Registering for the first time</Link>
        </Card>
    )
}

export default LoginForm
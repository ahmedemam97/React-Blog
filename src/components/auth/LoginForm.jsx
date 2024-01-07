import { useFormik } from 'formik'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import * as Yup from 'yup'

const LoginForm = () => {

    const loginSubmit = (values) => {
        console.log(values);
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
        <Card className='p-4 mt-5 bg-light'>
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

                <Button variant="primary" type="submit" className='d-block w-100'>
                    Submit
                </Button>
            </Form>
        </Card>
    )
}

export default LoginForm
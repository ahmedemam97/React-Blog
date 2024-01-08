import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import * as Yup from 'yup'
import { AuthContext } from '../../context/AuthContext'
import { ColorRing } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    const [loading, setLoading] = useState(false)
    const { signUp } = useContext(AuthContext)

    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('Name is a required field!').min(3, 'Min Chars Is 3!'),
        email: Yup.string().email().required('Email is a required field!'),
        password: Yup.string().required('Password is a required field!').min(6, 'Min is 6 chars'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password doesn't match!")
            .required('Confirm password is a required field!'),
        approved: Yup.boolean().oneOf([true], 'Required')
    })

    const reigsterSubmit = (values) => {
        if (formik.isValid) {
            setLoading(true)
            console.log("values", values);
            try {
                signUp({ email: values.email, password: values.password })
                setLoading(false)
            } catch (error) {
                setLoading(false)
                alert(error.message)
            }
        }
    }

    const formik = useFormik({
        validateOnMount: true,
        initialValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            approved: false
        },

        validationSchema,
        onSubmit: reigsterSubmit
    })

    return (
        <Card className='p-4 bg-light w-50'>
            <Form className='' onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Name" name='userName'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.userName} />

                    {formik.errors.userName && formik.touched.userName ?
                        <Form.Text className="text-danger">
                            {formik.errors.userName}
                        </Form.Text> : ''}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.email} />

                    {formik.errors.email && formik.touched.email ?
                        <Form.Text className="text-danger">
                            {formik.errors.email}
                        </Form.Text> : ''}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.password} />

                    {formik.errors.password && formik.touched.password ?
                        <Form.Text className="text-danger">
                            {formik.errors.password}
                        </Form.Text> : ''}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword'
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword} />

                    {formik.errors.confirmPassword && formik.touched.confirmPassword ?
                        <Form.Text className="text-danger">
                            {formik.errors.confirmPassword}
                        </Form.Text> : ''}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I've read terms and conditions" name='approved'
                        value={formik.values.approved} onChange={formik.handleChange} />

                    {formik.errors.approved && formik.touched.approved ?
                        <Form.Text className="text-danger">
                            {formik.errors.approved}
                        </Form.Text> : ''}

                </Form.Group>

                <Button disabled={!(formik.dirty && formik.isValid)} variant="primary" type="submit" className='d-block w-100'>
                    {loading ?
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        /> :
                        'Submit'
                    }
                </Button>
            </Form>

            <Link to={'/login'} className='text-black pt-3'>You have an account?</Link>
        </Card>
    )
}

export default RegisterForm
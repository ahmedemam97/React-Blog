import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AuthLayout = () => {
    return (
        <main className='auth-layout'>
            <Outlet />
        </main>
    )
}

export default AuthLayout
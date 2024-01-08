import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import NotFound from '../pages/Not Found/NotFound'
import Blog from '../pages/blog/Blog'
import NewPost from '../pages/blog/NewPost'
import Article from '../pages/blog/Article'
import AuthLayout from '../layouts/AuthLayout'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import MainHome from '../components/home'
import { AuthContext } from '../context/AuthContext'

const MainRouter = () => {
    const { isAuth } = useContext(AuthContext)
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<MainHome />} />
                <Route path='*' element={<NotFound />} />
            </Route>

            <Route path='/blog' element={<MainLayout />}>
                <Route index element={<Blog />} />
                {isAuth ?
                    <Route path='newPost' element={<NewPost />} /> :
                    <Route path='newPost' element={<Navigate to={'/login'} replace />} />
                }
                <Route path=':slug' element={<Article />} />
            </Route>

            <Route path='/' element={<AuthLayout />}>
                {!isAuth ?
                    <Route path='login' element={<Login />} /> :
                    <Route path='login' element={<Navigate to={'/'} replace />} />
                }
                {!isAuth ?
                    <Route path='register' element={<Register />} /> :
                    <Route path='register' element={<Navigate to={'/'} replace />} />
                }
            </Route>
        </Routes>
    )
}

export default MainRouter
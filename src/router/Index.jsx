import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import NotFound from '../pages/Not Found/NotFound'
import Blog from '../pages/blog/Blog'
import NewPost from '../pages/blog/NewPost'
import Article from '../pages/blog/Article'
import AuthLayout from '../layouts/AuthLayout'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import MainHome from '../components/home'

const MainRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<MainHome/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>

            <Route path='/blog' element={<MainLayout/>}>
                <Route index element={<Blog/>}/>
                <Route path='newPost' element={<NewPost/>}/>
                <Route path=':slug' element={<Article/>}/>
            </Route>
            
            <Route path='/' element={<AuthLayout/>}>
                <Route path='register' element={<Register/>}/>
                <Route path='login' element={<Login/>}/>
            </Route>
        </Routes>
    )
}

export default MainRouter
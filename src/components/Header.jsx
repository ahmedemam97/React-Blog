import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ImgLogo from '../assets/images/logo.png'
import { AuthContext } from '../context/AuthContext'
const Header = () => {

    const { isAuth, logout } = useContext(AuthContext)
    const DLink = ({ slug, title, end, children }) => {
        return <Nav.Link as={'span'}>
            <NavLink className={styles.navLink} to={slug} end={!!end}>
                {title} {children}
            </NavLink>
        </Nav.Link>
    }

    // const headerLinks = [
    //     { path: '/', linkName: 'Home' },
    //     { path: '/blog', linkName: 'Blog' },
    //     { path: '/blog/newPost', linkName: 'New Post' },
    //     { path: '/login', linkName: 'Login' },
    //     { path: '/register', linkName: 'Register' },
    // ]

    return (
        <header className={styles.header}>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={'span'}>
                        <DLink slug={'/'}>
                            <img src={ImgLogo} alt="Image Logo" />
                        </DLink>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <DLink end slug={'/'} title={'Home'}></DLink>
                        <DLink end slug={'/blog'} title={'Blog'}></DLink>
                        {isAuth ? (
                            <>
                                <DLink end slug={'/blog/newPost'} title={'New Post'}></DLink>
                                <Button onClick={logout}>Logout</Button>
                            </>
                        )
                            : (
                                <>
                                    <DLink end slug={'/login'} title={'Login'}></DLink>
                                    <DLink end slug={'/register'} title={'Register'}></DLink>
                                </>
                            )
                        }


                        {/* {headerLinks.map((link, index, end) => (
                            <Nav.Link key={index} as={'span'}>
                                <NavLink className={styles.navLink} to={link.path} end={!!end}>
                                    {link.linkName}
                                </NavLink>
                            </Nav.Link>
                        ))} */}
                    </Nav>
                </Container>
            </Navbar>
        </header>

    )
}

export default Header
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './blog.module.css'
import './blog.module.css'

const PostCard = ({ post }) => {

    const getDate = (d)=>{
        const date = new Date(d);
        const day = date.getDay();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <Link to={`/blog/${post.slug}`} className={styles.card_link}>
            <Card className={styles.card}>
                <div className={styles.postcard_img}>
                    <Card.Img variant="top" src={post.image} />
                    <div className={styles.postcard_img_info}>
                        <small>By: {post.user}</small>
                        <small>post.createdAt</small>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text className='exert'>
                        {post.exert}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PostCard
import { useState, useEffect } from "react"
import {Row, Col} from 'react-bootstrap';
import {Post} from './Post'
import {getPosts} from './blogService'

export interface IPost {
    id: number,
    title: string,
    content: string,
    author?: string
}

export const PostList = ():JSX.Element =>{

    const [posts, setPosts] = useState<IPost[]>([])


    useEffect(()=>{
        const fetchAllPosts = async ()=>{
            const posts = await  getPosts()
            setPosts(posts)
        }
        fetchAllPosts()
    }, [])


    return <>
        <Row>
            { posts.map((post)=> (
                <Col md={4} key={post.id}>
                <Post id={post.id} title={post.title} content={post.content}/>
                </Col>
            )) }
        </Row>
    </>
}
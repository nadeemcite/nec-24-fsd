import axios from 'axios'
import {IPost} from './PostList'
import {IComment} from './Post'

export const getPosts = async (): Promise<IPost[]> =>{
    const response = await axios.get("http://localhost:4000/posts")
    return response.data.map((el: any) => {
        return {
            id: el.id,
            title: el.title,
            content: el.content,
            author: el.author
        }
    })
}

export const getPost = async (postId: number): Promise<IPost> =>{
    const response = await axios.get(`http://localhost:4000/posts/${postId}`)
    return {
        id: response.data.id,
        title: response.data.title,
        content: response.data.content,
        author: response.data.author
    }
}

export const getComments = async (postId: number): Promise<IComment[]> =>{
    const response = await axios.get(`http://localhost:4000/posts/${postId}/comments`)
    return response.data.map((el:any) =>{
        return {
            id: el.id,
            title: el.title,
            body: el.body
        }
    })
}
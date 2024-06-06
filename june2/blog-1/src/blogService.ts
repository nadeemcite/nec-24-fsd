import axios from 'axios'
import {IPost} from './PostList'
import {IComment} from './Post'

export const getPosts = async (): Promise<IPost[]> =>{
    const response = await axios.get("http://localhost:4000/posts")
    return response.data.map((el: any) => {
        return {
            id: el.id,
            title: el.title,
            content: el.content
        }
    })
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
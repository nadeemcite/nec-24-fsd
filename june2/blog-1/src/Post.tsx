import {Card, Accordion} from 'react-bootstrap'
import {getComments} from './blogService'
import { useEffect, useState } from 'react'

interface PostProps {
    id: number,
    title: string,
    content: string
}

export interface IComment{
      id: number,
      title: string,
    body: string
}

export const Post: React.FC<PostProps> = ({id: postId, title, content}: PostProps): JSX.Element =>{
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(()=>{
        const fetchAllComments = async ()=>{
            const comments = await getComments(postId)
            setComments(comments)
        }
        fetchAllComments()
    }, [])
    return <>
        <Card className='m-2'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {content}
                    <Accordion defaultActiveKey="0">
                        {comments.map((comment, index)=>(
                            <Accordion.Item eventKey={index.toString()}>
                                <Accordion.Header>
                                    {comment.title}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {comment.body}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}
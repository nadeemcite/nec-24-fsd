import { Card, Accordion } from "react-bootstrap";
import { getComments, getPost } from "./blogService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "./PostList";

export interface IComment {
  id: number;
  title: string;
  body: string;
}

export const Post: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const postId: number = parseInt(id!);

  const [post, setPost] = useState<IPost>({
    id: 0,
    title: "",
    content: "",
  });
  const [comments, setComments] = useState<IComment[]>([]);
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(postId);
      setPost(post);
    };
    const fetchAllComments = async () => {
      const comments = await getComments(postId);
      setComments(comments);
    };
    if(postId>0){
        fetchPost();
        fetchAllComments();
    }
    
  }, []);
  return (
    <>
      <Card className="m-2">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.content}
            <Accordion defaultActiveKey="0">
              {comments.map((comment, index) => (
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header>{comment.title}</Accordion.Header>
                  <Accordion.Body>{comment.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

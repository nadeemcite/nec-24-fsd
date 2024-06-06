import { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { getPosts } from "./blogService";
import { Link } from "react-router-dom";
export interface IPost {
  id: number;
  title: string;
  content: string;
  author?: string;
}

export const PostList = (): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchAllPosts();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Post Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr>
                  <td>
                    <Link to={`post/${post.id}`}>{post.title}</Link>
                  </td>
                  <td>{post.author}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

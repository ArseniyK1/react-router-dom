import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  console.log(useLocation());

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((peq) => peq.json())
      .then((response) => setPosts(response))
      .catch((error) => console.error("error.message = ", error.message));
  }, []);

  return (
    <>
      <div className="blog">
        <h1>Blog</h1>
        <div className="posts-list">
          <Link to="/posts/new">
            <button>Add new post</button>
          </Link>
          {posts.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li>
                {post.id}. {post.title}
              </li>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;

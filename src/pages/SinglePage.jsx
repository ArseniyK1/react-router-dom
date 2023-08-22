import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((pequest) => pequest.json())
      .then((response) => setPosts(response))
      .catch((error) => console.error("error.message = ", error.message));
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go back!</button>
      {posts && (
        <div className="one-post">
          <h1>
            {posts.id}. {posts.title}
          </h1>
          <p>{posts.body}</p>
          <Link to={`/posts/${id}/edit`}>
            <button>Edit this post</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SinglePage;

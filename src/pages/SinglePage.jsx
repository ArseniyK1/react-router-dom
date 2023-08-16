import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((pequest) => pequest.json())
      .then((response) => setPosts(response))
      .catch((error) => console.error("error.message = ", error.message));
  }, [id]);

  return (
    <div>
      {posts && (
        <>
          <h1>
            {posts.id}. {posts.title}
          </h1>
          <p>{posts.body}</p>
        </>
      )}
    </div>
  );
};

export default SinglePage;

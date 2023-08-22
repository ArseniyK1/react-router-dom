import { useParams } from "react-router-dom";

const EditPostPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Edit a post {id}</h1>
    </>
  );
};

export default EditPostPage;

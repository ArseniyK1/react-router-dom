import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const CreatePostPage = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <h1>Create a post</h1>
      <button onClick={() => signOut(() => navigate("/", { replace: true }))}>
        Log out
      </button>
    </>
  );
};

export default CreatePostPage;

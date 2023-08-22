import { Routes, Route, Link, Navigate } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import SinglePage from "./pages/SinglePage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import CreatePostPage from "./pages/CreatePost";
import EditPostPage from "./pages/EditPostPage";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

function App() {
  RequireAuth;
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about-us" element={<Navigate to={"/about"} replace />} />
          {/* replace не записывает в историю браузера переходы по страницам */}
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPostPage />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <CreatePostPage />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {
  return (
    <main>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <div className="wrapper">
        <Outlet />
      </div>
      <footer>Footer site! Kiselev Arseniy (C) 2023</footer>
    </main>
  );
};
export default Layout;

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/home";
import Login, { action as actionLogin } from "./pages/login";
import Users from "./pages/users";
import Categories from "./pages/categories";

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="users" element={<Users />} />
          <Route path="categories" element={<Categories />} />
        </Route>
        <Route path="login" element={<Login />} action={actionLogin} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

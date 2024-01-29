import { Routes, Route, useLocation } from "react-router-dom";
import SignInComponent from "./components/SignIn";
import NotFound from "./components/shared/NotFound";
import Nav from "./components/shared/Nav";
import Home from "./pages/Home";
import Blogs from "./components/Blogs/Blogs";
import BlogDetails from "./components/Blogs/BlogDetails";
import RequireAuth from "./modules/auth/RequireAuth";
import Events from "./components/Events/Events";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import SignUpComponent from "./components/SignUp";
import Main from "./layouts/Main";
import ResetPassword from "./components/newUser/ResetPassword";
import TestModal from "./components/shared/testModal";

function App() {
  const { pathname } = useLocation();
  const withoutNav = pathname === "/connect" || pathname === "/reset-password";
  console.log({pathname, withoutNav})
  return (
    <>
      {!withoutNav && <Nav />}
      <Routes>
        <Route path="/testModal" element={<TestModal />} />
        <Route path="/connect" element={<SignInComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Main>
              <Blogs />
              </Main>
            </RequireAuth>
          }
        />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Main>
                <Home />
              </Main>
            </RequireAuth>
          }
        />
        <Route
          path="/blogs"
          element={
            <RequireAuth>
              <Main>
                <Blogs />
              </Main>
            </RequireAuth>
          }
        />
        <Route
          path="/events"
          element={
            <RequireAuth>
              <Main>
                <Events />
              </Main>
            </RequireAuth>
          }
        />
        <Route
          path="/blogs/:blogId"
          element={
            <Main>
              <BlogDetails />
            </Main>
          }
        />
        <Route
          path="/profile"
          element={
            <Main>
              <Profile />
            </Main>
          }
        />
        <Route
          path="/profile/:userId/edit"
          element={
            <Main>
              <EditProfile />
            </Main>
          }
        />

        {/* <Route path="/profile">
          <Route path=":userId" element={<Main><Profile /></Main>} />
          <Route path=":userId/edit" element={<Main><EditProfile /></Main>} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

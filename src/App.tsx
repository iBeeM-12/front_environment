import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Group } from "./components/Group";
import { CreateGroup } from "./components/CreateGroup";
import { Profile } from "./components/Profile";
import { Post } from "./components/Post";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/group" element={<Group />} />
          <Route path="/group/create" element={<CreateGroup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

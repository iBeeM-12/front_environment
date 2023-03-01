import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Group } from "./components/pages/Group";
import { CreateGroup } from "./components/pages/CreateGroup";
import { Profile } from "./components/pages/Profile";
import { Post } from "./components/pages/Post";
import { Components } from "./components/pages/Components";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/group/:id" element={<Group />} />
          <Route path="/group/create" element={<CreateGroup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts/:id" element={<Post />} />

          {/* コンポーネント確認用ページ */}
          <Route path="/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

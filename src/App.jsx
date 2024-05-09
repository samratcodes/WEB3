import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/property" element={<div>Property page</div>} />
          <Route index element={<Home />} />

          <Route path="/property" element={<div>Property page</div>} />
          <Route path="/profile" element={<div>profile page</div>} />
          <Route path="/acquired" element={<div>purched page</div>} />
          <Route path="/blog" element={<div>blog page</div>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

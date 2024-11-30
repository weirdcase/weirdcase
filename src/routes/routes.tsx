import { Routes, Route } from "react-router-dom";
import Dashboard from '../components/Dashboard/Dashboard';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';
import Blog from '../components/Blog/Blog';
import Playground from '../components/Playground/Playground';
import Resources from '../components/Resources/Resources';
import Contact from '../components/Contact/Contact';
import Layout from "../components/Layout/Layout";
import PageNotFound from "../components/404/PageNotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="whoweare" element={<WhoWeAre />} />
        <Route path="blog" element={<Blog />} />
        <Route path="playground" element={<Playground />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default Router
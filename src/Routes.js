import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import Cases from 'containers/pages/Cases';

import Services from 'containers/pages/Services';
import About from 'containers/pages/About';
import Careers from 'containers/pages/Careers';
import Blog from 'containers/pages/Blog';
import Contact from 'containers/pages/Contact';

import { AnimatePresence } from 'framer-motion';
import Category from 'containers/pages/Category';
import Search from 'containers/pages/Search';
import PostDetail from 'containers/pages/PostDetail';

function AppRoutes(){

    const location = useLocation()

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                    {/* Error Display */}
                    <Route path="*" element={<Error404 />} />

                    {/* Home Display */}
                    <Route path="/" element={<Home />} />
                    <Route path="/cases" element={<Cases />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<PostDetail />} />
                    <Route path="/s/:term" element={<Search />} />
                    <Route path="/category/:slug" element={<Category/>} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
        </AnimatePresence>
    )
}
export default AppRoutes
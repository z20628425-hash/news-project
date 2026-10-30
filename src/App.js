import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ArticleDetail from './pages/ArticleDetail';
import SearchResults from './pages/SearchResults';

const App = () => {
  return (
    <div className="min-h-screen bg-[#eef2f6] text-slate-800">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-[1280px] px-4 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
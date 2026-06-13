import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import Books from './pages/Books'
import Poetry from './pages/Poetry'
import Videos from './pages/Videos'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import ScrollToTop from './components/ScrollToTop'
import { LanguageProvider } from './context/LanguageContext'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25 } },
}

function PageWrapper({ children }) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ minHeight: '70vh' }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <LanguageProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ScrollToTop />
        <Navbar />
        <div style={{ flex: 1 }}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/"             element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/about"        element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/articles"     element={<PageWrapper><Articles /></PageWrapper>} />
              <Route path="/books"        element={<PageWrapper><Books /></PageWrapper>} />
              <Route path="/poetry"       element={<PageWrapper><Poetry /></PageWrapper>} />
              <Route path="/videos"       element={<PageWrapper><Videos /></PageWrapper>} />
              <Route path="/contact"      element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/admin"        element={<PageWrapper><Admin /></PageWrapper>} />
              <Route path="*"             element={<PageWrapper><About /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

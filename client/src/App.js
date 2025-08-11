import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import AnnouncementDetailPage from './pages/AnnouncementDetailPage';
import CreateAnnouncementPage from './pages/CreateAnnouncementPage';
import UserProfilePage from './pages/UserProfilePage';
import PrivateRoute from './components/PrivateRoute';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><HomePage /></motion.div>} />
        <Route path="/login" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><LoginPage /></motion.div>} />
        <Route path="/register" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><RegisterPage /></motion.div>} />
        <Route path="/announcements" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><AnnouncementsPage /></motion.div>} />
        <Route path="/announcements/new" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><PrivateRoute><CreateAnnouncementPage /></PrivateRoute></motion.div>} />
        <Route path="/announcements/:id" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><AnnouncementDetailPage /></motion.div>} />
        <Route path="/users/:id" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><UserProfilePage /></motion.div>} />
        <Route path="/profile" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><PrivateRoute><ProfilePage /></PrivateRoute></motion.div>} />
        <Route path="/create-announcement" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><PrivateRoute><CreateAnnouncementPage /></PrivateRoute></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main className="container">
        <div className="page-container">
          <AnimatedRoutes />
        </div>    
      </main>
    </AuthProvider>
  );
}

export default App;

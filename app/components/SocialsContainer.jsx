// SocialsContainer
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';
import { useContext, useRef, useEffect } from 'react';
import { AppContext } from './statsContext';

const SocialsContainer = () => {
  const { isSocialsOpen, setIsSocialsOpen, socialsSide } = useContext(AppContext);
  const containerRef = useRef();

  const variants = {
    open: { x: socialsSide === 'left' ? '0' : '0%' },
    closed: { x: socialsSide === 'left' ? '-100%' : '100%' },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsSocialsOpen(false);
      }
    };

    if (isSocialsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSocialsOpen, setIsSocialsOpen]);

  return (
    <AnimatePresence>
      {isSocialsOpen && (
        <motion.div
          ref={containerRef}
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{ duration: 0.1, type: 'spring', ease:'linear', stiffness: 75, damping: 20 }}
          style={{
            position: 'fixed',
            top: 0,
            left: socialsSide === 'left' ? 0 : '50%',
            width: '50%',
            height: '100vh',
            background: 'white',
            zIndex: 1000,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Your content here */}
          <p>Socials coming soon</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialsContainer;

import { motion, AnimatePresence } from "framer-motion";

export default function ErrorPopup({ message, show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 
                     bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg
                     text-sm font-medium z-50"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

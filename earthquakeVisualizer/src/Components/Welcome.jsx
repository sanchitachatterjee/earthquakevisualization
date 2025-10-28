import { motion, AnimatePresence } from "framer-motion";

export default function Welcome({ onContinue }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-violet-300 rounded-2xl shadow-2xl max-w-md mx-auto p-8 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold text-violet-800 mb-4">
            Hello Welcome!
          </h1>
          <p className="text-black-600 mb-6 font-bold">
            Casey is a geography student who wants to study seismic activity
            patterns around the world to understand how the Earth moves.
            This web-application will help her visualize the recent earthquake activity
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContinue}
            className="bg-violet-600 text-white px-6 py-2 rounded-lg shadow hover:bg-violet-700"
          >
            Continue to Application →
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

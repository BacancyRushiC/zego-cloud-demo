import { useNavigate } from "react-router-dom";
import AnimatedButton from "../ui/animated-button/AnimatedButton";
import { motion } from "framer-motion";
import videoCall from "../assets/react.svg";

const Home = () => {
  const navigate = useNavigate();

  const handleStartCall = () => {
    navigate("/call");
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="p-8 rounded-lg w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
        >
          Video Call App
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <motion.img
            src={videoCall}
            alt="Video Call Illustration"
            className="w-64 h-64 mx-auto object-contain"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <button className="mb-4" onClick={handleStartCall}>
            <AnimatedButton hueValue={270} className="mt-4">
              Start New Call
            </AnimatedButton>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="text-gray-400 text-sm">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/rushi-chudasama-63473819a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 font-medium hover:text-purple-300 transition-colors duration-200 cursor-pointer inline-block"
          >
            <motion.span
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 0px rgba(99, 102, 241, 0)",
                  "0 0 8px rgba(99, 102, 241, 0.5)",
                  "0 0 0px rgba(99, 102, 241, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Rushi Chudasama
            </motion.span>
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Home;

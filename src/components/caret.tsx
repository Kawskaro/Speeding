import { motion } from "framer-motion";

const Caret = () => {
    return (
        <motion.div
            aria-hidden={true}
            className="inline-block bg-primary-500 w-1 h-8 align-middle" 
            initial={{opacity: 1 }}
            animate={{opacity: 0 }}
            exit={{opacity: 1 }}
            transition={{repeat: Infinity, duration: 0.8, ease: "easeInOut"}}
        />
    );
};

export default Caret;
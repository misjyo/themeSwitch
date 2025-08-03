import React from 'react'
import { motion } from "framer-motion";
const Contact: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Contact Page</h1>
            <p>This is the Contact page content.</p>
        </motion.div>
    )
}

export default Contact

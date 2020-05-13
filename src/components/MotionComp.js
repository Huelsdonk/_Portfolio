import React from 'react'
import { motion } from "framer-motion"

export const Mo = (props) => {
    
    return (
        <motion.a whileHover={{ fontSize: '22px', transition: {ease: "easeOut", duration: .2} }} whileTap={{ scale: 0.8 }} className="blulink" href={props.href} rel="noopener noreferrer" target="_blank">{props.text}</motion.a>
    )
};

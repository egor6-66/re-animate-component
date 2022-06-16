import React, {FC} from 'react';
import {motion} from "framer-motion";
import {itemVariants} from "./framer";
import './Button.css';


export interface ButtonProps {
    children: any,
    color?: string,
    bgColor?: string,
    hoverBgColor?: string,
    hoverColor?: string,
    width?: number,
    height?: number,
}

const Button: FC<ButtonProps> = (props) => {

    const {
        children,
        color = '#fff',
        bgColor = '#2f54eb',
        hoverBgColor = '#adc6ff',
        hoverColor = '#2f54eb',
        width,
        height
    } = props;

    const rootClasses = ['ruk-button'];

    return (
        <motion.button {...props}
                       className={rootClasses.join(' ')}
                       animate='animate'
                       variants={itemVariants(hoverBgColor, hoverColor, bgColor, color)}
                       whileHover="whileHover"
                       whileTap='whileTap'
                       style={{
                           backgroundColor: bgColor,
                           color,
                           width,
                           height
                       }}
        >
            {children}
        </motion.button>
    );
};


export default Button;

import React, { FC, useEffect, useState } from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {itemVariants} from "./framer";
import './navbar.css';


interface NavbarProps {
    items?: any[],
    activeItemId?: number,
    callback?: any
    initialAnimation?: boolean,
    direction?: 'row' | 'column',
    iconPosition?: 'left' | 'right',
    color?: string,
    textSize?: number,
    gap?: number,
    iconSize?: number,
    iconColor?: string,
    lineMarginBottom?: number,
    lineColor?: string,
}

const Navbar: FC<NavbarProps> = (props) => {

    const {
        items,
        activeItemId = null,
        callback,
        initialAnimation,
        direction = 'row',
        iconPosition,
        color,
        textSize,
        gap,
        iconSize,
        iconColor,
        lineMarginBottom = 6,
        lineColor,
    } = props;

    const [activeItem, setActiveItem] = useState<number | null>(null);
    const [hoverItem, setHoverItem] = useState<number | null>(null);

    useEffect(() => {
        setActiveItem(activeItemId)
    }, []);

    const onclick = (item: any, index: number) => {
        setActiveItem(item.id)
        callback({item, index})
    };

    const lineStyle: any = {
        width: '100%',
        height: '4px',
        position: 'absolute',
        bottom: -lineMarginBottom,
        borderRadius: '8px',
        backgroundColor: lineColor
    };

    return (
        <AnimatePresence initial={false}>
            <motion.div className='re-navbar'
                        onMouseLeave={() => setHoverItem(null)}
                        style={{
                            flexDirection: direction,
                            gap: gap,
                        }}
            >
                {items?.map((item, index) =>
                    <motion.div key={item.id}
                                className={`re-navbar-item-${direction}`}
                                onClick={() => {
                                    onclick(item, index)
                                }}
                                onMouseEnter={() => setHoverItem(item.id)}
                                variants={itemVariants()}
                                custom={index}
                                initial={initialAnimation ? 'initial' : ''}
                                animate='animate'
                                exit={initialAnimation ? 'exit' : ''}
                                whileHover="whileHover"
                                whileTap='whileTap'
                    >

                        <h1 className='re-navbar-title'
                            style={{
                                order: iconPosition === 'left' ? 2 : 1,
                                fontSize: textSize,
                                color: color,
                            }}
                        >
                            {item.title}
                        </h1>
                        <img className='re-navbar-icon'
                             style={{
                                 order: iconPosition === 'left' ? 1 : 2,
                                 width: iconSize,
                                 height: iconSize,
                                 fill: iconColor
                             }} src={item.icon}/>
                        {hoverItem === item.id && <motion.div layoutId='activeItem' style={{...lineStyle, opacity: 0.7}}/>}
                        {activeItem === item.id && <motion.div layoutId='activeItem2' style={lineStyle}/>}
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};


export default Navbar;

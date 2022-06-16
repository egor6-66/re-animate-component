export const itemVariants = (hoverBgColor: string, hoverColor: string, color: string, bgColor: string) => {

    return {
        animate: {
            backgroundColor: bgColor,
            color: color,
        },
        whileHover: {
            color: hoverColor || '',
            backgroundColor: hoverBgColor || '',
        },
        whileTap: {
            backgroundColor: bgColor,
            color: color,
            scale: 0.95,
        }
    }
};

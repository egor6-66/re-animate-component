export const itemVariants = () => {
    return {
        initial: {
            opacity: 0,
        },
        animate: (i: number) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1,
            },
        }),
        exit: {
            opacity: 0,
        },
        whileHover: {
            scale: 1.1,
            transition: {
                delay: 0.1,
            },
        },
        whileTap: {
            scale: 0.98
        }
    }
};

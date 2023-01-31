import Header from './../components/header/Header';
import { motion } from 'framer-motion';
import code from './../img/codesvg.svg';

const textAnim = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 },
    }),
};
const svgAnim = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 },
    }),
};

const Home = () => {
    return (
        <>
            <Header />

            <motion.main
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.2 }}
                className='section'
            >
                <div className='container'>
                    <ul className='content-list'>
                        <li className='content-list__item'>
                            <motion.h2
                                custom={1}
                                variants={textAnim}
                                className='title-2'
                            >
                                Frontend
                            </motion.h2>
                            <motion.p
                                custom={2}
                                variants={textAnim}
                            >
                                JavaScript, ReactJS,  HTML, CSS, SASS, WEBPACK, php,
                                BootStrap, StyledComponents
                            </motion.p>
                            <motion.img
                                variants={svgAnim}
                                custom={2}
                                src={code}
                                alt='code'
                            />
                        </li>
                    </ul>
                </div>
            </motion.main>
            
        </>
    );
};

export default Home;

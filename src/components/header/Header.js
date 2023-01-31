import './style.css';
import { motion } from 'framer-motion';


const textAnim = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 },
    }),
};

const Header = () => {
    return (
        <motion.header
            initial='hidden'
            whileInView='visible'
            className='header'
        >
            <motion.div
                custom={1}
                variants={textAnim}
                className='header__wrapper'
            >
                
                <h1 className='header__title'>
                    <strong>
                        Hi, my name is <em>Gagik!</em>
                    </strong>
                    <br />a frontend developer
                </h1>
                <div className='header__text'>
                    <p>with passion for learning and creating.</p>
                </div>

                {/* <a href="#!" className="btn">Download CV</a> */}
            </motion.div>
        </motion.header>
        
    );
};

export default Header;

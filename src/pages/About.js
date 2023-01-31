import me from '../img/me.JPG';
import {motion} from 'framer-motion';

const imgAnim = {
    hidden:{
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
}
const textAnim = {
    hidden:{
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
}



const Home = () => {
    return (
        <>
        <main className="section">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                className="container">

                <ul className="content-list">
                    <div className="content-list__item">
                        <h2 className="title-2">About me</h2>
                        <motion.img variants={imgAnim} class="content-list__img" src={me} alt='me'/>
                        <motion.p
                            variants={textAnim}
                        >My name's Imil, i'm 22years old<br></br>
                        completed a nine-month course "web development" in PROWEB</motion.p>
                    </div>
                </ul>

            </motion.div>
        </main>
        </>
    );
}

export default Home;
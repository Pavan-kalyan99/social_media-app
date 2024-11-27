import React, { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';

const Text = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['end end', 'end start'],
    });
    const opacity = useTransform(scrollYProgress, [0.3, 0.5], [1.5, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const position = useTransform(scrollYProgress, pos => {
        return pos >= 1 ? 'fixed' : 'relative';
    });

    return (
        <>
            <motion.div id='three' className='relative text-red-900' ref={targetRef} style={{ opacity }}>

                <motion.div style={{ scale, position }}>
                    <div className='title text-center  mt-5' style={{marginTop:'25%'}}>
                        <div className='font-bold'>
                            <h1 className='stay inline sm:text-4xl md:text-5xl lg:text-7xl' id='gradient'>Connect, Share, and Build Your Community Today</h1>
                            <h1 className='stay inline sm:text-3xl md:text-6xl' id='share'> & Share Memories</h1>
                            <div>
                                <p className='inline-block m-1 text-start  text-2xl'>Join our social media platform to create profiles, connect with friends, and share posts, images</p>
                            </div>
                            <button className='btn btn-primary'>Get Started</button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Text;

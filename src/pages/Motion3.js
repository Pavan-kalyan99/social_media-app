import React ,{useRef}from 'react'
import { motion ,useTransform} from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useInView } from 'framer-motion';

const Motion3 = () => {
const targetRef=useRef(null);
    const {scrollYProgress}=useScroll({
        target:targetRef,
        offset:['end end','end start'],
    })
    const opacity=useTransform(scrollYProgress,[0,0.5],[1,0]);
    const scale=useTransform(scrollYProgress,[0,0.5],[1,0.8]);

  return (
    <motion.div className='motion3 relative' ref={targetRef} style={{opacity}}>
      <div className='text-center'>

 
      <motion.div style={{scale}}>
        <h1 >hi pavan kalyan</h1>
      </motion.div>
      <div>
        <h1>hi pavan kalyan</h1>
      </div>
      </div>
      
    </motion.div>
  )
}

export default Motion3

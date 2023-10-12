import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Possibility = () => {
  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        y:0,
        opacity:1,
        transition:{
          type:"spring", duration: 1.5, bounce: 0.2
        }
      })
    }
    if(!inView){
      animation.start({
        y: '20vh',
        opacity:0,
      })
    }
  },[inView, animation])

  return (
    <div className='gpt3__possibility section__padding' id='possibility' ref={ref}>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <motion.div className='gpt3__possibility-content' animate={animation}>
        <h1 className='gradient__text' >The possibilities are beyond your imagination</h1>
        <p>AI is boundless, harnessing limitless data, ever-evolving learning, and scalable versatility. It fuels creativity, automates tasks, and empowers innovative problem-solving. Unlock the future with AI-driven possibilities, transforming industries and experiences.</p>
        <h4>Request Early Access to Get Started</h4>
      </motion.div>
    </div>
  )
}

export default Possibility
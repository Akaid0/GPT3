import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const WhatGPT3 = () => {
  const {ref, inView} = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
  

  useEffect(() => {
    if(inView){
      animation.start({
        y:0,
        opacity:1,
        transition:{
          type:"spring", duration: 1.5, bounce: 0.2
        }
      })
      animation2.start({
        y:0,
        opacity:1,
        transition:{
          type:"spring", duration: 1.5, bounce: 0.2, delay: 0.3
        }
      })
      animation3.start({
        y:0,
        opacity:1,
        transition:{
          type:"spring", duration: 1.5, bounce: 0.2, delay: 0.6
        }
      })
      animation4.start({
        y:0,
        opacity:1,
        transition:{
          type:"spring", duration: 1.5, bounce: 0.2, delay: 0.9
        }
      })
      animation5.start({
        y:0,
        opacity:1,
        transition:{
          type:"spring", duration: 1.5, bounce: 0.2, delay: 1
        }
      })
      animation6.start({
        y:0,
        opacity:1,
        transition:{
          type:"spring", duration: 1.5, bounce: 0.2, delay: 1.1
        }
      })
    }
    if(!inView){
      animation.start({
        y: '10vh',
        opacity:0,
      })
      animation2.start({
        y: '10vh',
        opacity:0,
      })
      animation3.start({
        y: '10vh',
        opacity:0,
      })
      animation4.start({
        y: '10vh',
        opacity:0,
      })
      animation5.start({
        y: '10vh',
        opacity:0,
      })
      animation6.start({
        y: '10vh',
        opacity:0,
      })
    }
    console.log("useEfect hook = ", inView)
  },[inView, animation, animation2,animation3,animation4,animation5,animation6])

  return (
  <div ref={ref}>
    <motion.div
    className='gpt3__whatgpt3 section__margin' 
    id='wgpt3'
    animate={animation} 
    viewport={{
      once: true
    }}
    > 
      <motion.div className='gpt3__whatgpt3-feature' animate={animation2} viewport={{once:true}}>
        <Feature  title="What is GPT3?" text="GPT-3, or the Generative Pre-trained Transformer 3, is a cutting-edge language model developed by OpenAI. It excels at understanding and generating human-like text, opening up exciting possibilities for applications in various fields."/>
      </motion.div>
      <motion.div className='gpt3__whatgpt3-heading' animate={animation3} viewport={{once:true}}>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </motion.div>
      <div className='gpt3__whatgpt3-container'>
        <motion.div animate={animation4} style={{width:'30%'}}>
          <Feature title="Chatbots" text="GPT-3 enhances chatbots by providing natural language understanding and context-aware responses. This versatile AI improves user experiences, automates tasks, and offers multilingual support, making chatbots more effective in diverse industries. " />
        </motion.div>
        <motion.div animate={animation5} style={{width:'30%'}}>
          <Feature title="Knowledgebase" text="GPT-3 elevates knowledge bases by providing natural language understanding and context-aware responses. This AI-powered tool improves user access to information, automates knowledge retrieval, and offers multilingual support, enhancing the effectiveness of knowledge management systems." />
        </motion.div>
        <motion.div animate={animation6} style={{width:'30%'}}>
          <Feature title="Education" text="AI transforms education by offering natural language understanding and context-aware responses. This technology enhances personalized learning, automates tutoring, and provides multilingual support, making education more accessible and effective for students worldwide." />
        </motion.div>
      </div>
    </motion.div>
  </div>
  )
}

export default WhatGPT3
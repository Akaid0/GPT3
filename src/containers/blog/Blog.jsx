import React from 'react';
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports';
import './blog.css';
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Blog = () => {
  const {ref, inView} = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        x:0,
        opacity:1,
        transition:{
          type:"spring", duration: 1.5, bounce: 0.2
        }
      })
      animation2.start({
        x:0,
        opacity:1,
        transition:{
          type:"spring", duration: 1.5, bounce: 0.2, delay: 0.3
        }
      })
    }
    if(!inView){
      animation.start({
        x: '-20vh',
        opacity:0,
      })
      animation2.start({
        x: '20vh',
        opacity:0,
      })
    }
  },[inView, animation])

  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, we are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container' ref={ref}>
        <motion.div className='gpt3__blog-container_groupA' animate={animation}>
          <Article imgURL={blog01} date='Oct 04, 2023' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </motion.div>
        <motion.div className='gpt3__blog-container_groupB' animate={animation2}>
          <Article imgURL={blog02} date='Oct 01, 2023' title="GPT-3 : The Mind-Blowing Revolution That's Changing Everything You Know!"/>
          <Article imgURL={blog03} date='Sep 28, 2023' title="Unveiling the AI Marvel: 10 Astonishing Feats That Will Leave You Speechless!"/>
          <Article imgURL={blog04} date='Sep 25, 2023' title="The Genius Behind OpenAI's Phenomenal Success"/>
          <Article imgURL={blog05} date='Sep 23, 2023' title="From Sci-Fi Dreams to Reality: How AI is Redefining the Future RIGHT NOW!"/>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
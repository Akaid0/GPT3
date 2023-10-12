import React from 'react';
import { Feature } from '../../components';
import './features.css';
import { motion } from "framer-motion"

const featuresData = [
  {
    title: "Personalized Learning ",
    text: "Tailoring educational content to each student's unique needs and pace, enhancing the learning experience.",
  },
  {
    title: "Administrative Efficiency",
    text: " Streamlining administrative tasks, freeing up educators' time for more impactful teaching and mentorship.",
  },
  {
    title: "Inclusivity and Accessibility",
    text: "Breaking down barriers by offering accessible content for students with disabilities and overcoming language barriers, making education more inclusive.",
  },
  {
    title: "Lifelong Skill Development",
    text: " Supporting continuous learning and adaptation to a changing job market by providing personalized skill development pathways.",
  },
]


const fadeInAnimationVariants = {
  initial:{
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      type:"spring", duration: 1.5, bounce: 0.2, delay: 0.3 * index,
    }
  }),
};

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now. Step into it Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={item.title + index}
          >
            <Feature title={item.title} text={item.text}  />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Features
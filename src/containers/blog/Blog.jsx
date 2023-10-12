import React from 'react';
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgURL={blog01} date='Oct 04, 2023' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgURL={blog02} date='Oct 01, 2023' title="GPT-3 : The Mind-Blowing Revolution That's Changing Everything You Know!"/>
          <Article imgURL={blog03} date='Sep 28, 2023' title="Unveiling the AI Marvel: 10 Astonishing Feats That Will Leave You Speechless!"/>
          <Article imgURL={blog04} date='Sep 25, 2023' title="The Genius Behind OpenAI's Phenomenal Success"/>
          <Article imgURL={blog05} date='Sep 23, 2023' title="From Sci-Fi Dreams to Reality: How AI is Redefining the Future RIGHT NOW!"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
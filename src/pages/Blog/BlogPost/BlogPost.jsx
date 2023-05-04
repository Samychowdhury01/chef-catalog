import React from 'react';

const BlogPost = ({post}) => {
    const {question, answer} = post
    return (
        <div className='mb-8 md:w-2/3 md:mx-auto border border-amber-400 p-5 rounded-xl shadow-xl'>
            <h1 className='text-2xl mb-5'><span className='font-bold'>Question: </span>{question}</h1>
            <p> <span className='font-bold text-xl'>Answer:</span> {answer}</p>
        </div>
    );
};

export default BlogPost;
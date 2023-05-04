import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import BlogPost from "../BlogPost/BlogPost";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div className="md:container md:mx-auto">
      <div className="py-14 mb-5 bg-orange-100 rounded-lg shadow-lg">
        <h1 className="text-center text-5xl font-bold">Blog</h1>
        <div className="text-center p-5">
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button onClick={toPdf} className="btn-solid">
                Download as PDF
                <FaFileDownload className="text-xl ml-3" />
              </button>
            )}
          </Pdf>
        </div>
      </div>
      <div ref={ref} className="p-8 md:p-0">
        {blogs.map((post, index) => (
          <BlogPost key={index} post={post}></BlogPost>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

/* 
 <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='btn-solid'>
                    Download as PDF
                    <FaFileDownload className='text-xl ml-3'/>
                    </button>}
      </Pdf>
*/

import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-around my-24 rounded-4xl h-56 items-center p-16 '>
          <div className="hero rounded-4xl bg-yellow-200 ">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <img
      src="/public/books.jpg"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
/* eslint-disable no-unused-vars */
import React from 'react';

/* eslint-disable react/prop-types */

function Card({username = "hello" , post = "Not assigned Yet" , imgURL = ""}) {
  // console.log(props);

  return (
    <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/photo-1709884732259-9f2f0a52288b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem facilis ducimus veniam.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div>
              {username}
            </div>
            <div>
              {post}
            </div>
          </figcaption>
        </div>
      </figure>      
    </div>
  )
}

export default Card
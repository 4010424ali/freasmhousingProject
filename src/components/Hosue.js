import React from 'react';
import './styles/index.css';

const Hosue = ({ image }) => {
  return (
    <a
      href
      className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
    >
      <div className="relative pb-48 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-center"
          src={image}
          alt=""
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
          Highlight
        </span>
        <h2 className="mt-2 mb-2  font-bold">
          Purus Ullamcorper Inceptos Nibh
        </h2>
        <p className="text-sm">
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
          ullamcorper nulla non metus auctor fringilla.
        </p>
      </div>
    </a>
  );
};

export default Hosue;

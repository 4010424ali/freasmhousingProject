import React from 'react';
import './styles/index.css';

const Hosue = () => {
  return (
    <a
      href
      className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
    >
      <div className="relative pb-48 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
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
      <div className="p-4 border-t border-b text-xs text-gray-700">
        <span className="flex items-center mb-1">
          <i className="far fa-clock fa-fw mr-2 text-gray-900" /> 3 Tage
        </span>
        <span className="flex items-center">
          <i className="far fa-address-card fa-fw text-gray-900 mr-2" />{' '}
          Ermäßigung mit Karte
        </span>
      </div>
      <div className="p-4 flex items-center text-sm text-gray-600">
        <span className="ml-2">34 Bewertungen</span>
      </div>
    </a>
  );
};

export default Hosue;

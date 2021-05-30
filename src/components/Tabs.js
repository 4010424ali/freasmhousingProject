import React, { useState } from 'react';
import './styles/index.css';

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className="container mx-auto">
      <div className="grid-tabs">
        <div className="grid-button-tabs">
          <a
            className={
              'text-xs font-bold uppercase px-5 py-3 mb-10 shadow-lg rounded block leading-normal ' +
              (openTab === 1
                ? 'text-white bg-' + color + '-600'
                : 'text-' + color + '-600 bg-white')
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            COMMUNITY CENTRE
          </a>
          <a
            className={
              'text-xs font-bold uppercase px-5 py-3 mb-10 shadow-lg rounded block leading-normal ' +
              (openTab === 2
                ? 'text-white bg-' + color + '-600'
                : 'text-' + color + '-600 bg-white')
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
          >
            AMUSEMENT PARKS
          </a>
          <a
            className={
              'text-xs font-bold uppercase mb-10 px-5 py-3 shadow-lg rounded block leading-normal ' +
              (openTab === 3
                ? 'text-white bg-' + color + '-600'
                : 'text-' + color + '-600 bg-white')
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
            data-toggle="tab"
            href="#link3"
            role="tablist"
          >
            SPORTS COMPLEX
          </a>
          <a
            className={
              'text-xs font-bold uppercase mb-10 px-5 py-3 shadow-lg rounded block leading-normal ' +
              (openTab === 4
                ? 'text-white bg-' + color + '-600'
                : 'text-' + color + '-600 bg-white')
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(4);
            }}
            data-toggle="tab"
            href="#link4"
            role="tablist"
          >
            SCHOOL
          </a>
          <a
            className={
              'text-xs font-bold uppercase mb-10 px-5 py-3 shadow-lg rounded block leading-normal ' +
              (openTab === 5
                ? 'text-white bg-' + color + '-600'
                : 'text-' + color + '-600 bg-white')
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(5);
            }}
            data-toggle="tab"
            href="#link4"
            role="tablist"
          >
            MOSQUE
          </a>
        </div>
        <div className="grid-img-tabs">
          {openTab === 1 && (
            <img
              src="https://www.izharmonnoo.com/wp-content/uploads/2018/04/Community-Centre-DGL.jpg"
              alt=""
              width="100%"
              height="50%"
            />
          )}

          {openTab === 2 && (
            <img
              src="https://www.izharmonnoo.com/wp-content/uploads/2018/04/Amusement-park.jpg"
              alt=""
              width="100%"
              height="50%"
            />
          )}
          {openTab === 3 && (
            <img
              src="https://www.izharmonnoo.com/wp-content/uploads/2018/04/sports-complex_edited.jpg"
              alt=""
              width="100%"
              height="50%"
            />
          )}
          {openTab === 4 && (
            <img
              src="https://www.izharmonnoo.com/wp-content/uploads/2018/04/Pak-Turk-School_edited.jpg"
              alt=""
              width="100%"
              height="50%"
            />
          )}
          {openTab === 5 && (
            <img
              src="https://www.izharmonnoo.com/wp-content/uploads/2018/04/State-of-art-Jamia-Mosque_edited.jpg"
              alt=""
              width="100%"
              height="50%"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Tabs;

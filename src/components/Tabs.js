import React, { useState } from 'react';
import './styles/index.css';

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row content-center container mx-auto"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 mb-5 shadow-lg rounded block leading-normal ' +
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
            </li>
            <li className="mr-2 last:mr-0 flex-auto text-center mb-5">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
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
            </li>
            <li className="mr-2 last:mr-0 flex-auto text-center  mb-5">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
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
            </li>
            <li className="mr-2 last:mr-0 flex-auto text-center  mb-5">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
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
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 5
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                MOSQUE
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-gray-200 w-full mb-6">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-full lg:w-3/4">
                      <img
                        src="https://www.izharmonnoo.com/wp-content/uploads/2018/04/Community-Centre-DGL.jpg"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="w-full md:w-full lg:w-1/4 text-white"
                      style={{ background: '#d1ac6d' }}
                    >
                      <ul
                        className="inline-block align-middle text-sm px-10 py-20"
                        style={{ listStyle: 'outside' }}
                      >
                        <li>Government Approved (LDA, LESCO, WASA)</li>
                        <li>Gated community</li>
                        <li>Quality Development</li>
                        <li>Underground electrification</li>
                        <li>Community centre</li>
                        <li>Sports complex</li>
                        <li>Pak Turk School Dream Gardens campus</li>
                        <li>Pakistan Navy Bahria University Campus</li>
                        <li>Mosque</li>
                        <li>Commercial Market</li>
                        <li>
                          Dedicated commercial area with marts and Banks (MCB
                          Islamic)
                        </li>
                        <li>Medical clinic</li>
                        <li>Corporate office space</li>
                        <li>
                          Easy access to some of the premier educational
                          institutions (COMSATS, BNU, UOL, UCP)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-full lg:w-3/4">
                      <img
                        src="https://www.izharmonnoo.com/wp-content/uploads/2018/04/Amusement-park.jpg"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="w-full md:w-full lg:w-1/4 text-white"
                      style={{ background: '#d1ac6d' }}
                    >
                      <ul
                        className="inline-block align-middle text-sm px-10 py-20"
                        style={{ listStyle: 'outside' }}
                      >
                        <li>Government Approved (LDA, LESCO, WASA)</li>
                        <li>Gated community</li>
                        <li>Quality Development</li>
                        <li>Underground electrification</li>
                        <li>Community centre</li>
                        <li>Sports complex</li>
                        <li>Pak Turk School Dream Gardens campus</li>
                        <li>Pakistan Navy Bahria University Campus</li>
                        <li>Mosque</li>
                        <li>Commercial Market</li>
                        <li>
                          Dedicated commercial area with marts and Banks (MCB
                          Islamic)
                        </li>
                        <li>Medical clinic</li>
                        <li>Corporate office space</li>
                        <li>
                          Easy access to some of the premier educational
                          institutions (COMSATS, BNU, UOL, UCP)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-full lg:w-3/4">
                      <img
                        src="https://www.izharmonnoo.com/wp-content/uploads/2018/04/sports-complex_edited.jpg"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="w-full md:w-full lg:w-1/4 text-white"
                      style={{ background: '#d1ac6d' }}
                    >
                      <ul
                        className="inline-block align-middle text-sm px-10 py-20"
                        style={{ listStyle: 'outside' }}
                      >
                        <li>Government Approved (LDA, LESCO, WASA)</li>
                        <li>Gated community</li>
                        <li>Quality Development</li>
                        <li>Underground electrification</li>
                        <li>Community centre</li>
                        <li>Sports complex</li>
                        <li>Pak Turk School Dream Gardens campus</li>
                        <li>Pakistan Navy Bahria University Campus</li>
                        <li>Mosque</li>
                        <li>Commercial Market</li>
                        <li>
                          Dedicated commercial area with marts and Banks (MCB
                          Islamic)
                        </li>
                        <li>Medical clinic</li>
                        <li>Corporate office space</li>
                        <li>
                          Easy access to some of the premier educational
                          institutions (COMSATS, BNU, UOL, UCP)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={openTab === 4 ? 'block' : 'hidden'} id="link4">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-full lg:w-3/4">
                      <img
                        src="https://www.izharmonnoo.com/wp-content/uploads/2018/04/Pak-Turk-School_edited.jpg"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="w-full md:w-full lg:w-1/4 text-white"
                      style={{ background: '#d1ac6d' }}
                    >
                      <ul
                        className="inline-block align-middle text-sm px-10 py-20"
                        style={{ listStyle: 'outside' }}
                      >
                        <li>Government Approved (LDA, LESCO, WASA)</li>
                        <li>Gated community</li>
                        <li>Quality Development</li>
                        <li>Underground electrification</li>
                        <li>Community centre</li>
                        <li>Sports complex</li>
                        <li>Pak Turk School Dream Gardens campus</li>
                        <li>Pakistan Navy Bahria University Campus</li>
                        <li>Mosque</li>
                        <li>Commercial Market</li>
                        <li>
                          Dedicated commercial area with marts and Banks (MCB
                          Islamic)
                        </li>
                        <li>Medical clinic</li>
                        <li>Corporate office space</li>
                        <li>
                          Easy access to some of the premier educational
                          institutions (COMSATS, BNU, UOL, UCP)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={openTab === 5 ? 'block' : 'hidden'} id="link5">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-full lg:w-3/4">
                      <img
                        src="https://www.izharmonnoo.com/wp-content/uploads/2018/04/State-of-art-Jamia-Mosque_edited.jpg"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="w-full md:w-full lg:w-1/4 text-white"
                      style={{ background: '#d1ac6d' }}
                    >
                      <ul
                        className="inline-block align-middle text-sm px-10 py-20"
                        style={{ listStyle: 'outside' }}
                      >
                        <li>Government Approved (LDA, LESCO, WASA)</li>
                        <li>Gated community</li>
                        <li>Quality Development</li>
                        <li>Underground electrification</li>
                        <li>Community centre</li>
                        <li>Sports complex</li>
                        <li>Pak Turk School Dream Gardens campus</li>
                        <li>Pakistan Navy Bahria University Campus</li>
                        <li>Mosque</li>
                        <li>Commercial Market</li>
                        <li>
                          Dedicated commercial area with marts and Banks (MCB
                          Islamic)
                        </li>
                        <li>Medical clinic</li>
                        <li>Corporate office space</li>
                        <li>
                          Easy access to some of the premier educational
                          institutions (COMSATS, BNU, UOL, UCP)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;

import React from 'react';

const Footer: React.FC = () => {
  return (
      <footer className="bg-black py-6">
          <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div className="text-white lg:w-3/5">
                      <div className="text-base">Be the first to know</div>
                      <div className=" text-sm">
                          Sign up for updates from mettā muse.
                      </div>
                      <div className="flex items-center gap-2 my-11">
                          <input
                              type="email"
                              id="first_name"
                              className="bg-gray-50 border w-80 border-gray-300 text-gray-900 text-sm py-2 px-5 "
                              placeholder="Enter Your Email "
                          />
                          <button
                              type="button"
                              className="py-2.5 px-5  text-sm font-medium text-gray-300  border border-gray-600"
                          >
                              Subscribe
                          </button>
                      </div>
                  </div>
                  <div className="text-white lg:w-2/5">
                      <h5 className="text-lg font-bold my-2">Contact Us</h5>
                      <a className="text-sm font-thin my-1" href="">
                          +44 221 133 5366
                      </a>
                      <h1 className="text-sm font-thin my-1">
                          customer@mettamuse.com
                      </h1>
                      <h1 className="text-base font-bold my-1">Currency</h1>
                      <div className="flex gap-2 my-1">
                          <img src="/assets/US.png" />
                          <span>USD</span>
                      </div>
                      <p className="text-xs my-2">
                          Transactions will be completed in Euros and a currency
                          reference is available on hover.
                      </p>
                  </div>
              </div>
              <hr className="text-white my-5" />
              <div className="flex flex-col gap-x-4 lg:flex-row lg:justify-between">
                  <div className="grid lg:grid-cols-2 lg:gap-x-6 text-white lg:w-3/5">
                      <div className=''>
                          <h5 className="  text-xl font-bold my-1 border-b-white border-b-[1px] lg:border-none">mettā muse</h5>
                          <ul className="hidden lg:block text-white">
                              <li>
                                  <a href="#" className="text-xs">
                                      About Us
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="text-xs">
                                      Stories
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="text-xs">
                                      Artisans
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="text-xs">
                                      Boutiques
                                  </a>
                              </li>
                              <li>
                                  <a href="#" className="text-xs">
                                      Countact Us
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div className=''>
                      <h5 className="text-xl font-bold my-1 border-b-white border-b-[1px] lg:border-none">Quick Links</h5>
                      <ul className=" hidden lg:block text-white">
                          
                          <li>
                              <a href="/orders" className="text-xs">
                                  Orders & Shipping
                              </a>
                          </li>
                          <li>
                              <a href="/join" className="text-xs">
                                  Join/Login as a Seller
                              </a>
                          </li>
                          <li>
                              <a href="/payment" className="text-xs">
                                  Payment & Pricing
                              </a>
                          </li>
                          <li>
                              <a href="/returns" className="text-xs">
                                  Return & Refunds
                              </a>
                          </li>
                          <li>
                              <a href="/privacy" className="text-xs">
                                  Privacy Policy
                              </a>
                          </li>
                      </ul>
                      </div>
                  </div>
                  <div className="flex flex-col justify-start text-white lg:w-2/5">
                      <div className='text-xl font-bold my-1 border-b-white border-b-[1px] lg:border-none'>FOLLOW US</div>
                      <div className="flex gap-2 my-5">
                          <a href="#">
                              <img className="" src="/assets/insta.svg" />
                          </a>
                          <a href="#">
                              <img className="" src="/assets/linkdin.svg" />
                          </a>
                      </div>
                      <div>mettā muse ACCEPTES</div>
                      <div className="flex gap-2 my-2">
                          <a href="">
                              <img src="/assets/googlepay.svg" />
                          </a>
                          <a href="">
                              <img src="/assets/master.svg" />
                          </a>
                          <a href="">
                              <img src="/assets/paypal.svg" />
                          </a>
                          <a href="">
                              <img src="/assets/amex.svg" />
                          </a>
                          <a href="">
                              <img src="/assets/apple.svg" />
                          </a>
                          <a href="">
                              <img src="/assets/pay.svg" />
                          </a>
                      </div>
                  </div>
              </div>
              <div className="mt-6 text-xs lg:text-center text-white">
                  <p>&copy; 2023 mettamuse. All rights reserved.</p>
              </div>
          </div>
      </footer>
  );
};

export default Footer;

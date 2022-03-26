import React from 'react';

export default function Login() {
  return (
    <section className="main__container py-16">
      <h2 className="header_title">Login your Account</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center ">
        <div className="w-full hidden md:block aspect-square lg:aspect-video">
          <img
            className="cover__img object-contain"
            src="/images/form.jpg"
            alt="Login"
          />
        </div>
        <div>
          <form className="px-10 md:px-2 lg:px-16">
            <input
              className="input_box"
              type="email"
              placeholder="Email*"
              required
            />
            <input
              className="input_box"
              type="password"
              placeholder="Password*"
              required
            />
            <button className="btn w-full rounded-md">Login</button>
            <span className="block text-sm text-red-500 text-center font-medium mt-4 p-2 bg-gray-100 rounded-md">
              Lorem ipsum dolor sit amet.
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}

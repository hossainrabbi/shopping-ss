import React from 'react';

export default function Signup() {
  return (
    <section className="main__container py-16">
      <h2 className="header_title">Create an Account</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center ">
        <div className="w-full hidden md:block aspect-square lg:aspect-video">
          <img
            className="cover__img object-contain"
            src="/images/form.jpg"
            alt="Signup"
          />
        </div>
        <div>
          <form className="px-10 md:px-2 lg:px-16">
            <input
              className="input_box"
              type="text"
              placeholder="Username*"
              required
            />
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
            <input
              className="input_box"
              type="password"
              placeholder="Confirm Password*"
              required
            />
            <div className="flex items-center mb-3">
              <input
                id="agree"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded text-blue-500 focus:ring-blue-500"
                required
              />
              <label
                htmlFor="agree"
                className="ml-3 min-w-0 flex-1 text-gray-500"
              >
                Agree Trams & Conditions
              </label>
            </div>
            <button className="btn w-full rounded-md">Signup</button>
            <span className="block text-sm text-red-500 text-center font-medium mt-4 p-2 bg-gray-100 rounded-md">
              Lorem ipsum dolor sit amet.
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}

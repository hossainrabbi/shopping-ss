import React from 'react';
import LoginForm from '../LoginForm';

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
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

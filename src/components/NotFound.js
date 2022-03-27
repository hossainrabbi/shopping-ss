import React from 'react';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function NotFound({ text, image }) {
  const navigate = useNavigate();

  return (
    <div className="col-span-2 table-fixed w-full">
      <div className="flex justify-center items-center flex-col text-center w-auto relative">
        <h4 className="text-gray-600 text-xl mb-10">{text}</h4>
        <img className="w-6/12" src={image} alt="Empty Cart" />
        <button
          className="btn_icon_round absolute top-5 left-5 h-12 w-12 text-2xl"
          onClick={() => navigate(-1)}
        >
          <IoReturnUpBackOutline />
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function Rating({ rate, onClick, ...rest }) {
  return [...Array(5)].map((_, i) => (
    <span
      className="text-orange-500"
      onClick={(i) => onClick(i)}
      {...rest}
      key={i}
    >
      {Math.round(rate) > i ? <FaStar /> : <FaRegStar />}
    </span>
  ));
}

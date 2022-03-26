import React from 'react';
import { useParams } from 'react-router-dom';

export default function SingleProduct() {
  const { id } = useParams();

  return <div>SingleProduct - {id}</div>;
}

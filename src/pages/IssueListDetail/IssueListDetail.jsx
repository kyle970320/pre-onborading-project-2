import React from 'react';
import { useLocation } from 'react-router-dom';

const IssueListDetail = () => {
  const location = useLocation()
  const el = location.state.el
  console.log(el)
  return (
    <div>
      <p>{el.number}</p>
      <p>{el.title}</p>
      <p>{el.body}</p>
    </div>
  );
};

export default IssueListDetail;
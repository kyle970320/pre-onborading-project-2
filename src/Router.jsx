import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IssueList from './pages/IssueList/IssueList';
import IssueListDetail from './pages/IssueListDetail/IssueListDetail';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<IssueList/>}></Route>
        <Route path='/detail' element={<IssueListDetail/>}></Route>
      </Routes>
    </>
  );
};

export default Router;
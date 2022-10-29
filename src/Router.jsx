import React from 'react';
import { useState } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import IssueList from './pages/IssueList/IssueList';
import IssueListDetail from './pages/IssueListDetail/IssueListDetail';

export const ListContext = React.createContext()
const Router = () => {
  const [stateList, setList] = useState()
  return (
    <ListContext.Provider value={{
      stateList, setList
    }}>
    {/* api 연동 후 suspense 작동 확인 요망 */}
      <Suspense fallback={<h1>로딩중</h1>}>
        <Header />
        <Routes>
          <Route path='/' element={<IssueList />}></Route>
          <Route path='/detail' element={<IssueListDetail />}></Route>
        </Routes>
      </Suspense>
    </ListContext.Provider>
  );
};

export default Router;
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { getAPI } from '../../utils/axios';
import {ListContext} from '../../Router'
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const IssueList = () => {
  const {stateList, setList}=useContext(ListContext)
  const observer = useRef()
  useEffect(()=>{
    const getList =async()=>{
      const listItem = await getAPI(1)
      console.log(listItem)
      setList(listItem)
    }
    getList()
  },[])
  return (
    <div>
      {
        stateList&&(stateList.map((el)=>{
          return(
          <Link key={el.id}>
            <br />
            <span>{el.number}</span>/
            <span>{el.comments}</span>/
            <span>{el.title}</span>/
            <span>{el.user.login}</span>/
            <span>{el.created_at}</span>/
            <br />
          </Link>
        )
        }))
      }
      <p ref={observer}/>
    </div>
  );
};

export default IssueList;
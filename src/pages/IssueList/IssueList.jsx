import React from 'react';
import { useEffect } from 'react';
import { getAPI } from '../../utils/axios';

const IssueList = () => {
  useEffect(()=>{
    const getList =async()=>{
      const listItem = await getAPI()
      console.log(listItem.data)
    }
    getList()
  },[])
  return (
    <div>
      {

      }
    </div>
  );
};

export default IssueList;
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { ListContext } from '../../Router'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import getAxios from '../../utils/useAxios';
import { useState } from 'react';
import Loading from '../../components/Loading';
import { useCallback } from 'react';

const IssueList = () => {
  const { stateList, setList } = useContext(ListContext);
  const [stateNum, setNum] = useState(1);
  const [stateIsLoading, setIsLoading] = useState(false);
  const observeRef = useRef();

  const lockScroll = useCallback( async() => {
    document.body.style.overflow = "hidden";
  }, []);
  
  const unlockScroll = useCallback( async() => {
    document.body.style.overflow = "auto";
  }, []);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      setNum((prev) => prev + 1)
      const getList = async () => {
        setIsLoading(true)
        await lockScroll()
        const listItem = await getAxios(stateNum)
        setList((prev) => [...prev, ...listItem])
        await unlockScroll()
        setIsLoading(false)
      }
      getList()
      window.scrollTo(0, scrollTop - 1)
    }
  }

  useEffect(() => {
    const getList = async () => {
      const listItem = await getAxios(stateNum)
      console.log(listItem)
      setList(listItem)
    }
    getList()
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  return (
    <div>
      {
        stateList && (stateList.map((el) => {
          return (
            <Link to={'/detail'} key={el.number} state={{el}}>
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
      {stateIsLoading && <Loading/>}
      <p ref={observeRef} />
    </div>
  );
};

export default IssueList;
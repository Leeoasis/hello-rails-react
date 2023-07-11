import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMessage } from '../redux/messages/messagesSlice';


function Greeting() {
  const dispatch = useDispatch();
  const { message, isLoading, error } = useSelector((store) => store.message);

  useEffect(() => {
    dispatch(getMessage('Hello'));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row">
             <h1>{message}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Greeting;
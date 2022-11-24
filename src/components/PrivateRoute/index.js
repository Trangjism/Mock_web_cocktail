import React from 'react';
import { Navigate } from 'react-router-dom';
import { checkToken } from '../utils';

export default function PrivateRoute(props) {
  
  if(checkToken()) {
      return (props.element)
    }
    return (<Navigate to='/login' replace/>)
}

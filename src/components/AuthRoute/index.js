import React from 'react';
import { Navigate } from 'react-router-dom';
import { checkToken } from '../utils';

export default function AuthRoute(props) {  
  if(checkToken()) {
    return (<Navigate to='/' replace/>)
  }
  return (props.element)
}

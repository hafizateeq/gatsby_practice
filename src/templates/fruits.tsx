import React from 'react';

export default function Fruits({pageContext}){
  return <>
    <h1>{pageContext.name}</h1>
    <h3>{pageContext.desc}</h3>
  </>
}
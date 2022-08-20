import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const handleClick = () => {};

  return (
    <div className='App'>
      HOME
      <Link to='/game-tank'>params跳转并携带参数</Link>
    </div>
  );
}

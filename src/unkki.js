import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Read from './read/read';
import ReadId from './read/readId';
import ReadLetters from './read/readIdLetters';
import CreateAccount from './create/createAccount';
import CreateRollingpaper from './create/createRollinpaper';
import CreateUnkki from './create/createUnkki';
import SendMessage from './send/sendMessage';

const Unkki = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/read" element={<Read/>}></Route>
      <Route path="/readId" element={<ReadId/>}></Route>
      <Route path="/readLetters" element={<ReadLetters/>}></Route>
      <Route path="/createAccount" element={<CreateAccount/>}></Route>
      <Route path="/createRollingpaper" element={<CreateRollingpaper/>}></Route>
      <Route path="/createUnkki" element={<CreateUnkki/>}></Route>
      <Route path='/sendMessage' element={<SendMessage/>}></Route>
    </Routes>
  );
};

export default Unkki;
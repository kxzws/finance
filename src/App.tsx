import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './views/Main/Main';
import Currency from './views/Currency/Currency';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path=":id" element={<Currency />} />
      </Routes>
    </>
  );
};

export default App;

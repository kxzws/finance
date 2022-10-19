import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './views/Main/Main';
import Currency from './views/Currency/Currency';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/id">
          <Route path=":id" element={<Currency />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from '../routers/ScrollToTop';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import ContactPage from '../components/ContactPage';
import MenuPage from '../components/MenuPage';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer';
import '../App.scss';
import './AppRouter.scss';

function AppRouter({
  activeSection,
  setActiveSection,
  open,
  setOpen,
  register,
  handleSubmit,
  errors,
}) {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar open={open} setOpen={setOpen} />
        <main className='main'>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/menu'>
              <MenuPage
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </Route>
            <Route path='/contact'>
              <ContactPage
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
          <Footer height={4} />
        </main>
      </Router>
    </div>
  );
}

export default AppRouter;

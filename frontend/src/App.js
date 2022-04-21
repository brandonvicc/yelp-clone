import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
// import Footer from "./components/Footer/Footer";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage/HomePage";
import NewBusiness from "./components/NewBusiness/NewBusiness";
import BusinessEditPage from "./components/BusinessEditPage/BusinessEditPage";
import BusinessProfile from "./components/BusinessProfile/BusinessProfile";
import Footer from "./components/Footer/Footer";
import BusinessSearch from "./components/BusinessSearch/BusinessSearch";
// import { Modal } from "./context/Modal";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        <h1>Hello I am a Modal</h1>
        </Modal>
      )} */}
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <Navigation isLoaded={isLoaded} color={""} />
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <Navigation isLoaded={isLoaded} color={"-black"} />
            <SignupFormPage />
          </Route>
          <Route exact path="/businesses">
            <Navigation isLoaded={isLoaded} color={""} />
            <HomePage />
          </Route>
          <Route path="/businesses/new">
            <Navigation isLoaded={isLoaded} color={"-black"} />
            <NewBusiness />
          </Route>
          <Route path="/businesses/:id/edit">
            <Navigation isLoaded={isLoaded} color={"-black"} />
            <BusinessEditPage />
          </Route>
          <Route path="/businesses/results">
            <Navigation isLoaded={isLoaded} color={"-black"} />
            <BusinessSearch />
          </Route>
          <Route exact path="/businesses/:id">
            <Navigation isLoaded={isLoaded} color={"-black"} />
            <BusinessProfile />
          </Route>
          <Route exact path="/">
            <Redirect to={"/businesses"} />
          </Route>
          <Route>
            <Navigation isLoaded={isLoaded} color={"-black"} />
            <h1 className="not-found">404 not found</h1>
            <Footer />
          </Route>
        </Switch>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default App;

import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./components/home/HomePage";
import CoursePage from "./components/courses/CoursesPage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import PageNotFound from "./components/PageNotFound";
import ManageCoursesPage from "./components/courses/ManageCoursesPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App(props) {
  return (
    <div className="App container-fluid w-75 p-3">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Route path="/course/:slug" component={ManageCoursesPage} />
        <Route path="/course" component={ManageCoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Footer />
    </div>
  );
}

export default App;

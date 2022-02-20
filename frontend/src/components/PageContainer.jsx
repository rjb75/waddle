import React, { useEffect } from "react";
import { Pages } from "../pages/PageEnums";
import {
  selectPage,
  selectPrevPage,
  setPage,
} from "../app/reducers/RoutingSlice";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import Settings from "../pages/Settings";
import Peers from "../pages/Peers";
import NavBar from "./NavBar";
import "./PageContainer.scss";

const PageContainer = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const previousPage = useSelector(selectPrevPage); // Not sure if we'll need this, but it's here just in case

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  return (
    <div className="flex-c page-parent">
      <div className="page-container">
        {currentPage === Pages.History && <History />}
        {currentPage === Pages.Dashboard && <Dashboard />}
        {currentPage === Pages.Peers && <Peers />}
        {currentPage === Pages.Settings && <Settings />}
      </div>
      <NavBar />
    </div>
  );
};

export default PageContainer;
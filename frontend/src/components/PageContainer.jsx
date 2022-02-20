import { selectPage, selectPrevPage, setPage } from "../app/reducers/RoutingSlice"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "@reduxjs/toolkit";
import { Dashboard as DashboardPage, History as HistoryPage, Peers as PeersPage, Settings as SettingsPage } from "../pages/PageEnums";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import Settings from "../pages/Settings";
import Peers from "../pages/Peers";


const PageContainer = () => {
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch();
  const previousPage = useSelector(selectPrevPage); // Not sure if we'll need this, but it's here just in case

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  return (<div>
    {currentPage === HistoryPage && <History />}{currentPage === HistoryPage && <DashboardPage />}{currentPage === PeersPage && <Peers />}{currentPage === SettingsPage && <Settings />}


    </div>
  );
}

export default PageContainer;

      // {/* {currentPage === History && <History />}{currentPage === Dashboard && <Dashboard />}{currentPage === Peers && <Peers />}{currentPage === Settings && <Settings />} */}
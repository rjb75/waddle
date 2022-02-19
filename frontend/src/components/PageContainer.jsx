import { selectPage, setPage } from "../app/reducers/RoutingSlice"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "@reduxjs/toolkit";
import { Dashboard, History, Peers, Settings } from "../pages/PageEnums";


const PageContainer = () => {
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch();
  const previousPage = useSelector(previousPage); // Not sure if we'll need this, but it's here just in case

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  return (
    <div>{currentPage === History && <History />}{currentPage === Dashboard && <Dashboard />}{currentPage === Peers && <Peers />}{currentPage === Settings && <Settings />}
    </div>
  );
}

export default PageContainer;
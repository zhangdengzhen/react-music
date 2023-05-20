import React, { memo } from "react";

import { renderRoutes } from "react-router-config";

import routes from "./router/index";

import "./App.css";
import HyAppHeader from "@/components/app-header";
import HyAppFooter from "@/components/app-footer";
import { HashRouter } from "react-router-dom";

import store from "./store/index";
import { Provider } from "react-redux";
import HYappPlayerBar from '@/pages/player/app-player-bar'
import { Suspense } from "react";
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <HyAppHeader />
          <Suspense fallback={<div>加载中....</div>}>
          {renderRoutes(routes)}
          </Suspense>
        
          <HYappPlayerBar/>
          <HyAppFooter />
        </div>
      </HashRouter>
    </Provider>
  );
});

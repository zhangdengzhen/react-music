import React from "react";

import HyDiscover from "@/pages/discover/index";
import HyFriend from "@/pages/friend/index";
import HyMime from "@/pages/mime/index";

import HYRecommend from "@/pages/discover/c-pages/recommend/index";
import HYRanking from "@/pages/discover/c-pages/ranking/index";
import HYSongs from "@/pages/discover/c-pages/songs/index";
import HYDjradio from "@/pages/discover/c-pages/djradio/index";
import HYArtist from "@/pages/discover/c-pages/artist/index";
import HYAlbum from "@/pages/discover/c-pages/album/index";

import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      return <Redirect to="/discover" />;
    },
  },
  {
    path: "/discover",
    component: HyDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: HYRecommend,
      },
      {
        path: "/discover/ranking",
        component: HYRanking,
      },
      {
        path: "/discover/songs",
        component: HYSongs,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: HYDjradio,
      },
      {
        path: "/discover/artist",
        component: HYArtist,
      },
      {
        path: "/discover/album",
        component: HYAlbum,
      },
    ],
  },
  {
    path: "/mine",
    component: HyMime,
  },
  {
    path: "/friend",
    component: HyFriend,
  },
];

export default routes;

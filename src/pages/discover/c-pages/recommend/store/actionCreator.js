import * as actionType from "./constants";

import {
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getTopList,
} from "@/services/recommend";

const changeTopBannerAction = (res) => {
  return {
    type: actionType.CHANGE_TOP_BANNERS,
    topBanners: res.banners,
  };
};
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

const changeHotRecommendAction = (res) => {
  return {
    type: actionType.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result,
  };
};
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommend(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

const changeNewAlbumAction = (res) => {
  return {
    type: actionType.CHANGE_NEW_ALBUM,
    newAlbums: res,
  };
};
export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      console.log(res.weekData);
      dispatch(changeNewAlbumAction(res.weekData));
    });
  };
};

const changeUpRankingAction = (res) => {
  return {
    type: actionType.CHANGE_UP_RANKING,
    upRanking: res.playlist,
  };
};
const changeNewRankingAction = (res) => {
  return {
    type: actionType.CHANGE_NEW_RANKING,
    newRanking: res.playlist,
  };
};
const changeOriginRankingAction = (res) => {
  return {
    type: actionType.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist,
  };
};
export const getTopListAction = (id) => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      // console.log(res)
      //     // 19723756飙升榜，新歌榜，3779629，原创榜2884035
      switch (id) {
        case 19723756:
          dispatch(changeUpRankingAction(res));
          break;
        case 3779629:
          dispatch(changeNewRankingAction(res));
          break;
        case 2884035:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  };
};

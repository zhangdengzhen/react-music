//榜单
import React, { memo, useEffect } from "react";

import { useSelector, shallowEqual } from "react-redux";
import HYThemeHeaderRCM from "@/components/theme-header-recommend";
import HYTopRanking from "@/components/top-ranking";
import { getTopListAction } from "../../store/actionCreator";

import { useDispatch } from "react-redux";
import { RankingWrapper } from "./style";
export default memo(function HYRecommendRanking() {
  
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  //other hooks
  useEffect(() => {
    // 19723756飙升榜，新歌榜，3779629，原创榜2884035
    dispatch(getTopListAction(19723756));
    dispatch(getTopListAction(3779629));
    dispatch(getTopListAction(2884035));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" />
      <div className="tops">
        <HYTopRanking info={upRanking} />
        <HYTopRanking info={newRanking} />
        <HYTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});

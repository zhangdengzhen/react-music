// 热门推荐
import React, { memo } from "react";
import { HotRecommendWrapper } from "./style";
import { getHotRecommendAction } from "../../store/actionCreator";
import HYThemeHeaderRecommend from '@/components/theme-header-recommend'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import HySongsCover  from '@/components/songs-cover'
export default memo(function App() {

  //state

  //redux-hooks
  const {hotRecommends} = useSelector(state=>{
    return {hotRecommends:state.getIn(["recommend","hotRecommends"])}
  },shallowEqual)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getHotRecommendAction(8))
  },[dispatch])
  return (
      <HotRecommendWrapper>
        <HYThemeHeaderRecommend title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}/>

        <div className="recommend-list">
            {
              hotRecommends.map((item,index)=>{
                return <HySongsCover key={item.id} info={item}/>
              })
            }
          </div>
      </HotRecommendWrapper>
  );
});
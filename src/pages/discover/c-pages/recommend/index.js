import React, { memo } from "react";

import HYTopBanner from "./c-cpns/top-banner";
import HYHotRecommend from './c-cpns/hot-recommend'
import HYNewAlbum from './c-cpns/new-album'
import HYRecommendRanking from './c-cpns/recommend-ranking'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
function HYRecommend(props) {
  return (
    <RecommendWrapper>
      <HYTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend/>
          <HYNewAlbum/>
          <HYRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(HYRecommend);

// const {getBanners,topBanners} = props
// useEffect(()=>{
//   getBanners()
// },[getBanners])
// const mapStateToProps = state => {
//   return {
//     // 拿到的是最外层的state,
//     // 合并reducer
// // const cReducer = combineReducers({
// //   recommend: recommendReducer,
// // });
//     topBanners: state.recommend.topBanners
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getBanners: () => {
//       dispatch(getTopBannerAction())
//     }
//   }
// }
// // connect是一个高阶组件
// // connect负责连接React和Redux
// // connect作用是让你把组件和store连接起来，产生一个新的组件（connect 是高阶组件）
// export default connect(mapStateToProps,mapDispatchToProps)(memo(HYRecommend))

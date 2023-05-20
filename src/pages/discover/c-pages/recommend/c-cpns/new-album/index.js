// 新碟上架
import React, { memo, useEffect,useRef } from "react";
import { Carousel } from "antd";

import  HYThemeHeaderRCM from '@/components/theme-header-recommend'
import HYAlbumCover from '@/components/album-cover'

import { getNewAlbumAction } from "../../store/actionCreator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AlbumWrapper } from "./style";
export default memo(function HYNewRanking() {
  const { newAlbums } = useSelector((state) => {
    return {
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    };
  }, shallowEqual);

    // other hooks
    const pageRef = useRef();


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  return (
    <AlbumWrapper>
    <HYThemeHeaderRCM title="新碟上架" />
    <div className="content">
      <button className="arrow arrow-left sprite_02" 
              onClick={e => pageRef.current.prev()}></button>
      <div className="album">
        <Carousel dots={false} ref={pageRef}>
          {
            [0, 1].map(item => {
              return (
                <div key={item} className="page">
                  {
                    newAlbums.slice(item * 5, (item + 1) * 5).map((iten,index) => {
                      return index<9?<HYAlbumCover key={iten.id} 
                                           info={iten} 
                                           size={100} 
                                           width={118} 
                                           bgp="-570px"/>:undefined
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
      </div>
      <button className="arrow arrow-right sprite_02"
              onClick={e => pageRef.current.next()}></button>
    </div>
  </AlbumWrapper>
  );
});

import request from './request'

export function getTopBanner(){
  return request({
    url:"/banner"
  })
}

export function getHotRecommend(limit){
  return request({
    url:"personalized",
    params:{
      limit
    }
  })
}


export function getNewAlbum(offset,limit){
  return request({
    url:"/top/album",
    params:{
      offset,
      limit
    }
  })
}

// 19723756飙升榜，新歌榜，3779629，原创榜2884035
export function getTopList(id){
  return request({
    url:"/playlist/detail",
    params:{
      id
    }
  })
}
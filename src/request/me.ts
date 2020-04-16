import request from '.'

export interface PlaylistParams {
  uid: number
}
export interface LikeListParams {
  uid: number
}

export interface PlayListRes {
  code: number
  more: boolean
  playlist: PlaylistItem[]
}

export interface PlaylistItem {
  coverImgUrl: string
  id: number
}

export interface SongDetailParams {
  ids: number | number[]
}

export const likeList = (params: LikeListParams) => {
  return request({
    url: '/likeList',
    params,
  })
}
export const playlist = (params: PlaylistParams) => {
  return request<PlayListRes>({
    url: '/user/playlist',
    params,
  })
}
export const songDetail = (params: SongDetailParams) => {
  const ids = Array.isArray(params.ids) ? params.ids.join(',') : params.ids
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  })
}

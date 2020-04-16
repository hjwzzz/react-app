import request from '.'

export interface TopPlayListItem {
  name: string
  id: string
  coverImgUrl: string
}

export type GetListRes = {
  playlists: TopPlayListItem[]
}

export const getTopPlayListItem = async () => {
  return await request<GetListRes>({
    url: 'top/playlist',
    params: {
      limit: 5,
      order: 'hot',
    },
  })
}

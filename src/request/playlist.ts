import request from '.'

export interface PlaylistDetailParams {
  id: number
}

export interface PlaylistDetailRes {
  code: number
  playlist: {
    tracks: TracksItem[]
  }
}

export interface TracksItem {
  name: string
  id: string
  alia: string[]
  ar: ArItem[]
}

export interface ArItem {
  name: string
}

export const playlistDetail = (params: PlaylistDetailParams) => {
  return request<PlaylistDetailRes>({
    url: '/playlist/detail',
    params,
  })
}

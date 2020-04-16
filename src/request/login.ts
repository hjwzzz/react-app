import request from '.'

export interface LoginByCellphoneRes {
  code: number
}

export interface SubcountRes {
  code: number
  [key: string]: string | number
}

export const loginByCellphone = async () => {
  return await request<LoginByCellphoneRes>({
    url: 'login/cellphone',
    params: {
      phone: 13726253246,
      password: 'qq408763574',
    },
  })
}
export const subcount = async () => {
  return await request<SubcountRes>({
    url: '/user/subcount',
  })
}

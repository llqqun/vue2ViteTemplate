import axiosRequest from '@/utils/request'

export async function getUserInfo () {
  return await axiosRequest.get('/user/info')
}

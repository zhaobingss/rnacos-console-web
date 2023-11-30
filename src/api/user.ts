import { AxiosResponse } from 'axios';
import request from '../utils/request';
import { IApiResult } from '@/types/base';
let axios = request;

export interface ILoginParam {
  username: string;
  password: string;
}

export interface IResetPasswordParam {
  oldPassword: string;
  newPassword: string;
}

class UserApi {
  login(info: ILoginParam): Promise<AxiosResponse<IApiResult<boolean>>> {
    return axios.request({
      method: 'post',
      url: '/nacos/v1/console/login/login',
      data: info
    });
  }
  logout(): Promise<AxiosResponse<IApiResult<boolean>>> {
    return axios.request({
      method: 'post',
      url: '/nacos/v1/console/login/logout'
    });
  }
  resetPassword(
    info: IResetPasswordParam
  ): Promise<AxiosResponse<IApiResult<boolean>>> {
    return axios.request({
      method: 'post',
      url: '/nacos/v1/console/user/reset_password',
      data: info
    });
  }
}

export const userApi = new UserApi();

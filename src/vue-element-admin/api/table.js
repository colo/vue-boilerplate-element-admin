import request from '@vue-element-admin/utils/request'

export function getList (params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

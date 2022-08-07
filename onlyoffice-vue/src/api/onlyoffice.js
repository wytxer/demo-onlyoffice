import request from './request'

// Onlyoffice 文档转换接口地址
export function onlyofficeConversion (data) {
  return request({
    method: 'post',
    url: process.env.VUE_APP_ONLYOFFICE_CONVERT,
    data
  })
}

// Onlyoffice 文档构建接口地址
export function onlyofficeBuilder (data) {
  return request({
    method: 'post',
    url: process.env.VUE_APP_ONLYOFFICE_DOCBUILDER,
    data
  })
}

// 保存文档信息
export function forceSaveDocumentInfo (data) {
  return request({
    method: 'post',
    url: '/api/v1/document/forceSave',
    data
  })
}

// 获取文档信息
export function queryDocumentInfo (params) {
  return request({
    method: 'get',
    url: '/api/v1/document/documentInfo',
    params
  })
}

// 获取表格信息
export function queryExcelInfo (params) {
  return request({
    method: 'get',
    url: '/api/v1/document/excelInfo',
    params
  })
}

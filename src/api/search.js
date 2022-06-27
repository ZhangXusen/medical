import request from '@/utils/request'
// 搜索
export function searchUser(name) {
  return request({
    url: '/',
    method: 'get',
    params: {
      name
    }
  })
}

//词列表
export function GetWordList() {
  return request({
    url: '/scroll', 
    method: 'get',
  })
}
//词相关信息
export function GetWordInfo(word) {
  return request({
    url: '/paper', //http://127.0.0.1:4523/mock/1014620/scroll
    method: 'get',
    params: {
      word
    }
  })
}
//搜索跳转
export function GetPageList(word) {
  return request({
    url: '/paper',
    method: 'get',
    params: {
      word
    }
  })
}

export function GetAuthor() {
  return request({
    url: '/author',
    method: 'get',
    // params: id
  })
}
export function transactionList(query) {
  return request({
    url: '',
    method: 'get',
    params: query
  })
}
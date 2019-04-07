import Mock from 'mockjs'

import getNewsList from './getNewsList'
let data = [].concat(getNewsList)
data.forEach(function (res) {
  Mock.mock(res.path, /get|post|delete|patch|put/i, res.data)
})

export default Mock

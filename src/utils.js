import axios from 'axios'
import config from './config'

export function objToQueryStr (obj, prefix) {
  var str = []
  var p
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + '[' + p + ']' : p
      var v = obj[p]
      str.push(
        v !== null && typeof v === 'object'
          ? objToQueryStr(v, k)
          : k === 'url' ? v : k + '=' + v
          // : encodeURIComponent(k) + '=' + encodeURIComponent(v)
      )
    }
  }
  return str.join('&')
}

export async function translate (text, fromLang, toLang, transl) {
  // Call example: https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=APIkey&lang=en-ru&text=time
  // 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?'
  let queryObj = {
    url: transl ? config.URL_TRANSL : config.URL_DICT,
    dataType: 'json',
    key: transl ? config.API_KEY_TRANSL : config.API_KEY_DICT,
    text: text,
    lang: fromLang + '-' + toLang
  }
  let queryStr = objToQueryStr(queryObj, '')
  return axios(queryStr).then(result => {
    console.log(result)
    return result
  }).catch(function (request, error, exception) {
    console.log(error + '---' + exception + '---' + request)
    console.log(request)
    return undefined
  })
}

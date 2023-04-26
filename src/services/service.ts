import axios from 'axios'
// import i18next from 'i18next'

const service = () => {
  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
    headers: {
      //   'Accept-Language': i18next.language,
      apikey: process.env.NEXT_PUBLIC_API_KEY,
    },
  })
}

export default service

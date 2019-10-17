import axios from 'axios'

let url = 'https://b2capigateway.yiguo.com/api/'


axios.defaults.baseURL = url;
axios.defaults.timeout = 1000 * 60;

let post = (url,params)=>{
    return axios({
        method: 'post',
        url: url,
        data: {"Head":{"Token":"","LoginToken":"","DeviceId":"8fd2dce4b8f09db95534ca634abbb474",version: "h5",cityCode: "48",districtId: "9f9f048d-eef3-46ae-af74-c57c4dd7e4bf",cityId: "8d56fdb0-dc24-40e9-bb19-4bd543cf5900"},"Body":params},
        headers: {
            'appName': '3000025'
        },
      }).then(res=>res.data)
    
}



export const GetCityList = params => post('/user/Area/GetCityList',params)

export const GetDistrictList = params => post('/user/Area/GetDistrictList',params)

export const GetTemplateComponentInfo = params => post('/home/TemplateComponent/GetTemplateComponentInfo',params)
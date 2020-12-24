import ajax from "./ajax"


const Base_URL = "/api"
    // console.log(ajax)
    // 首页列表
export const getHomeList = (url, params) => {
    return ajax(Base_URL + url, params)
};
// 家用电器页面
// export const getHousehold = (url, params) => {
//         return ajax(Base_URL + url, params)
//     }
// 分类左侧数据
export const getCategoryLeft = () => {
    return ajax(Base_URL + "/catalog/list")
};
// 分类右侧数据
export const getCategoryRight = (cat_id) => {
        return ajax(Base_URL + "/catalog/list/" + cat_id)
    }
    // 分类列表页
export const getcategoryList = (url, params, type) => {
    return ajax(Base_URL + url, params, type)
};
// 详情页
export const getDetail = (url, params, type) => {
    return ajax(Base_URL + url, params, type)
}
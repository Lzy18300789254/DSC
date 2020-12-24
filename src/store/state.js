// 主要储存数据
const state = {
    num: 1,
    categoryLeftDatas: [],
    categoryRightDatas: [],
    ad: "",
    showLoading: false,
    categoryListDatas: [],
    toggleStyle: true,
    detailDatas: {},
    detailDatasInfo: {},
    // 购物车数据
    // 如果本地储存中有carts这个属性，读取本地存储数据转换成json对象，否则将cartdatas等于一个空数组
    cartDatas: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    // 全选
    selectAll: localStorage["selectAll"] ? JSON.parse(localStorage["selectAll"]) : false,
    searchkeywords: localStorage["keywords"] ? JSON.parse(localStorage["keywords"]) : [],
}
export default state
import { MessageBox } from 'mint-ui';
const mutations = {
    changeNum(state) {
        console.log(state);
        state.num++
    },
    ChangeCategoryLeft(state, data) {
        state.categoryLeftDatas = data

    },
    ChangeCategoryRight(state, data) {
        state.categoryRightDatas = data

    },
    changeAd(state, data) {
        state.ad = data
    },
    changeShowLoading(state, data) {
        state.showLoading = data
    },
    changeCategoryList(state, data) {
        state.categoryListDatas = data
    },
    changeToggStyle(state, data) {
        state.toggleStyle = data
    },
    changeDetail(state, data) {
        state.detailDatas = data
    },
    changeDetailInfo(state, data) {
        state.detailDatasInfo = data
    },
    setCartDatas(state, data) {
        if (data) {
            state.cartDatas.unshift(data)
        }
        localStorage.setItem("carts", JSON.stringify(state.cartDatas))
    },
    // 点击购物车列表数据的选择框
    changeSelectStatus(state, data) {

        let selectStatus = state.cartDatas.every(item => {
            return item.isSelect == true
        })
        state.selectAll = selectStatus

        state.cartDatas[data.index] = data.cart
        localStorage.setItem("carts", JSON.stringify(state.cartDatas))
        localStorage.setItem("selectAll", state.selectAll)
    },
    // 点击全选按钮
    changeSelectAllStatus(state) {
        state.selectAll = !state.selectAll
        state.cartDatas.forEach(item => {
            item.isSelect = state.selectAll
        });
        localStorage.setItem("carts", JSON.stringify(state.cartDatas))
        localStorage.setItem("selectAll", state.selectAll)
    },
    // 购物车数量++
    addCart(state, index) {
        state.cartDatas[index].value++
            localStorage.setItem("carts", JSON.stringify(state.cartDatas))
    },
    jianCart(state, index) {
        if (state.cartDatas[index].value == 1) {
            state.cartDatas[index].value = 1
        } else {
            state.cartDatas[index].value--
                localStorage.setItem("carts", JSON.stringify(state.cartDatas))
        }
    },
    deleCart(state, index) {
        MessageBox.confirm('亲，您确定要放弃该宝贝吗?').then(() => {
            console.log("点击了确定按钮")
            state.cartDatas.splice(index, 1)
            localStorage.setItem("carts", JSON.stringify(state.cartDatas))
        }, () => {
            console.log("点击了取消按钮")
        });
        // state.cartDatas.splice(index, 1) 
    },
    // 搜索关键字
    searchkeywords(state, data) {
        if (data) {
            for (var key in state.searchkeywords) {
                if (data == state.searchkeywords[key]) {
                    state.searchkeywords.splice(key, 1)
                }
            }
            state.searchkeywords.unshift(data)
        }

        localStorage.setItem("keywords", JSON.stringify(state.searchkeywords))
    },
    deleKeywords(state) {
        state.searchkeywords = []
        localStorage.setItem("keywords", JSON.stringify(state.searchkeywords))
    }
}
export default mutations
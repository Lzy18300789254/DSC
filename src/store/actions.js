import { getCategoryLeft, getCategoryRight, getcategoryList, getDetail } from "@/api/api"
const actions = {
    async ChangeCategoryLeft(context) {
        let result = await getCategoryLeft() //分类左侧
        console.log(result);
        context.commit("ChangeCategoryLeft", result.data)
    },
    async actChangeCategoryRight(context, cat_id) {
        context.commit("changeShowLoading", false)
        let result = await getCategoryRight(cat_id)

        let resultLeft = await getCategoryLeft()
        console.log(resultLeft.data); //分类右侧
        resultLeft.data.forEach(item => {
            if (item.cat_id == cat_id) {
                context.commit("changeAd", item.touch_catads)
            }
        })

        if (result.status == "success") {
            context.commit("changeShowLoading", true)
            context.commit("ChangeCategoryRight", result.data)
        }
    },
    async actChangeCategoryList(context, params) {
        let resultList = await getcategoryList(params.url, params.params, params.post)
        console.log(resultList);
        context.commit("changeCategoryList", resultList.data)

    },
    async actChangeDetail(context, params) {
        // console.log(params);
        let resultDetail = await getDetail(params.url, params.params, params.type)
        console.log(resultDetail);
        context.commit("changeDetail", resultDetail.data)
        context.commit("changeDetailInfo", resultDetail.data.basic_info)

    }
}
export default actions
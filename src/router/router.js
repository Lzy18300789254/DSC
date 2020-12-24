import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

//解决刷新报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 创建组件
import Home from "../views/Home/Home.vue"
import Category from "../views/Category/Category.vue"
import Find from "../views/Find/Find.vue"
import Cart from "../views/Cart/Cart.vue"
import Mine from "../views/Mine/Mine.vue"



let Categorylist = () =>
    import ("../views/Category/Components/Categorylist.vue")
let Detail = () =>
    import ("../views/Detail/Detail.vue")
let Searchlist = () =>
    import ("../views/Search/Searchlist.vue")
let Login = () =>
    import ("../views/Login/Login.vue")
let Register = () =>
    import ("../views/Login/Register.vue")
    // 配置路由
let routes = [{
            path: "/",
            redirect: "/home"
        }, {
            path: "/home",
            component: Home,
            children: [{
                    path: "/home",
                    redirect: "/home/index"
                }, {
                    path: "index",
                    component: () =>
                        import ("../views/Home/children/Index.vue"),
                }, {
                    path: "household",
                    component: () =>
                        import ("../views/Home/children/Household.vue"),

                }, {
                    path: "personalmakeup",
                    component: () =>
                        import ("../views/Home/children/PersonalMakeup.vue"),

                }, {
                    path: "hometextiles",
                    component: () =>
                        import ("../views/Home/children/HomeTextiles.vue"),

                }, {
                    path: "computer",
                    component: () =>
                        import ("../views/Home/children/Computer.vue"),

                }, {
                    path: "mobilephones",
                    component: () =>
                        import ("../views/Home/children/MobilePhones.vue"),

                }, {
                    path: "shoebag",
                    component: () =>
                        import ("../views/Home/children/ShoeBag.vue"),

                }, {
                    path: "clothing",
                    component: () =>
                        import ("../views/Home/children/Clothing.vue"),

                },

            ]
        }, {
            path: "/category",
            component: Category
        }, {
            path: "/find",
            component: Find
        }, {
            path: "/cart",
            component: Cart
        }, {
            path: "/mine",
            component: Mine
        }, {
            path: "/detail/:gid",
            component: Detail
        }, {
            path: "/search",
            component: () =>
                import ("../views/Search/Search.vue")
        }, {
            path: "/searchlist",
            component: Searchlist

        }, {
            path: "/login",
            component: Login,
        },
        {
            path: "/register",
            component: Register,
        },
        {
            path: "/vuexdemo",
            component: () =>
                import ("../views/VuexDemo/VuexDemo.vue"),

        }, {
            path: "/categorylist/:cid",
            component: Categorylist
        },
    ]
    // 创建一个路由对象
let router = new VueRouter({
    routes
})
export default router
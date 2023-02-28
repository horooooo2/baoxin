import Vue from 'vue'
import Router from 'vue-router'

// 主页面
const home = ()=>import("@/components/tabs/home")
const active = ()=>import("@/components/tabs/active")
const recharge = ()=>import("@/components/tabs/recharge")
const personal = ()=>import("@/components/tabs/personal")

// 登录注册
const login = ()=>import("@/components/login/login")
const register = ()=>import("@/components/login/register")
const registerAge = ()=>import("@/components/login/registerAge")

// 二级页面
const activeDetail = ()=>import("@/components/activeDetail")
const rechargeBank = ()=>import("@/components/rechargeBank")

// 个人中心
const message = ()=>import("@/components/center/message")
const messageDetail = ()=>import("@/components/center/messageDetail")
const userInfo = ()=>import("@/components/center/userInfo")
const review = ()=>import("@/components/center/review")
const exchange = ()=>import("@/components/center/exchange")
const bettingRecord = ()=>import("@/components/center/bettingRecord")
const integralRecord = ()=>import("@/components/center/integralRecord")
const userBackwater = ()=>import("@/components/center/userBackwater")
const moneyAward = ()=>import("@/components/center/moneyAward")
const popularize = ()=>import("@/components/center/popularize")
const popularizeRecord = ()=>import("@/components/center/popularizeRecord")
const server = ()=>import("@/components/center/server")
const serverDetail = ()=>import("@/components/center/serverDetail")
const about = ()=>import("@/components/center/about")
const aboutDetail = ()=>import("@/components/center/aboutDetail")

//设置
const setList = ()=>import("@/components/set/setList")
const bindBank = ()=>import("@/components/set/bindBank")
const bindBankDetail = ()=>import("@/components/set/bindBankDetail")
const bindUSDT = ()=>import("@/components/set/bindUSDT")
const bindGoPay = ()=>import("@/components/set/bindGoPay")
const BindGoPayDetail = ()=>import("@/components/set/BindGoPayDetail")
const updatePassword = ()=>import("@/components/set/updatePassword")

// 资金明细
const moneyList = ()=>import("@/components/moneyDetail/moneyList")
const rechargeDetail = ()=>import("@/components/moneyDetail/rechargeDetail")
const exchangeDetail = ()=>import("@/components/moneyDetail/exchangeDetail")
const transactionDetail = ()=>import("@/components/moneyDetail/transactionDetail")
const redDetail = ()=>import("@/components/moneyDetail/redDetail")
const withdrawalDetail = ()=>import("@/components/moneyDetail/withdrawalDetail")

//余额宝
const yueBao = ()=>import("@/components/yueBao/yueBao")
const transferOut = ()=>import("@/components/yueBao/transferOut")
const transferIn = ()=>import("@/components/yueBao/transferIn")
const yueBaoDetail = ()=>import("@/components/yueBao/yueBaoDetail")
const calculator = ()=>import("@/components/yueBao/calculator")

Vue.use(Router)

export default new Router({
    routes: [
        //主页面 keepAlive 页面缓存 requireAuth登录状态
        {path: '/', name:'home', component:home, meta: {keepAlive: false,requireAuth:false},}, // 首页
        {path: '/active', name:'active', component:active, meta: {keepAlive: false,requireAuth:false},}, // 优惠活动
        {path: '/recharge', name:'recharge', component:recharge, meta: {keepAlive: false,requireAuth:false},}, // 充值
        {path: '/personal', name:'personal', component:personal, meta: {keepAlive: false,requireAuth:false},}, // 个人中心

        ///登录相关页面
        {path: '/login/login', name:'login', component:login, meta: {keepAlive: false,requireAuth:false},}, // 登录
        {path: '/login/register', name:'register', component:register, meta: {keepAlive: false,requireAuth:false},}, // 注册
        {path: '/login/registerAge', name:'registerAge', component:registerAge, meta: {keepAlive: false,requireAuth:false},}, // 代理注册

        //二级页面
        {path: '/activeDetail', name:'activeDetail', component:activeDetail, meta: {keepAlive: false,requireAuth:false},}, // 优惠活动详情
        {path: '/rechargeBank', name:'rechargeBank', component:rechargeBank, meta: {keepAlive: false,requireAuth:false},}, // 充值详情

        //个人中心
        {path: '/center/message', name:'message', component:message, meta: {keepAlive: false,requireAuth:false},}, // 公告消息
        {path: '/center/messageDetail', name:'messageDetail', component:messageDetail, meta: {keepAlive: false,requireAuth:false},}, // 消息详情
        {path: '/center/userInfo', name:'userInfo', component:userInfo, meta: {keepAlive: false,requireAuth:false},}, // 个人信息
        {path: '/center/review', name:'review', component:review, meta: {keepAlive: false,requireAuth:false},}, // 提款稽核
        {path: '/center/exchange', name:'exchange', component:exchange, meta: {keepAlive: false,requireAuth:false},}, // 额度转换
        {path: '/center/bettingRecord', name:'bettingRecord', component:bettingRecord, meta: {keepAlive: false,requireAuth:false},}, // 投注记录
        {path: '/center/integralRecord', name:'integralRecord', component:integralRecord, meta: {keepAlive: false,requireAuth:false},}, // 积分记录
        {path: '/center/userBackwater', name:'userBackwater', component:userBackwater, meta: {keepAlive: false,requireAuth:false},}, // 会员返水
        {path: '/center/moneyAward', name:'moneyAward', component:moneyAward, meta: {keepAlive: false,requireAuth:false},}, // 奖金
        {path: '/center/popularize', name:'popularize', component:popularize, meta: {keepAlive: false,requireAuth:false},}, // 推广赚钱
        {path: '/center/popularizeRecord', name:'popularizeRecord', component:popularizeRecord, meta: {keepAlive: false,requireAuth:false},}, // 推广赚钱
        {path: '/center/server', name:'server', component:server, meta: {keepAlive: false,requireAuth:false},}, // 在线客服
        {path: '/center/serverDetail', name:'serverDetail', component:serverDetail, meta: {keepAlive: false,requireAuth:false},}, // 在线客服
        {path: '/center/about', name:'about', component:about, meta: {keepAlive: false,requireAuth:false},}, // 关于我们
        {path: '/center/aboutDetail', name:'aboutDetail', component:aboutDetail, meta: {keepAlive: false,requireAuth:false},}, // 关于我们

        //资金明细
        {path: '/moneyDetail/moneyList', name:'moneyList', component:moneyList, meta: {keepAlive: false,requireAuth:false},}, // 资金明细列表
        {path: '/moneyDetail/rechargeDetail', name:'rechargeDetail', component:rechargeDetail, meta: {keepAlive: false,requireAuth:false},}, // 充值明细
        {path: '/moneyDetail/exchangeDetail', name:'exchangeDetail', component:exchangeDetail, meta: {keepAlive: false,requireAuth:false},}, // 额度转换明细
        {path: '/moneyDetail/transactionDetail', name:'transactionDetail', component:transactionDetail, meta: {keepAlive: false,requireAuth:false},}, // 交易明细
        {path: '/moneyDetail/redDetail', name:'redDetail', component:redDetail, meta: {keepAlive: false,requireAuth:false},}, // 红包明细
        {path: '/moneyDetail/withdrawalDetail', name:'withdrawalDetail', component:withdrawalDetail, meta: {keepAlive: false,requireAuth:false},}, // 提现明细

        //设置
        {path: '/set/setList', name:'setList', component:setList, meta: {keepAlive: false,requireAuth:false},}, // 设置
        {path: '/set/bindBank', name:'bindBank', component:bindBank, meta: {keepAlive: false,requireAuth:false},}, // 绑定银行卡
        {path: '/set/bindBankDetail', name:'bindBankDetail', component:bindBankDetail, meta: {keepAlive: false,requireAuth:false},}, // 绑定银行卡
        {path: '/set/bindUSDT', name:'bindUSDT', component:bindUSDT, meta: {keepAlive: false,requireAuth:false},}, // 绑定USDT
        {path: '/set/bindGoPay', name:'bindGoPay', component:bindGoPay, meta: {keepAlive: false,requireAuth:false},}, // 绑定GoPay
        {path: '/set/BindGoPayDetail', name:'BindGoPayDetail', component:BindGoPayDetail, meta: {keepAlive: false,requireAuth:false},}, // 绑定GoPay
        {path: '/set/updatePassword', name:'updatePassword', component:updatePassword, meta: {keepAlive: false,requireAuth:false},}, // 修改密码

        // 余额宝
        {path: '/yueBao/yueBao', name:'yueBao', component:yueBao, meta: {keepAlive: false,requireAuth:false},}, // 余额宝
        {path: '/yueBao/transferOut', name:'transferOut', component:transferOut, meta: {keepAlive: false,requireAuth:false},}, // 转出
        {path: '/yueBao/transferIn', name:'transferIn', component:transferIn, meta: {keepAlive: false,requireAuth:false},}, // 转入
        {path: '/yueBao/yueBaoDetail', name:'yueBaoDetail', component:yueBaoDetail, meta: {keepAlive: false,requireAuth:false},}, // 明细
        {path: '/yueBao/calculator', name:'calculator', component:calculator, meta: {keepAlive: false,requireAuth:false},}, // 计算器
    ]
})


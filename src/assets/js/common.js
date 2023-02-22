import $ from  'jquery'
import store from '../../store/store.js'
import router from '../../router/router'
import { Toast } from 'vant';

// 验证返回结果
let validateIs = true
export default{
    loading:function (onOff) {
        if(onOff){
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
            });
        } else {
            Toast.clear()
        }
    },
    // 登录状态管理
    isLoginSession:function (is) {
        if(is){
            store.commit('loginOn')
        } else {
            store.commit('loginOff')
            router.push({path:'/login',query:{fullPath:router.history.current.fullPath}})
        }

    },
    validateCodex:function(data){
        Toast.clear()
        // 用于跳出循环
        let circleIs = true
        let xss = /xss/i , script = /script/i , blank = /\s/
        if(xss.test(data) || script.test(data)){
            Toast('包含敏感字符，请重新输入!');
            validateIs = false
            circleIs = false
        } else if(blank.test(data)){
            Toast('请勿包含空格等!');
            validateIs = false
            circleIs = false
        } else if(!data){
            Toast('请输入内容!');
            validateIs = false
            circleIs = false
        } else {
            validateIs = true
        }
        return circleIs
    },
    // 前端非空,xss,特殊字符验证
    dataSafeValidate:function (type,data) {
        let that = this
        switch (type) {
            case 1:
                //字符串类型
                if(!that.validateCodex(data)) return false
                break;
            case 2:
                // 数组类型
                $.each(data,function (index,item) {
                    if(!that.validateCodex(item)) return false
                });
                break;
            default:
                console.log('暂无可执行语句')
        }
        return validateIs
    },
    // 解析毫秒
    getMyDate:function (str,status=1) {
        let oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth()+1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oTime = oYear +'-'+ this.getzf(oMonth) +'-'+ this.getzf(oDay) +' '+ this.getzf(oHour) +':'+ this.getzf(oMin) +':'+this.getzf(oSen);//最后拼接时间
            if(status === 2){
                oTime = oYear +'-'+ this.getzf(oMonth) +'-'+ this.getzf(oDay)
            }
        return oTime ;
    },
    getzf:function (num) {
        if(parseInt(num) < 10){
            num = '0'+num;
        }
        return num;
    },
    Format:function (time=new Date(),fmt='yyyyMMdd'){
        time = new Date(time)
        var o = {
            "M+": time.getMonth() + 1, //月份
            "d+": time.getDate(), //日
            "h+": time.getHours(), //小时
            "m+": time.getMinutes(), //分
            "s+": time.getSeconds(), //秒
            "q+": Math.floor((time.getMonth() + 3) / 3), //季度
            "S": time.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
    toPath:function (path,query){
        if(location.hash == ('#'+path)) return
        router.push({path:path,query:query})
    },
}

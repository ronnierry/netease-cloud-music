const date = {
    format(date, fmt) {
        return format(date, fmt);
    },
    beforeNow(date) {
        return beforeNow(date);
    }
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length)
}

/**
 * 处理时间格式化
 * @param date date类型时间
 * @param fmt 格式化模板，例如：'yyyy-MM-dd hh:mm:ss'
 * @returns 格式化后的时间，例如：'yyyy-MM-dd hh:mm:ss'
 */
function format(date, fmt) {
    date = new Date(date)
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'H+': date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
        'l+': date.getHours() > 12 ? 'pm' : 'am',
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
        }
    }
    return fmt
}

/**
 * 几天前，几月前格式的时间
 * @param date date类型时间
 * @returns {1天前，2个月前等等}
 */
function beforeNow(date) {
    //获取js 时间戳
    var time = new Date().getTime();
    time = parseInt((time - date) / 1000);
    //存储转换值
    var s;
    if (time < 60 * 1) {//十分钟内
        return '刚刚';
    } else if ((time < 60 * 60) && (time >= 60 * 1)) {
        //超过一分钟少于1小时
        s = Math.floor(time / 60);
        return s + "分钟前";
    } else if ((time < 60 * 60 * 24) && (time >= 60 * 60)) {
        //超过1小时少于24小时
        s = Math.floor(time / 60 / 60);
        return s + "小时前";
    } else if ((time < 60 * 60 * 24 * 7) && (time >= 60 * 60 * 24)) {
        //超过1天少于7天内
        s = Math.floor(time / 60 / 60 / 24);
        return s + "天前";
    } else if ((time < 60 * 60 * 24 * 30) && (time >= 60 * 60 * 24 * 7)) {
        //超过7天少于30天内
        s = Math.floor(time / 60 / 60 / 24 / 7);
        return s + "周前";
    } else if ((time < 60 * 60 * 24 * 365) && (time >= 60 * 60 * 24 * 30)) {
        //超过30天少于365天内
        s = Math.floor(time / 60 / 60 / 24 / 30);
        return s + "个月前";
    } else {
        //超过365天，即超过一年
        return format(date, 'yyyy/MM/dd hh:mm:ss');
    }
}


let dateFormat = (value, format = 'yyyy-MM-dd') => {
    if (value != undefined) {
        return date.format(value, format);
    } else {
        return "------";
    }
};


//几天前，几月前  格式化
let dateBeforeNow = (value) => {
    if (value != undefined) {
        let date = new Date(value);
        return date.beforeNow(date);
    } else {
        return "";
    }
};

let numFormat = (value)=> {
    var param = {};
    var k = 10000,
        sizes = ['', '万', '亿', '万亿'],
        i;
        if(value < k){
            param.value =value
            param.unit=''
        }else{
            i = Math.floor(Math.log(value) / Math.log(k)); 
            param.value = ((value / Math.pow(k, i))).toFixed(0);
            param.unit = sizes[i];
        }
    return param.value +   param.unit;
}



export { dateFormat, dateBeforeNow, numFormat }
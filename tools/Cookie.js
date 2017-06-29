layui.define(function (exports) {
    var obj = {
      /*
      * 设置cookie
      * name  cookie名
      * value cookie值
      * Hours 失效时间(小时)
      */
        setCookie: function (name, value, Hours) {
            var d = new Date();
            var offset = 8;
            var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            var nd = utc + (3600000 * offset);
            var exp = new Date(nd);
            exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=360doc.com;"
        },
        /*
     * 获取cookie
     * name  cookie名
     */
        getCookie: function (name) {
            var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
            if (arr != null) return unescape(arr[2]);
            return null
        }
    }
    exports('Cookie', obj);
});
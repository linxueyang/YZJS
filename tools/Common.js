layui.define('layer', function (exports) {
    var layer = layui.layer;
    var lxyv = "v1.1";
    var obj = {
       /*版本 */
        version: function () {
            layer.msg(lxyv);
        },
        /**
       * 获取URL参数
       * name参数名
       */
        getQueryString: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        },
        /**
      * ajax封装
      * url 发送请求的地址
      * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
      * async 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
      *       注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
      * type 请求方式("POST" 或 "GET")， 默认为 "GET"
      * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
      * loadflag 是否开启加载等待,默认不开启，true开启
      * successfn 成功回调函数
      * errorfn 失败回调函数
      */
        yzajax: function (url, data, async, type, dataType, loadflag,successfn, errorfn) {
            var taskindex = null;
            async = (async == null || async == "" || typeof (async) == "undefined") ? "true" : async;
            type = (type == null || type == "" || typeof (type) == "undefined") ? "post" : type;
            dataType = (dataType == null || dataType == "" || typeof (dataType) == "undefined") ? "json" : dataType;
            loadflag = (loadflag == null || loadflag == "" || typeof (loadflag) == "undefined") ?  false : loadflag;
            data = (data == null || data == "" || typeof (data) == "undefined") ? { "date": new Date().getTime() } : data;
            $.ajax({
                type: type,
                async: async,
                data: data,
                url: url,
                dataType: dataType,
                beforeSend: function (request) {
                    if (loadflag ==true) {
                        taskindex = layer.load(2, { shade: 0.3 });
                    }
                },
                success: function (d) {
                    if (loadflag == true) {
                        layer.close(taskindex);
                    }
                    successfn(d);
                },
                error: function (e) {
                    errorfn(e);
                }
            })
        },

    }

    exports('common', obj);
});
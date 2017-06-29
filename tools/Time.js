layui.define(function (exports) {
    var obj = {
        /**
        *从后台获取的时间  2016-03-21 18:58:49.0需要进行处理
        *"-"在IE或火狐里是不兼容的，统一替换为"/"
        *获取的时间后面会有".0" ，
        *格式化后台传入的时间
        **/
        stringtoDade:function (str){
	        return new Date(str.replace('/-/g','/').replace('.0',''));
        }
      }
    exports('Time', obj);
});
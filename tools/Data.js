﻿layui.define(function (exports) {
    var obj = {
        /**
 * 生成36位GUID
 * @returns 
 */
        uuid:function () {
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return (v.toString(16)).toUpperCase();
    });
}
    }
    exports('Data', obj);
});
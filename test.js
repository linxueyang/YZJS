layui.config({
    version: new Date().getTime()
  , debug: false 
  , base: 'tools/'
});

layui.use(['common', 'CharString'], function () {
    var common = layui.common;
    var cs = layui.CharString;
    cs.lxyalter();
    common.version();

});



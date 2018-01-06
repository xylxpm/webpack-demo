if(0){
    require.ensure(['./subPageA'],function(){},'subPageA')
}else{
    require.ensure(['./subPageB'],function(){},'subPageB')
}

//import * as _ from 'lodash';
//这里修改代码，实现代码分割
require.ensure(['lodash'],function(){
    "use strict";
    var _ = requier('lodash');  /* 上面一个lodash只是加载，这里才会执行。上面那个可以不写，require.ensure([],function(){})  这样再在里面写本行，也是可以的*/
    _.join([1,2],'23');

},'vendor')

export default 'pageA';

import * as _ from 'lodash';

var page = "subPageA";

if(page==="subPageA"){
    //require.ensure([],function(){
    //    var _subPageA = require('./subPageA');
    //},'subPageA')

    import(/* webpackChunkName:'subPageA' */'./subPageA').then(function(subPageA){ /* 这是es6的魔法注释，指定chunkname */
        console.log(subPageA);
    })

}else if(page==="subPageB"){
    //require.ensure(['./subPageB'],function(){
    //    var _subPageB = require('./subPageB');
    //},'subPageB')

import(/* webpackChunkName:'subPageB' */'./subPageB').then(function(subPageB){
        console.log(subPageB);
    })
}



export default 'pageA';

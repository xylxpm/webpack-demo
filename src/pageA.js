//import * as _ from 'lodash';

var page = "subPageA";

if(page==="subPageA"){
    //require.ensure([],function(){
    //    var _subPageA = require('./subPageA');
    //},'subPageA')

    import(/* webpackChunkName:'subPageA' */'./subPageA').then(function(subPageA){ /* ����es6��ħ��ע�ͣ�ָ��chunkname */
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


require.ensure([],function(){
    var _ = require('lodash');
    _.join([1,2],'23');
},'vendor')

export default 'pageA';

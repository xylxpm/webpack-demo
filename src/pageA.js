if(0){
    require.ensure(['./subPageA'],function(){},'subPageA')
}else{
    require.ensure(['./subPageB'],function(){},'subPageB')
}

//import * as _ from 'lodash';
//�����޸Ĵ��룬ʵ�ִ���ָ�
require.ensure(['lodash'],function(){
    "use strict";
    var _ = requier('lodash');  /* ����һ��lodashֻ�Ǽ��أ�����Ż�ִ�С������Ǹ����Բ�д��require.ensure([],function(){})  ������������д���У�Ҳ�ǿ��Ե�*/
    _.join([1,2],'23');

},'vendor')

export default 'pageA';

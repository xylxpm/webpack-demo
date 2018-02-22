import base from './css/base.less';
import {a} from './common/util'



var app = document.getElementById('app');
app.innerHTML = '<div class="' + base.box + '"></div>';

console.log(a());
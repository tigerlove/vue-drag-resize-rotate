var Vue  = require('vue')
var vm = new Vue({
	el:'body',
	components:{
		'vue-dragable':require('../src/vue-drag-resize-rotate.vue')
	}
})

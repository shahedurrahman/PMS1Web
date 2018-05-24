/// <reference path="../lib/vuejs-2.5.16/vue.js" />

Vue.component('list-data', {
    template:
		'<div class="row"> \
			<div class="col">{{item.name}}</div> \
			<div class="col">{{item.price}}</div> \
			<div class="col"></div> \
		</div>'
});

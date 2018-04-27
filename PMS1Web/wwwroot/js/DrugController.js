/// <reference path="../lib/vuejs-2.5.16/vue.js" />

//http://192.168.10.139:7301/api/drug/get/1


var drugController = new Vue({
    el: '#DrugController',
    data: {
        Model: {
            DrugName: null,
            DrugPrice: null
        }
    },
    methods: {
        SaveDrug: function ()
        {
            $.post('http://192.168.10.139:7301/api/drug/create',
                drugController.Model)
                .then(
                    function success(a, b, c, d)
                    {

                    },
                    function error(a,b,c,d)
                    {

                    }
            );
        }
    }
});
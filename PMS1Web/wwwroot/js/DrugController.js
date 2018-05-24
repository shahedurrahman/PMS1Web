/// <reference path="../lib/vuejs-2.5.16/vue.js" />

//http://192.168.10.139:7301/api/drug/get/1


var drugController = new Vue({
    el: '#DrugController',
	data: function ()
	{
		return {
			Drug: {
				Name: null,
				Price: null
			},
			DrugList: { }
		}
	},
	beforeCreate: function ()
	{
		var self = this;

		$.ajax({
			url: 'https://localhost:44336/api/drug/getall',
			method: 'GET',
			contentType: 'application/json'
		})
		.then(
			function success(data, textStatus, jqXHR)
			{
				self.DrugList = data;

				console.log('Status: ' + textStatus + ' ||  Response Data :' + data);
			},
			function error(jqXHR, textStatus, errorThrown)
			{
				console.warn('Status: ' + textStatus + ' ||  Response Data :' + errorThrown);
			});
	},
    methods: {
        saveDrug: function ()
        {
            $.ajax({
                url: 'https://localhost:44336/api/drug/create',
                method: 'POST',
                data: JSON.stringify(drugController.Drug),
                contentType: 'application/json'
            })
                .then(function success(data, textStatus, jqXHR)
                {
                    console.log('Status: ' + textStatus + ' ||  Response Data :' + data);
                },
                function error(jqXHR, textStatus, errorThrown)
                {
                    console.warn('Status: ' + textStatus + ' ||  Response Data :' + errorThrown);
                });
		},
		editDrug: function ()
		{
			$.ajax({
				url: 'https://localhost:44336/api/drug/update',
				method: 'POST',
				data: JSON.stringify(drugController.Drug),
				contentType: 'application/json'
			})
				.then(function success(data, textStatus, jqXHR)
				{
					console.log('Status: ' + textStatus + ' ||  Response Data :' + data);
				},
					function error(jqXHR, textStatus, errorThrown)
					{
						console.warn('Status: ' + textStatus + ' ||  Response Data :' + errorThrown);
					});
		}
    }
});
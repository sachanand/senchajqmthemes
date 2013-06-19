Ext.define('test5.model.Topic',{
	
	extend:'Ext.data.Model',
	
	config: {
		fields:['firstName','categories']
	
	},
	
	fullName: function(){
		var d = this.data,
		names = [
			d.firstName
		];
		return names.join(" ");
	}

});
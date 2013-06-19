Ext.define('test5.store.Categories',{
	
	extend:'Ext.data.Store',
	
	config: {
		model:'test5.model.Category',
		sorters:'name'
	}


});
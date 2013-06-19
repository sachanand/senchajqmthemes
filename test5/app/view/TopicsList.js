Ext.define('test5.view.TopicsList',{
	extend: 'Ext.List',
	xtype: 'TopicsList',
	config:{
		Title: 'SimpliLearn',
		grouped:true,
		indexBar: true,
		itemTpl: '{firstName}',
		store:'Topics',	
		onItemDisclosure: true
		
	}

});
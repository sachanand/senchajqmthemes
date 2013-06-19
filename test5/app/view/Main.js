Ext.define('test5.view.Main', {
    extend: 'Ext.navigation.View',
	xtype:'mainpanel',
	
	requires: [
		'test5.view.TopicsList',
		'test5.view.TopicsDetail'
	],

    config: {

        items: [{
			xtype:'TopicsList'	
			
        }],
		listeners: {
			back: function(){
				Ext.getStore('Categories').removeAll();
			}
		
		}
    }
});

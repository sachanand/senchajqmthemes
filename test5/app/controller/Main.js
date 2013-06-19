Ext.define('test5.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
			main: 'mainpanel',
			catl: 'categorylabel'
		},
		control: {
			'TopicsList': {
				disclose: 'showDetail'
			}
		}
    },
	
	showDetail: function(list,record) {
	
			var rec= record.data.categories.length;	 
			Ext.getStore("Categories").add({name:'Select Category',questions:[]});
			for(var i=0; i<rec;i++){
				Ext.getStore("Categories").add(record.data.categories[i]);
			}
		var topics = Ext.create("test5.view.TopicsDetail",{
			title: record.fullName()
		})
		
		topics.getComponent(0).setHtml(record.fullName());
		this.getMain().push(topics);
	}
});

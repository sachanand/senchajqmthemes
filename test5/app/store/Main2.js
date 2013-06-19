Ext.define('test5.controller.Main2', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
			main: 'mainpanel'
		},
		control: {
		
			}
		}
    },
	
	showDetail: function(list,record) {
	
		//Ext.getStore("Categories").add(record.data.categories[0]);
         
			var rec= record.data.categories.length;	 
			for(var i=0; i<rec;i++){
				Ext.getStore("Categories").add(record.data.categories[i]);
				
			}
		
		this.getMain().push({
			xtype: 'list',
			title: record.fullName(),
			store: 'Categories'

		});
	}
});

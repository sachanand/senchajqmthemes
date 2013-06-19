Ext.define('test5.store.Topics',{
	
	extend:'Ext.data.Store',
	
	config: {
		model:'test5.model.Topic',
		sorters:'firstName',
		grouper: function(record){
			return record.get('firstName')[0];
		},
		
		data: [	
            {
				firstName: 'Animals',
				categories:[{
					name:'happy',
					questions:[{
						text:'question 1',
						ans:'ans1'
					},{
						text:'question 2',
						ans:'ans1'
					},{
						text:'question 3',
						ans:'ans1'
					},{
						text:'question 4',
						ans:'ans1'
					}]
				},{
					name:'happy2',
					questions:[{
						text:'question 1',
						ans:'ans1'
					}]
				},{
					name:'happy3',
					questions:[{
						text:'question 1',
						ans:'ans1'
					}]
				}]
			},{
				firstName: 'Battle',
				categories:[{
					name:'happy',
					questions:[{
						text:'question 1',
						ans:'ans1'
					}]
				}]
			},{
				firstName: 'Cars',
				categories:[{
					name:'happy',
					questions:[{
						text:'question 1',
						ans:'ans1'
					}]
				}]
			}
		]
	}


});
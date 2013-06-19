Ext.define('test5.view.TopicsDetail', {
    extend: 'Ext.Panel',
	xtype:'TopicsDetail',
	requires: [
        'Ext.TitleBar'
    ],
	
    config: {
		layout:'vbox',
		style:'background-color:white; border-radius:10px;', 
		margin:30,
		items:[{
				xtype: 'component',
				flex: 1,
				styleHtmlContent:'true',
				style:'font-weight:bold; font-size:40px',
				id: 'categorylabel'
			},{
				xtype: 'selectfield',
				store: 'Categories',
				displayField: 'name',
				valueField: 'name',
				ui:'round',
				style:'border-style:solid; border-radius:10px; border-color:#999999;',
				margin:30,
				listeners:{
					change:function(selector, newValue, oldValue, eOpts){
						console.log(oldValue);
						if(oldValue != "Select Category"){
							Ext.getCmp("flashmain").removeAll(true,true);
						}
						var record = Ext.getStore('Categories').findRecord('name',newValue);
						var ques_len = record.data.questions.length;
						for( var i=0 ; i<ques_len; i++){
							var fcard = Ext.create('test5.view.FlashCard');
							Ext.getCmp("flashmain").add(fcard);
							fcard.getComponent(0).getComponent(0).setHtml('<div><span>'+record.data.questions[i].text+'</span></div>')
							fcard.getComponent(0).getComponent(1).setHtml('<div><span>'+record.data.questions[i].ans+'</span></div>')
						}
					}
				}
		},{
			xtype:'flashmain',
			id:'flashmain',
			flex: 4
		}]
    }
});
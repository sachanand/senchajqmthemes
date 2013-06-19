Ext.define('test5.view.FlashCard', {
    extend: 'Ext.Container',
    xtype: 'flashcard',
    requires: [
        'Ext.Img',
    ],
    config: {
    	layout:'fit',
        defaults:{
            style:'background:transparent;font-family:"oreganoregular";'
        },
        items: [{
        	xtype:'panel',
        	layout:'card',
        	height:'230px',
        	style:'position:absolute;top:50%;margin-top:-115px;',
        	defaults:{
            	style:'background:transparent;font-family:"oreganoregular";font-size:25px',
            	styleHtmlContent:'true'
        	},
        	items:[{
	            xtype: 'img',
	        	html:"<div><span>What is the biggest dinosaur to exist?</span></div>",
	        	styleHtmlCls:'question',
	        	listeners:{
	        		tap:function(element,event,eOpts){
	        			element.getParent().animateActiveItem(1,'flip');
	        		}
	        	}
	        },{
	        	xtype:'img',
	        	html:"<div><span>Seismosaur</span></div>",
	        	styleHtmlCls:'answer',
	        	listeners:{
	        		tap:function(element,event,eOpts){
	        			element.getParent().animateActiveItem(0,'flip');
	        		}
	        	}
	        }]
        }]
    }
});
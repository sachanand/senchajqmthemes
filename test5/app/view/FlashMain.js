Ext.define('test5.view.FlashMain', {
    extend: 'Ext.Panel',
    xtype: 'flashmain',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'test5.view.FlashCard'
    ],
	
    config: {
        layout:'card',
        defaults:{
            style:'background:transparent'
        },
        items:[],
        listeners: {
            initialize: function(c) {
                this.element.on({
                    swipe: function(e, node, options) {
                        c.getActiveItem().getComponent(0).setActiveItem(0);
                        if(e.direction == "left") {
                            var index = c.innerIndexOf(c.getActiveItem());
                            index--;
                            console.log(index);
                            if(index>=0){
                                c.animateActiveItem(index,{type:'cover',direction:'left'});
                                return;
                            }
                            c.animateActiveItem(c.innerItems.length-1,{type:'cover',direction:'left'});
                        } else {
                            var index = c.innerIndexOf(c.getActiveItem());
                            index++;
                            console.log(index);
                            if(index<c.innerItems.length)
                                c.animateActiveItem(index,{type:'reveal',direction:'right'});
                            else
                                c.animateActiveItem(0,{type:'reveal',direction:'right'});
                        }
                    }
                });
            }
        }
    }
});

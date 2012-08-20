Ext.define("Bongo.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
            	title: 'People',
            	iconCls: '',
            	
            	items: {
            		docked: 'top',
            		xtype: 'titlebar',
            		title: 'People'
            	}
            	
            },
            {
            	title: 'Places',
            	iconCls: '',
            	
            	items: {
            		docked: 'top',
            		xtype: 'titlebar',
            		title: 'Places'
            	}
            	
            },
            {
                title: 'Bongo',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
            	title: 'Deals',
            	iconCls: '',
            	
            	items: {
            		docked: 'top',
            		xtype: 'titlebar',
            		title: 'Deals'
            	}
            },
            {
            	title: 'Calendar',
            	iconCls: '',
            	
            	items: {
            		docked: 'top',
            		xtype: 'titlebar',
            		title: 'Calendar'
            	}
            }
        ]
    }
});

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
            	iconCls: 'user',
            	
            	items: {
            		docked: 'top',
            		xtype: 'titlebar',
            		title: 'People',
            		items: [
            			{
							align: 'left',
							iconCls: 'settings',
            				iconMask: true
            			},
            			{
							align: 'right',
							iconCls: 'search',
            				iconMask: true
            			}
            		]
            	}
            },
            {
            	title: 'Places',
            	iconCls: 'maps',
            	
            	items: {
            		docked: 'top',
            		xtype: 'titlebar',
            		title: 'Places',
            		items: [
            			{
							align: 'left',
							iconCls: 'settings',
            				iconMask: true
            			},
            			{
							align: 'right',
							iconCls: 'search',
            				iconMask: true
            			}
            		]
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
            	iconCls: 'star',
            	
            	items: {
            		docked: 'top',
            		xtype: 'titlebar',
            		title: 'Deals'
            	}
            },
            {
            	title: 'Calendar',
            	iconCls: 'time',
            	
            	items: {
            		docked: 'top',
            		xtype: 'titlebar',
            		title: 'Calendar'
            	}
            }
        ]
    }
});

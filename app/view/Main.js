Ext.define("Bongo.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Bongo.view.deals.Nav',
        'Bongo.view.calendar.Tabs',
        'Bongo.view.people.Nav',
        'Bongo.view.places.Nav',
        'Bongo.view.bongo.Nav'
    ],
    
    config: {
        tabBar: {
        	layout: {
        		pack: 'center',
        		align: 'center',
        	},
        	docked: 'bottom',
			ui: 'light'
        },
        defaults: {
        	scrollable: false
        },

        items: [
            {
            	title: 'People',
            	iconCls: 'team',
            	xtype: 'peoplenav'
            },
            {
            	title: 'Places',
            	iconCls: 'maps',
            	xtype: 'placesnav'
            },
            {
                title: 'Bongo',
                iconCls: 'home',
				xtype: 'bongonav'
            },
            {
            	title: 'Deals',
            	iconCls: 'star',
            	xtype: 'deals-nav'
            },
            {
            	title: 'Calendar',
            	iconCls: 'time',
            	
            	items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						title: 'Calendar',
						items: [
							{
								align: 'left',
								iconCls: 'settings',
								iconMask: true
							},
							{
								align: 'right',
								text: 'Filter'
							}
						]
					},
					{
						xtype: 'calendartabs'
					}
				]
            }
        ]
    }
});
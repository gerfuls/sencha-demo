Ext.define("Bongo.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Bongo.view.deals.Nav',
        'Bongo.view.calendar.Nav',
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
            	xtype: 'calendar-nav'
            }
        ]
    }
});
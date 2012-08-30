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
            	iconCls: 'team1',
            	xtype: 'people-nav'
            },
            {
            	title: 'Places',
            	iconCls: 'compass2',
            	xtype: 'places-nav'
            },
            {
                title: 'Bongo',
                iconCls: 'locate4',
				xtype: 'bongo-nav'
            },
            {
            	title: 'Deals',
            	iconCls: 'tags',
            	xtype: 'deals-nav'
            },
            {
            	title: 'Calendar',
            	iconCls: 'calendar',
            	xtype: 'calendar-nav'
            }
        ]
    }
});
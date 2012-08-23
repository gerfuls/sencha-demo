Ext.define("Bongo.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Bongo.view.DealsTabs',
        'Bongo.view.CalendarTabs',
        'Bongo.view.PeopleNav',
        'Bongo.view.PlacesNav',
        'Bongo.view.BongoNav'
    ],
    
    config: {
        tabBar: {
        	layout: {
        		pack: 'center',
        		align: 'center',
        	},
        	docked: 'bottom'
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
            	
            	items: [
            		{
						docked: 'top',
						xtype: 'titlebar',
						title: 'Deals',
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
            		},
            		{
            			xtype: 'dealstabs'
            		}
            	]
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
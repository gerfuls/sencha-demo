Ext.define("Bongo.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Bongo.view.PeopleTabs',
        'Bongo.view.PeopleList',
        'Bongo.view.PlacesTabs',
        'Bongo.view.DealsTabs',
        'Bongo.view.CalendarTabs'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
            	title: 'People',
            	iconCls: 'team',
            	
            	items: [
            		{
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
						],
					},
					{
						xtype: 'peopletabs'
					}
				]
            },
            {
            	title: 'Places',
            	iconCls: 'maps',
            	
            	items: [
					// {
// 						docked: 'top',
// 						xtype: 'titlebar',
// 						title: 'Places',
// 						items: [
// 							{
// 								align: 'left',
// 								iconCls: 'settings',
// 								iconMask: true
// 							},
// 							{
// 								align: 'right',
// 								iconCls: 'search',
// 								iconMask: true
// 							}
// 						]
// 					},
// 					{
// 						xtype: 'placestabs'
// 					},
					{
						xtype: 'map',
    					useCurrentLocation: true
    				}
				]
            },
            {
                title: 'Bongo',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Bongo',
                },

                html: [
                    "<center>Welcome to Bongo</center>"
                ].join("")
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

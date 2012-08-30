Ext.define('Bongo.view.people.Updates', {
	extend: 'Ext.List',
	xtype: 'people-updates',
	
	requires: [
		'Bongo.store.Updates',
		'Ext.plugin.PullRefresh',
		'Bongo.view.people.updates.Show'
	],
	
	config: {
		id: 'people-updates',
		itemTpl: [
			'<tpl switch="type">',
				'<tpl case="checkin">',
					'<i class="icon-map-marker"></i>',
				'<tpl case="share-offer">',
					'<i class="icon-tag"></i>',
			'</tpl>',
			' <b>{name}</b>',
			'<tpl switch="type">',
				'<tpl case="checkin">',
			 		' checked in at <b>{place}</b>',
				'<tpl case="share-offer">',
					' shared offer: <b>{offer}</b>',
				'<tpl default>',
				 	' did something.',
			'</tpl>'
		],
		store: 'Updates',
		plugins: [
			{
				xclass: 'Ext.plugin.PullRefresh',
				pullRefreshText: 'Pull to Refresh'
			}
		]
	}
});
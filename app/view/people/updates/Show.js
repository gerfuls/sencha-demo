Ext.define('Bongo.view.people.updates.Show', {
	extend: 'Ext.Container',
	xtype: 'people-update-show',
	
	config: {
        title: 'Update',
        layout: 'vbox',

        items: [
            {
                id: 'content',
                tpl: [
            		 '<br><center>',
            		 '<b>{name}</b>',
					 '<tpl switch="type">',
						'<tpl case="checkin">',
							' checked in at <b>{place}</b>',
						'<tpl case="share-offer">',
							' shared offer: <b>{offer}</b>',
						'<tpl default>',
							' did something.',
					 '</tpl></center>'
				].join('')
            }
        ],

        record: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
        }
    }
});
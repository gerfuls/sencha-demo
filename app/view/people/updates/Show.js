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
                    '<div class="top">',
                        '<div class="name">{name} <span>{type}</span></div>',
                    '</div>'
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
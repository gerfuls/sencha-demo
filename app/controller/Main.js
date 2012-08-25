Ext.define('Bongo.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
    	refs: {
            peopleNav: 'people-nav',
            peopleUpdates: 'people-updates',
            showUpdate: 'people-updates-show'
        },
    	
        control: {
            peopleUpdates: {
            	itemtap: 'onUpdateSelect'
            }
        }

    },

    onUpdateSelect: function(list, index, node, record) {

        if (!this.showUpdate) {
            this.showUpdate = Ext.create('Bongo.view.people.updates.Show');
        }

        // Bind the record onto the show contact view
        this.showUpdate.setRecord(record);

        // Push the show contact view into the navigation view
        this.getPeopleNav().push(this.showUpdate);
    },
});
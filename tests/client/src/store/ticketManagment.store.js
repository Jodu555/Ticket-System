export default {
    state: {
        currentViewed: { ID: -1 },
        openedTabs: [
            {
                ID: 1245,
                categorie: 'Fehler',
                userTags: ['Wichtig'],
                internalTags: ['Eher Wichtig']
            },
            {
                ID: 4897,
                categorie: 'Feature Request',
                userTags: ['Eher Wichtig'],
                internalTags: ['Nicht Wichtig']
            }
        ]
    },
    mutations: {
        setCurrentViewedID(state, ID) {
            if (ID == -1) {
                state.currentViewed = { ID: -1 };
            } else {
                state.currentViewed = state.openedTabs.find(v => v.ID == ID);
            }
        },
        setOpenedTabs(state, openedTabs) {
            state.openedTabs = openedTabs;
        },
    },
    actions: {

    },
    namespaced: true,
}
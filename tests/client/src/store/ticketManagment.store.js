export default {
    state: {
        currentViewed: { ID: -1 },
        openedTabs: [
            1245,
            4897
        ],
        loadedTickets: [
            {
                ID: 1245,
                categorie: 'Fehler',
                userTags: ['Wichtig'],
                internalTags: ['Eher Wichtig'],
                user: {
                    username: 'TRyFlow',
                    email: 'TRyFlow_at@gmail.com'
                },
                created_at: 1608850860066,
                updated_at: 1653213986533
            },
            {
                ID: 1277,
                categorie: 'Bug Report',
                userTags: ['Sehr Wichtig'],
                internalTags: ['Nicht Wichtig'],
                user: {
                    username: 'Jodu555',
                    email: 'Jodu505@gmail.com'
                },
                created_at: 1608850808500,
                updated_at: 1653213986533
            },
            {
                ID: 4897,
                categorie: 'Feature Request',
                userTags: ['Eher Wichtig'],
                internalTags: ['Nicht Wichtig'],
                user: {
                    username: 'Jodu555',
                    email: 'Jodu505@gmail.com'
                },
                created_at: 1608850805555,
                updated_at: 1653213986533
            }
        ]
    },
    mutations: {
        setOpenedTabs(state, openedTabs) {
            state.openedTabs = openedTabs;
        },
        setCurrentViewedID(state, ID) {
            if (ID == -1) {
                state.currentViewed = { ID: -1 };
            } else {
                state.currentViewed = state.loadedTickets.find(v => v.ID == ID);
            }
        },
        closeCurrentViewedID(state, ID) {
            state.openedTabs = state.openedTabs.filter(v => v !== ID)
            if (state.currentViewed.ID == ID) {
                state.currentViewed = { ID: -1 };
            }
        },
    },
    actions: {
        openTicket({ commit, state }, { event, ID }) {
            if (state.openedTabs.includes(ID)) {
                //Ticket already opened!
                if (!event.ctrlKey)
                    commit('setCurrentViewedID', ID)
                return;
            }
            commit('setOpenedTabs', [...state.openedTabs, ID]);

            if (!event.ctrlKey) {
                commit('setCurrentViewedID', ID)
            }
        },
    },
    namespaced: true,
}
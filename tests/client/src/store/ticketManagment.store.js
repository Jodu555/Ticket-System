export default {
    state: {
        currentViewed: { ID: -1 },
        openedTabs: [
        ],
        loadedTickets: [
            // {
            //     ID: 1245,
            //     title: 'Image isnt loading',
            //     category: 'Fehler',
            //     userTags: ['Wichtig'],
            //     internalTags: ['Eher Wichtig'],
            //     creator: 45868,
            //     participiants: [45868, 7579],
            //     created_at: 1608850860066,
            //     updated_at: 1653213986533
            // },
            {
                ID: 1245,
                title: 'Image isnt loading',
                category: 'Fehler',
                userTags: ['Wichtig'],
                internalTags: ['Eher Wichtig'],
                user: {
                    ID: 7579,
                    username: 'TRyFlow',
                    email: 'TRyFlow_at@gmail.com'
                },
                created_at: 1608850860066,
                updated_at: 1653213986533
            },
            {
                ID: 1277,
                title: 'The title wont show correctly for me',
                category: 'Bug Report',
                userTags: ['Sehr Wichtig'],
                internalTags: ['Nicht Wichtig'],
                user: {
                    ID: 4589,
                    username: 'Jodu555',
                    email: 'Jodu505@gmail.com'
                },
                created_at: 1608850808500,
                updated_at: 1653213986533
            },
            {
                ID: 4897,
                title: 'Implement an notification system',
                category: 'Feature Request',
                userTags: ['Eher Wichtig'],
                internalTags: ['Nicht Wichtig'],
                user: {
                    ID: 4589,
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
            //TODO: Think about lazy loading the user data

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
        async loadUsersData({ commit, state }, ID) {

        },
        async loadTicketList({ commit, state }) {
            //TODO: This should load all tickets but without any user data
            // => The User data shall be loaded when a ticket get clicked on
        },
    },
    namespaced: true,
}
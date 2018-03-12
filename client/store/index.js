import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex);

const navigation = [
    {
        id: 'AZ',
        name: 'sort-down',
        url: 'patient-list',
        title: 'Patienten-Liste',
        group: false,
        filter: {status: 1},
    },
    {
        id: 'group',
        name: 'tickets',
        url: 'patient-list',
        title: 'Patienten-Liste',
        group: true
    },
    {
        id: 'archive',
        name: 'delete',
        title: 'Liste der archivierten Patienten',
        group: false,
        filter: {status: 0}
    }
];

const state = {
    navigation: navigation,
    collections: [
        {id: 1, label: 'Vier Testfall', group: 'Mende, Manuela', status: 1},
        {id: 2, label: 'Beata Brysz', group: 'Ittri, Mulham', status: 1},
        {id: 3, label: 'Claus Nolte', group: 'Ittri, Mulham', status: 1},
        {id: 4, label: 'Andrea Kuckuck', group: 'Mende, Manuela', status: 1},
        {id: 5, label: 'Frank Weigel', group: 'Mende, Manuela', status: 1},
        {id: 6, label: 'Marie Meier', group: 'Ittri, Mulham', status: 0},
        {id: 7, label: 'Heike Otto', group: 'Ittri, Mulham', status: 0}
    ],
    activeTab: navigation[0],
    filterText: '',
    showFilterBox: true
}

const mutations = {
    setActiveTab(state, value) {

        state.filterText = '';

        if (_.eq(state.activeTab.name, value.name)) {
            state.showFilterBox = !state.showFilterBox;
        }

        Vue.localStorage.set('activeTab', JSON.stringify(value));
        state.activeTab = value;
    },
    updateFilter(state, value) {
        state.filterText = value;
    }
}

const getters = {
    collections: (state) => {

        let data = state.collections;

        if(state.activeTab.filter){
             data = data.filter(collection => {
                return collection.status === state.activeTab.filter.status;
            })
        }

        if(state.filterText.length){
             data = data.filter(collection => {
                return _(collection).values().join('').toLowerCase().trim().indexOf(state.filterText.toLowerCase()) !== -1;
            })
        }

        // ASC Sort by label
        data = data.sort((a, b) => {
            if (a.label > b.label) {
                return 1
            }
            if (a.label < b.label) {
                return -1
            }
            return 0;
        });

        return data;
    },
};

const actions = {
    filter({commit}, params) {
        commit('setActiveTab', params);
    },
    initActiveTab({commit}) {
        const tab = Vue.localStorage.get('activeTab');
        if (tab) {
            commit('setActiveTab', JSON.parse(tab));
        }
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store

import { ACTION_GROUP_SAVE, ACTION_GROUP_DELETE } from '../actions/groups';

const initialState = {
    listGroups: [
        {
            id: 1,
            name: 'ТА-02'
        },
        {
            id: 2,
            name: 'ТД-02'
        },
        {
            id: 3,
            name: 'ТЗ-02'
        }
    ],
    search: ''
};

export default function (state = initialState, { type, payload}) {
    console.log(payload);
    function updateGroup() {
        return state.listGroups.map(item => item.id === payload.id ? payload : item)
    }
    
    function saveGroup() {
        return [...state.listGroups, payload]
    }
    
    function deleteGroup() {
        console.log(state.listGroups);
        return [...state.listGroups.filter(item => item.id !== payload)];
        
    }
    
    switch (type) {
        case ACTION_GROUP_SAVE:
            return {
                ...state,
                listGroups: payload.id ? updateGroup() : saveGroup()
            };
        case ACTION_GROUP_DELETE:
            return {
                ...state,
                listGroups: deleteGroup()
            };
        default:
            return state;
    }
}


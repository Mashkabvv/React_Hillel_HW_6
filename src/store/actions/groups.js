export const ACTION_GROUP_SAVE = 'ACTION_GROUP_SAVE';
export const ACTION_GROUP_DELETE = 'ACTION_GROUP_DELETE';

export function onGroupSave(group) {
    return {
        type: ACTION_GROUP_SAVE,
        payload: group
    }
}

export function onDelete(id) {
    return {
        type: ACTION_GROUP_DELETE,
        payload: id
    }
}

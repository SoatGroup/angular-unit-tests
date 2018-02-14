
const ACTION = { START: 'START' };

export function someReducer( state = {}, action ) {
    switch (action.type) {
        case ACTION.START:
            return Object.assign({}, state, { start: true });

        default:
            return state;
    }
}

const defaultState = {
    category: "",
    alpha: "",
    singerList: [],
    enterLoading: true,
    listOffset: 0
}

export default(state = defaultState, action) => {
    switch(action.types) {
        default:
            return state;
    }
}
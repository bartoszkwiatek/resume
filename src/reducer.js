const reducer = (state, action) => {
    // action : {type: string, payload: any}
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, nick: action.payload };

        case 'SET_LOADING':
            return { ...state, isLoaded: action.payload };

        case 'SET_ERROR':
            return { ...state, error: action.payload };

        default:
            return { ...state };
    }
};

export { reducer }
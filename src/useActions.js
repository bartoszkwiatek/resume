const useActions = (state, dispatch) => {
    return {
        setIsLoaded: (status) => {
            dispatch({ type: 'SET_LOADING', payload: status });
        },
        setData: (data) => {
            dispatch({ type: 'SET_DATA', payload: data });
        },
        setError: (error) => {
            dispatch({ type: 'SET_ERROR', payload: error });
        }
    };
};

export { useActions }
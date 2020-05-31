
import React, { useContext, useEffect } from "react";
import { StoreContext, StoreProvider } from "./Store";
import { Typography } from "@material-ui/core";


const MainApp = () => {

    const { state, action, dispatch } = useContext(StoreContext);

    const handleLoad = (status) => {
        action.setIsLoaded(status)
    }
    const handleData = (data) => {
        action.setData(data)
    }
    const handleError = (error) => {
        action.setError(error)
    }
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:3333/en")
            .then(response => response.json())
            .then(
                (result) => {
                    handleLoad(true);
                    handleData(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    handleLoad(true);
                    handleError(error);
                }
            )
    }, [])

    if (state.error) {
        return <div>Error: {state.error.message}</div>;
    } else if (!state.isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <React.Fragment>
                <Typography>
                    {/* {console.log(data)}
              {data.map(item => (
                <li key={1}>
                  {state.item.basics.name}
                </li>
              ))} */}
                </Typography>
                {/* <MainInfo /> */}
            </React.Fragment>


        )
    }
}



export { MainApp };
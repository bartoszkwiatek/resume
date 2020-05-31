import React, { useState, useEffect } from 'react';

const FetchData = (url) => {
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    useEffect(() => {
        fetch(url)
            .then((res) => {
                setResponse(res.data)

                setLoading(true)
            })
            .catch(() => {
                setHasError(true)
                setLoading(false)
            })
    }, [url])
    return [response, loading, hasError]
}

export { FetchData }
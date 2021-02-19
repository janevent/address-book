const changeSettings = (nats=[]) => {
    console.log("changing settings", nats)
    return {
        type: 'CHANGE_SETTINGS',
        nats: nats
    }
}

export default changeSettings
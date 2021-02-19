const changeSettings = (newSettings=[]) => {
    console.log("changing settings")
    return {
        type: 'CHANGE_SETTINGS',
        nats: newSettings
    }
}

export default changeSettings
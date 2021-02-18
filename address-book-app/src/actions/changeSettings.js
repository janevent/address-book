const changeSettings = (newSettings=[]) => {
    return {
        type: 'CHANGE_SETTINGS',
        nats: newSettings
    }
}

export default changeSettings
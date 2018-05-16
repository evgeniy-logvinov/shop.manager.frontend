const envConfig = require('config')

function getConfigs(req, res) {
    try {
		let publicConfig = {}
        let privateConfig = {}
      
		publicConfig = envConfig.get('public')
		privateConfig = envConfig.get('private')        
        return { publicConfig, privateConfig }
    } catch (e) {
        console.error('error in getConfigs', e)
        res.status(500).end('500 | Internal Server Error')
    }
}

module.exports = getConfigs

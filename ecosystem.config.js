module.exports = {
	apps: [{
		name: 'shop-manager-frontend',
		script: 'server.js',
		env: {
			'NODE_CONFIG_DIR': 'config/shop_manager',
			'PORT': 9088,
			'NODE_ENV': 'development',
			'SHOP_URL': 'http://localhost:8088',
		},
		env_production: {
			'NODE_CONFIG_DIR': 'config/shop_manager',
			'PORT': 9001,
			'NODE_ENV': 'production',
			'SHOP_URL': 'http://localhost:8088',
		}
	},
	{
		name: 'shop-manager-stories',
		script: 'yarn storybook',
		watch: true,
	}]
}

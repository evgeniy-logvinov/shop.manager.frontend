module.exports = {
	apps: [{
			name: 'shop-manager-frontend',
			script: 'server.js',
			watch: true,
			env: {
				'PORT': 9088,
				'NODE_ENV': 'development',
			},
			env_production: {
				'PORT': 9001,
				'NODE_ENV': 'production',
			}
		},
		{
			name: 'shop-manager-stories',
			script: 'storybook',
			watch: true,
		}
	]
}

import _ from 'lodash'

export const extractData = (response, dataPath) => {
	if (_.get(response, 'data.status', null) !== 'success') {
		throw response
	}
	const path = dataPath ? dataPath : 'data.data'
	return _.get(response, path, null)
}

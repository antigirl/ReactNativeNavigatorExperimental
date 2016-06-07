import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/index';
import IncidentContainer from './incident'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<IncidentContainer />
			</Provider>
		)
	}
}

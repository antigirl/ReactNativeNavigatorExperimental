import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class First extends React.Component {
	render(){
	return (
		<View style={styles.container}>
			<Text style={styles.title}>First Screen</Text>

            <TouchableOpacity style={styles.button} onPress={()=> this.props.actions.navigateJumpToIndex(1)}>
    			<Text style={styles.label}>Go to Second Page</Text>
    		</TouchableOpacity>
		</View>
	)
}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2F9CB2',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		color: '#ffffff',
		marginBottom: 30
	},
    button: {
		padding: 15,
		backgroundColor: '#3C5773',
		alignSelf: 'stretch'
	},
	label: {
		color: '#F4F4E9',
		textAlign: 'center'
	}
});

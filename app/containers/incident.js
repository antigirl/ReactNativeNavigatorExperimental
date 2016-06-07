import React, {PropTypes} from 'react'
import {NavigationExperimental, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {actions} from '../actions';

import First from '../components/first/first'
import Second from '../components/second/second'
import Third from '../components/third/third'




const {AnimatedView: NavigationAnimatedView,
        Card: NavigationCard,
        Header: NavigationHeader
    } = NavigationExperimental;



class Incident extends React.Component {
    constructor(props) {
        super(props);
    }

    _renderScene({scene}, shite) {
        const { navigationState } = scene
        switch (navigationState.key) {
            case 'First':
                return <First actions={this.props.actions}/>
            case 'Second':
                return <Second actions={this.props.actions}/>
            case 'Third':
                return <Third actions={this.props.actions}/>
            case 'Modal':
                return <Modal actions={this.props.actions}/>
        }
    }

    _onNavigate(action, actions) {
        console.log(action);
        if (action.type === 'BackAction'
        ) {
            actions.navigatePop();
        } else {
            actions.navigatePush(action);
        }
    }

    _renderOverlay(props) {
        const currentIndex = props.navigationState.index;
        return <NavigationHeader {...props}
                    renderTitleComponent={props => { return <NavigationHeader.Title>{props.scene.navigationState.title}</NavigationHeader.Title> }}
                    renderRightComponent={props => { return <NavigationHeader.Title>{props.scene.navigationState.title}</NavigationHeader.Title> }}
                        />
    }

    render() {
        const { navigationState, actions } = this.props;
        console.log('new state', navigationState);
        return(
        <NavigationAnimatedView
            navigationState={navigationState}
        	style={styles.outerContainer}
        	onNavigate={ (navigateProps) => this._onNavigate(navigateProps, actions)}
        	renderOverlay={ (overlayProps) => this._renderOverlay(overlayProps) }
        				renderScene={props => (
        					<NavigationCard
        						{...props}
        						style={props.scene.navigationState.key === 'Modal' ?
        									NavigationCard.CardStackStyleInterpolator.forVertical(props) :
        									undefined
        						}
        						panHandlers={props.scene.navigationState.key === 'Modal' ? null : undefined }
        						renderScene={ (renderProps) => this._renderScene(renderProps, actions) }
        						key={props.scene.navigationState.key}
        					/>
        				)}
        			/>
            )
        	}

}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1
    },
    container: {
        flex: 1
    }
});

function mapStateToProps(state) {
    return {navigationState: state.navigationState};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions.navActions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Incident);

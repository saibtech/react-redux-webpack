import React, {Component} from "react";
import {connect} from "react-redux";
import {itemsFetchData} from "../actions/item";

class ItemList extends Component {
	componentDidMount() {
        	this.props.fetchData("https://5abeba9bd4c5900014949ef2.mockapi.io/redux/items");
	}
	render() {
        	if (this.props.hasErrored) {
        		return <p>Sorry! There was an error loading the items</p>;
        	}
        	if (this.props.isLoading) {
        		return <p>Loading…</p>;
        	}
        	return (
        		<ul>
				{this.props.items.map(item => (
        				<li key={item.id}>
        					{item.name}
        				</li>
        			))}
        		</ul>
        	);
	}
}

const mapStateToProps = state => ({
	items: state.items,
	hasErrored: state.itemsHasErrored,
	isLoading: state.itemsIsLoading
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(itemsFetchData(url))
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

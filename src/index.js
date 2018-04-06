import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./stores/ConfigureStore";
import ItemList from "./components/ItemList";
class Welcome extends React.Component {
    state = {
    	name: "Blah"
    }

    handleChange = e => {
    	this.setState({
    		name: e.target.value
    	}
    	)
    }

    render() {
    	const store = configureStore();
    	return (
    		<Provider store={store}>
    			<div style={{textAlign: "center"}}>
    				<h1>Welcome</h1>
    				<p>Hello {this.state.name}</p>
    				<input onChange={this.handleChange} defaultValue={this.state.name}/>
    				<ItemList />
    			</div>
    		</Provider>
    	)
    }
}

ReactDOM.render(<Welcome/>, document.getElementById("app"));

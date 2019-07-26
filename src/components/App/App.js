import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from 'components/Nav/Nav'
import Cart from 'components/Cart/Cart'
import Main from 'components/Main/Main'
import Item from 'components/Item/Item'
import data from 'MOCK_DATA.json'

import './App.css';


// 다수의 컴포넌트를 렌더링하려면, array 형태로 만들면된다. (div로 감쌀필요 X)
class App extends Component {
    constructor() {
        super();
        this.state = {
            products: data
        };
    };

    componentDidMount() {
        console.log(this.state.products)
    };

    render() {
        return(
            <div>
                <Nav />
                <Switch> 
                    <Route exact path="/" component={Main} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
            </div>
        )
    }


// Switch로 컴포넌트를 감싸면 처음 매칭되는 컴포넌트만을 렌더링
// Route 는 임의의 url로 이동할 경우 어떤 컴포넌트로 렌더링할지 정해준다. 

};

export default App

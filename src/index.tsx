import * as React from 'react'
import * as ReactDom from 'react-dom'
// import * as ReactRouterDom from 'react-router-dom'
// const {Route,Link,BrowserRouter} = ReactRouterDom;
import {BrowserRouter,Link,Route} from '../react-router-dom'

function Index(){
    return 'Index'
}

function Test(){
    return 'Test'
}

function Children(){
    return 'Children'
}

function Render(){
    return 'Render'
}

function App(){
    return <BrowserRouter>
        <Link to='/'>Index</Link><br/>
        <Link to='/test'>Test</Link><br/>
        <Link to='/children'>Children</Link><br/>
        <Link to='/render'>Render</Link><br/>
        {/*always show*/}
        <Route exact path='/children' children={Children}/>
        <Route path='/test' component={Test}/>
        <Route path='/render' render={Render}/>
        <Route exact path='/' component={Index}/>
    </BrowserRouter>
}

ReactDom.render(<App/>,document.getElementById('app'))
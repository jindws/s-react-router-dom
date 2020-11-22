import * as React from 'react'
import * as ReactDom from 'react-dom'
// import * as ReactRouterDom from 'react-router-dom'
import {BrowserRouter,Link,Route} from '../react-router-dom'

// const {Route} = ReactRouterDom;

function Index(){
    return <div>
        <Link to='/test'>to test</Link>
    </div>
}

function Test(){
    return <Link to='/'>to index</Link>
}

function App(){
    return <BrowserRouter>
        <Route path='/' component={Index}/>
        <Route path='/test' component={Test}/>
    </BrowserRouter>
}

ReactDom.render(<App/>,document.getElementById('app'))
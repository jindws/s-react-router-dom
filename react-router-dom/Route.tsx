import * as React from 'react'
import Context from './Context'

interface Interface{
    path
    component?
    exact?:boolean
    children?
}
export default function Route(props:Interface){
    return <Context.Consumer>
        {
            value=>{
                const {path,component,children} = props;
                const match = value.location.pathname === path
                return match?React.createElement(component||children,props):null

            }
        }
    </Context.Consumer>
}
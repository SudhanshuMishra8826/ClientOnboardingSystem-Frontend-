import React, { Component } from 'react'

export class Confirm extends Component {

    state={
        res:''
    }

    componentDidMount(){
        const { values } = this.props;
        const url='http://localhost:3001/users';
        var resp=fetch(url,{method: 'POST', body: JSON.stringify(values),headers:{ 'Content-Type': 'application/json' } })
        this.setState({res:JSON.stringify(resp)});
    }

    render() {
        const { values, handleChange, nextStep } = this.props;
        if(this.state.res!==''){
        return (
            <div className="card">
                <h1>Success...</h1>
            </div>
        )}
        else{
                return (
                    <div className="card">
                        <h1>Failure...</h1>
                    </div>
                )
        }
    }
}

export default Confirm

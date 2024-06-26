import React, { Component } from "react";

/*function EvenOdd(props){

    let message;

    if(props.num % 2 === 0){
        message = <p>Number is even</p>;
    }
    else{
        message = <p>Number is odd</p>;
    }
    return (
        <div>
            {message}
        </div>
    );

}*/

class EvenOdd extends Component {

    render(){
        const { num } = this.props;
        let message;

        if(num % 2 === 0){
            message = <p>Number is even</p>;
        }
        else {
            message = <p>Number is odd</p>
        }

        return(
            <div>
                {message}
            </div>
        );
    }
}

export default EvenOdd;
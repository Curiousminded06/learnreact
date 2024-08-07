// const User = (props)=>{
//     return (
//         <div>
//             <h1>
//                 {props.name}
//             </h1>
//             <h4>{props.description}</h4>
//         </div>
//     );
// };
// export default User;

// //props-> properties /parameters-> a data that is being passed from one component to another

// //state-> a set of data that an individual components can hold
import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);

        this.state={
            planet:"earth"
        };
        console.log("hey im from constructor");
        
    }
    componentDidMount(){
        console.log("hey i'm from component did mount");
        this.setState ({planet:"mars"});
        
    }



    render(){
        console.log("hey i'm from render");
        
        return (
                    <div>
                        <h1>
                            {this.props.name}
                        </h1>
                        <h4>{this.props.description}</h4>
                        <h1>{this.state.planet}</h1>
                    </div>
                );
    }
}
export default User;

//components life-cycle methods
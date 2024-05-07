import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    render(){
        const {name,Locatio}=this.props;
        const {count}=this.state;
        return (
            <div classname="user-card">
                <h1>hello {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                     });
                    
                }}> HARSHIT</button>
            <h2>Name{name}</h2>
            <h3>Location:jabalpur </h3>
            <h4>Contact: yashgupta@</h4>
        </div> 
        );
    }
}
export default Userclass;
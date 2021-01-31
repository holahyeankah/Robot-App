
import React, { Component} from 'react';
import Searchbox from '../Containers/Searchbox';
// import { robots } from './robots';
import CardList from '../Containers/CardList'
import './App.css';
import Scroll from '../Containers/Scroll'

class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        console.log('check')
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>this.setState({robots:data}))
        
    }
    onSearchChange=(event)=>{
        console.log(event.target.value)
        this.setState({searchfield:event.target.value})
       
    }
    render(){
        const{robots, searchfield}=this.state
        const filteredRobot=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
       return !robots.length ?
          <h1>Loading...</h1>
     :(
                  
            <div className="tc ma3" >
                <b style={{fontSize:'30px',fontStyle:'fantasy'}}>RoboFriends</b>
                <Searchbox search={this.onSearchChange}/>
                <Scroll>
      <CardList robots={filteredRobot}/>
      </Scroll>
            </div>
     
        
        )
        }
        
        
}
export default App
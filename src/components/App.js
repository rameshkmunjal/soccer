import React from 'react';
import Header from './Header';
import LinksPage from './LinksPage';
import Leaderboard from './Leaderboard';
import Footer from './Footer';
import axios from 'axios';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'4',
            cup:"Euro Championship",
            season:'2020',
            standings:[]
        }
    }
    
    componentDidMount(){
        console.log(this.state.id);
        this.onSubmit(this.state.id);
    }
    onSubmit=(id)=>{
        console.log(id);
        var options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: {season: '2020', league:id},
            headers: {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': 'b38e9707bfmshad86fbce0565521p1f8e4fjsna8527cf16a8f'
              }
        };
    
        axios.request(options).then((response)=> {                
            console.log(response.data.response[0].league.standings[0]);
            const s= response.data.response[0].league.standings[0];
            console.log(s);
            this.setState({standings:s});
        }).catch(function (error) {
                console.error(error);
        }); 

    }

    render(){
        console.log(this.state.standings);
        if(this.state.standings.length > 0){
            return(
                <div className="container">
                     <Header />
                    <LinksPage  clickedLink={this.onSubmit} />
                    <Leaderboard  standings={this.state.standings} />
                    <Footer />
                </div>
               
            )
        } else {
            return(
                <div className="container">
                    <Header />
                    <LinksPage  clickedLink={this.onSubmit} />
                    <h1>Loading........</h1>
                    <Footer />
                </div>
            )
        }
       
    }
}

export default App;
import React from 'react';

class Leaderboard extends React.Component{
    
    renderList(){      
        return this.props.standings.map(standing=>{
          return(
            <tr  key={standing.team.id} onClick={(e)=>this.onSelect(standing.team.id)}>
               <td>{standing.team.name}</td>
               <td className="centered"><img src={standing.team.logo} width="50" height="50" alt="logo" /></td>
               <td className="centered">{standing.rank}</td>               
               <td className="centered">{standing.all.played}</td>
               <td className="centered">{standing.all.win}</td>
               <td className="centered">{standing.all.draw}</td>
               <td className="centered">{standing.all.lose}</td>
            </tr>
          );
        });
      
      };
    
    render(){
        return(
          <div className="table-container">
            <h1>Leaderboard</h1>
            <table>
                <thead>
                        <tr>
                            <th>Name</th>
                            <th>Logo</th>
                            <th className="centered">Rank</th>
                            <th className="centered">Played</th>
                            <th className="centered">Won</th>
                            <th className="centered">Draw</th>
                            <th className="centered">Lost</th>
                          </tr>
                </thead>
                <tbody>
                        {this.renderList()}
                </tbody>
            </table>
          </div>
        ) 
      }  
    }
    
    
    export default Leaderboard;
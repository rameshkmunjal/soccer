import React from 'react';

class LinksPage extends React.Component{
    
    links=[       
        {id:'4', cup:"Euro Championship", season:'2020'}, 
        {id:'39', cup:"Premier League", season:'2020'}, 
    ];

    clickHandler=(cupId)=>{
        console.log(cupId);
        this.props.clickedLink(cupId);
        
    }

    retrievedLinks=this.links.map(link=>{
        return <li key={link.id} onClick={()=>{this.clickHandler(link.id)}}>{link.cup}</li>       
    })
    render(){  
        return(
            <nav className="nav">
                <ul>{this.retrievedLinks}</ul>
            </nav>
        )
    }
}

export default LinksPage;
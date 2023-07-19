


import React from 'react'

export default function Main(){
    
    const[value, setvalue] = React.useState("")
    
    const array = ['7', '8', '9', '*', '4',
    
    '5', '6', '-', '1', '2', '3', '+', '/', '0',
    
    '.', '=' , 'AC'
    
    
    ]
    
    const render = array.map((pre, index) => (
        
        <button key={index} onClick={() => Click(pre)}>{pre}</button>
        
        
    ))
    
    function Click(pre){
        
     //console.log(pre)  
     
     //console.log(pre)
     
     if(pre == "="){
         
        setvalue(eval(value)) 
         
     } else {
     
      setvalue(pe => pe + pre)
      
     }
     
     if(pre == "AC"){
       setvalue("")  
         
     }
        
    }
    
    return(
        
      <div>
      
      <div className="screen">{value}</div>
      
      
      <div className="buttons">
      
      {render}
      
      </div>
      
      
      </div>  
        
        
        
    )
    
    
    
    
    
}







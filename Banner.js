/* import React from 'react';
import '../../../App.css';


  const Banner = () => {
    return (
   <div >
   <div class="container my-4">

          <p class="font-weight-bold">Bootstrap background image responsive</p>
 
             <p><strong>Detailed documentation and more 
               examples (half background image, bakcground video) you can find in our 
               <a href="https://mdbootstrap.com/docs/jquery/css/background-image/"
                target="_blank">Bootstrap background image responsive Docs</a>
                </strong>
                </p>

     </div>
     

<div style={{backgroundImage:URL('https://mdbootstrap.com/img/new/slides/041.jpg'),  height: '400px'}}>

</div> 
 <div 
    class=" text-center bg-image"
    
     style={{backgroundImage:URL("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg"),  height: '400px'}}
  >
    <div    class="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
      <div  class="d-flex justify-content-center align-items-center h-100">
        <div  class="text-white" style={{paddingBottom:'10px',marginTop:'20px',height:'200px'}} >
          <h1 class="mb-3">Heading</h1>
          <h4 class="mb-3">Subheading</h4>
          <a class="btn btn-outline-light btn-lg" href="#!" role="button"
            >Call to action</a
          >
        </div>
      </div>
    </div>
  </div> 
</div>

    )
}
 

 export default Banner; */

 import React from 'react';

//import Paper from 'material-ui/Paper';
import Paper from '@material-ui/core/Paper';
//import IconButton from 'material-ui/IconButton';


//import Image from '../img/main.jpg';  Import using relative path
import Image from '../../../assets/img/banner.jpg'

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height:'300px',
        opacity: '0.8'
    }
  
};

export default class Banner extends React.Component{
    render(){
        return(
          
            <Paper style={styles.paperContainer}>
               
               <div style={{paddingTop:'10%',paddingLeft:'20px', color:'white',fontFamily:'Arial,Helvetica,sans-serif'}}>
                 <b> If You Had Have An Exposure Of Covid-19 <br>
                 </br>Please Call Right Away For An Immediate Disinfection
               </b>
               </div>
                </Paper>


        )
    }
}
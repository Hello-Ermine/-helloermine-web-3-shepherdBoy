import styled from  'styled-components' ;
import './eight.css'
import sheeprun from './sheeprun.png';


const Sheeprun = styled.img`
position: absolute;
width: 193px;
height: 252px;
left: 45%;
top: 38%;

<<<<<<< HEAD
:hover{
=======
&:hover sheeprun{
>>>>>>> c3f069b9842708afd616eb5577a7185f4626a87e
filter: drop-shadow(1px 8px 54px #FDC401);
cursor: pointer;

}
`

function Pageeight(){
    return(
        <div className="contain">
    
             <Sheeprun src={sheeprun}  />
            
        </div>
      
 
    )
 
 
 }
 export default Pageeight
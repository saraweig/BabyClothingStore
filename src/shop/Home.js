import img from '../images/website/homepage1.png'
import img2 from '../images/website/homepage2.png'
import img3 from '../images/website/homepage3.png'
export default function Home(){
    return(
        <>
<img src={img} style={{"width":"100%", "height":"700px","display":"block","margin-left": "auto", "margin-right": "auto","marginTop":"100px"}}></img>
<img src={img2} style={{"width":"100%"}}></img>
<img src={img3} style={{"width":"100%"}}></img>
        </>
        
    )
}
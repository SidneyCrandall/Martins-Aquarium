import {tipList} from "./tips.js";
import { getTipsList } from "./tipsData.js";



    export const atipList = () =>{
    
    const alltipsLocations = getTipsList();
    const DOMLocation = document.querySelector("#tipsList");   
    let tipsHTMLRepresentations = "";    


 
    for (const onetipofMany of alltipsLocations){
 
      tipsHTMLRepresentations += tipList(onetipofMany);
        }
     DOMLocation.innerHTML += tipsHTMLRepresentations;
}


/*const tipListContainer = document.querySelector("#tipsList");
export const atipList = () =>{
for (const tip of tipsListCollection) {
    const tipsasHTML = `
    <div>
        <ul>
            <li> ${tipListObj.tip}</li>
        </ul>
    </div>
    `
   tipListContainer.innerHTML=tipsasHTML
}};*/
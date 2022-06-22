import {basketContentDistributor} from "./basketContentDistributor.js";

export class gameHandler
{
    constructor(langHandler){
    
        this.langHandler = langHandler;
    }
    
    StartGame(){
        
        basketContentDistributor.InitListener();
        
        const event = new CustomEvent("boo");

        dispatchEvent(event);
        
        console.log(event);
     
        basketContentDistributor.CreateGameBaskets();
        
        console.log(basketContentDistributor.baskets);
        
        const $test = new basketContentDistributor();
        
        console.log($test.baskets);
    }
}
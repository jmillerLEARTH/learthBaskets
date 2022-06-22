import {basketContentDistributor} from "./basketContentDistributor.js";

export class gameHandler
{
    constructor(langHandler){
    
        this.langHandler = langHandler;
    }
    
    StartGame(){
     
        basketContentDistributor.ParseContent("test");
    }
}
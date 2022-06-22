// the most decoupled interaction should probably be between the content/phrases and the div that gets put in the bucket
// so that you can put strings or images or whatever in the bucket
// basketContentDistributor will be an intermediary class between basketContentGatherer and basketContentDisplay

class basket
{
    constructor(){
        
        this.content = [];
    }
}

export class basketContentDistributor
{
    
    static InitListener(){
        console.log("fire");
        document.addEventListener("boo",function(){console.log("test")});
    }
    
    static CreateGameBaskets(num = 2){ //called at gameStart/resets only
        
        this.baskets = [];
        
        const $basket0 = new basket();
        
        const $basket1 = new basket();
        
        this.baskets.push($basket0);
        
        this.baskets.push($basket1);
    }
    
    static DistributeContentFlow(content){ //called by basketContentGatherer
        
        let $parsedContent = this._ParseContent(content);
        
        let $div = this._ConvertContentToDiv($parsedContent);
        
        for(const bskt of this.baskets){
            
            this._DistributeContent(bskt,$div);
        }
    }
    
    static _ParseContent(content){
        
        // if you need to do anything to a piece of content that will go here
        
        const $returnContent = content;
        
        return $returnContent
        
    }
    
    static _ConvertContentToDiv(content){
        
        const $div = document.createElement("div");
        
        $div.innerHTML = "test";
        
        return $div
        
    }
    
    static _DistributeContent(basket,div){
        
        basket.content.push(div);
    }
}
// the most decoupled interaction should probably be between the content/phrases and the div that gets put in the bucket
// so that you can put strings or images or whatever in the bucket
// basketContentDistributor will be an intermediary class between basketContentGatherer and basketContentDisplay

export class basketContentDistributor
{
    
    basketContentDistributor.baskets = [];
    
    static ParseContent(content){ //called by basketContentGatherer
        
        console.log(content);
    }
    
    static _ConvertContentToDiv(content){
        
        
    }
    
    static DistributeContent(basket){
        
        
    }
}
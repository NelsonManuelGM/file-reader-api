
/**
 * *This validation could be as long as it could be
 * service to validate required information
 * @param {request} http request 
 */
export default function docPathValidator(req){
    //document and keywords required
    if(!req.file){
        return "document required!"        
    }
    //keywords required
    else if(!req.body.keywords){
        return "keywords required!"        
    }
    else{
        return false
    }  
    
}
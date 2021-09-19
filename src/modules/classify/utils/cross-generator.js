/**
 * Generate character to cross out document
 * @param {Number} length 
 * @param {String | undefined} generator 
 */
export default function crossOutGenerator(length, generator){
    let generated=''
    for(let i=0;i<length; i++){
        if(generator){
            generated += generator;
        }else{
            generated += process.env.CROSSOUTCHAR;
        }
    }
    return generated;
}
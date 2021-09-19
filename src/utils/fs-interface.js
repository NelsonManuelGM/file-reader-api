import fs from 'fs/promises';


function WriteFile(path, data) {
    try{
        fs.writeFile(path, data, { encoding: 'utf8' })
        console.log('file already written!')
    }
    catch(error){
        console.log(error)
    }
}

function ReadFile(path) {
    try{
        const data = fs.readFile(path, { encoding: 'utf8' })
        return data    
    }
    catch(error){
        console.log(error)
    }
}

export {
    WriteFile,
    ReadFile
};

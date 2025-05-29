var fs = require('fs');
fs.writeFile('./a.txt','hello, albert',function(err){
    if(err)
        {   console.log(err)
            return;
        };
    console.log('run fine!')    
        
})
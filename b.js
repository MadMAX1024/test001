function add(){
    console.log('this is add')
}

function del(){
    console.log('this is del')
}

var c = 10

exports.c = c;
exports.add= add;
exports.del =del;

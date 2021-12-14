let arr = [];
for(let i = 0; i < Infinity; i++){
    let a = prompt('');
    let b = a.split(',');
    let name = b[1];
    function removeItem(item){
        for(i in arr){
            if(arr[i]==item) arr.splice(i,1);
        }
    }
    if(b[0] == 'add'){
	arr.push(name);
        console.log('Добавлено: ' + name)
    }if(b[0] == 'del'){
	console.log('Удалено: ' + name)
	removeItem(name)
    }if(a == 'stop'){
        break
    }
}

console.log(arr);

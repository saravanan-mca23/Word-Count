var paragarph=`Red Haired" Shanks,commonly known as just "Red Hair",is the chief of the Red Hair Pirates and one of the Four Emperors that rule over the New World.`
paragarph=paragarph.toLowerCase();

paragarph=paragarph.replace(/[,.!#$@%&""]/g,'')

paragarph=paragarph.split(" ");

var newarray=[]
var number='8';
var count=1;
for(let i=0;i<paragarph.length;i++){
	if(paragarph[i]!=number){
        for(let j=i+1;j<paragarph.length;j++){
			if(paragarph[i]==paragarph[j]){
				count++;
				paragarph[j]=number;
			}
		}
		
		newarray.push([paragarph[i],count]);
		count=1;
	}
}

for(let k=0;k<newarray.length;k++){
	for(let m=k+1;m<newarray.length;m++ ){
		if(newarray[k][1]<newarray[m][1]){
			let temp=newarray[k];
			newarray[k]=newarray[m];
			newarray[m]=temp;
		}
	}
}
var textarray=newarray.slice(0,3);
var text=""

for(let z=0;z<textarray.length;z++){
	console.log(textarray[z]);
	text=text+"<h1>"+textarray[z][0]+"---->"  +textarray[z][1] + "times occurs"+"</h1>"
}
document.getElementById('count').innerHTML=text;

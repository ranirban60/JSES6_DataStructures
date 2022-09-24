let s = [];
for(i=1;i<100;i++){
    s = i.toString().split('');
    if(i>10){
        for(j=0;j<s.length;j++){
            if(s[j]==s[j+1]){
                console.log(i);
            }
        }
    }
}
// b/w -10 and 19
var num = -10;
while(num <= 19){
    console.log(num);
    num++;
}

// even b/w 10 and 40
var e = 10;
while(e <= 40){
    if(e % 2 == 0){
        console.log(e);
    }
    e++;
}

// odd b/w 300 and 333
var o  = 300;
while(o <= 333){
    if(o % 2 != 0){
        console.log(o);
    }
    o++;
}

// divisible by 5 and 3 b/w 5 and 50
var d = 5;
while(d <= 50){
    if((d % 5 == 0) && (d % 3 == 0)){
        console.log(d);
    }
    d++;
}
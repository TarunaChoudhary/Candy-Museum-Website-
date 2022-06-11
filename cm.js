const changeColor=(delay) =>{

            document.body.style.backgroundColor=changeColor1();
            setTimeout(changeColor,2000);   
}

//     changeColor('hotpink',1000).then(
//         ()=>changeColor('pink',3000)
//     ).then(
//        ()=>changeColor('coral',3000)
//    ).then(
//        ()=>changeColor('darkorange',3000)
//    ).then(
//        ()=>changeColor('mistyrose',3000)
//    ).then(
//        ()=>changeColor('antiquewhite',3000)
//    ).then(
//        ()=>changeColor('mediumpurple',3000)
//    )
function changeColor1(){
    var y="#";
    for(i=0;i<6;i++){
        var x=Math.floor(Math.random()*16).toString(16);
        y=y.concat(x);
    }
    return y;
}
changeColor(2000);

    

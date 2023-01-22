let time = new Date(0, 0, 0, 0, 0, 15, 0);
let zerotime = new Date(0,0,0 ,0 ,0 ,0 ,0);
let timeout;
let press_start = document.querySelector('#play');
let press_stop = document.querySelector('#stop');

function showTime()
{
    let box = document.querySelector('.timing');
    let hour = "0"+time.getHours();
    let min = "0"+time.getMinutes();
    let sec = time.getSeconds();
    while (sec.toString().length < 2)
        sec= "0" + sec;

    box.innerHTML = hour+':'+min+':'+sec ;
}

async function timer(){
    let promise = new Promise((resolve) => {
        showTime()
        if (time > zerotime){
            time.setSeconds(time.getSeconds()-1);
            timeout = setTimeout(timer, 1000);
        }
        else{
            resolve("Время и стекло");
        }
    })
    promise.then(str => {
        document.querySelector('.timing').innerHTML = str.toString()
    });
}

function Start(){
    showTime();
    timer();
}

press_start.addEventListener('click',Start);
press_stop.addEventListener('click',function (){
    location.reload();
});
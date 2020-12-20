const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function getCurrentTime(){
    var date = new Date;
    // var time = date.getTime();
    // console.log("Time : ",time);
    var hr = date.getHours();
    console.log("Hours : ",hr);
    if(hr > 12){
        hr = hr - 12;
    }
    console.log("Hours in 12Hr : ",hr);
    var mins = date.getMinutes();
    console.log("Minutes : ",mins);
    var  secs = date.getSeconds();
    console.log("Seconds : ",secs);
    time = [hr,mins,secs]
    return time
}

function getDegrees(time_ele){
    return 6*time_ele;
}

function setInitAttribs(time){
    var hr_deg = getDegrees(time[0]*5);
    var mins_deg = getDegrees(time[1]);
    var secs_deg = getDegrees(time[2]);
    SECONDHAND.setAttribute("transform","rotate("+secs_deg+")");
    MINUTEHAND.setAttribute("transform","rotate("+mins_deg+")");
    HOURHAND.setAttribute("transform","rotate("+hr_deg+")");
    updateTimeAttribs(time);  
}

function updateTimeAttribs(time){
    var currSecondHand = time[2];
    var currMinuteHand = time[1];
    var currHourhand = time[0];
    ts = setInterval(function(){
        if(currSecondHand > 59){
            currSecondHand = 0;
            currMinuteHand ++;
            mins_deg = getDegrees(currMinuteHand);
            MINUTEHAND.setAttribute("transform","rotate("+mins_deg+")");
        }
        if(currMinuteHand > 59){
            currMinuteHand = 0;
            currHourhand++;
            if(currHourhand > 12){
                currHourhand = 0;
            }
            hr_deg = getDegrees(currHourhand*5);
            HOURHAND.setAttribute("transform","rotate("+hr_deg+")");
        }
        secs_deg = getDegrees(currSecondHand)
        SECONDHAND.setAttribute("transform","rotate("+secs_deg+")");
        currSecondHand++;
    }, 1000);
    
}


t = getCurrentTime(); 
setInitAttribs(t);


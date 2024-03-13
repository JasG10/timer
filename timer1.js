function setAlarm(alarm) {
    alarm.foreach((time) => {
        if (!NaN(time) && time >= 0) {
            setTimeout(() => {
                process.stdout.write('\x07');
                console.log('Alarm is ${time} seconds');
            }, time * 1000);
        } else {
            console.log('Invalid input');
        }
    });
}



setAlarm(alarm);
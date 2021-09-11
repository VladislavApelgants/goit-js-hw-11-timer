const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}

const { days, hours, mins, secs } = refs;

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        
        this.startBack()
 
    }; 
    

startBack() {
        let endDate = this.targetDate;
        console.log(this.selector)
        setInterval(() => {
          
        let now = new Date().getTime();
        let deltaT = endDate - now;
        const { dayBack, hoursBack, minsBack, secsBack } = this.getTimeComponentsBack(deltaT);
            // console.log(`${dayBack}:${hoursBack}:${minsBack}:${secsBack}`)
            days.textContent = dayBack;
            hours.textContent = hoursBack;
            mins.textContent = minsBack;
            secs.textContent = secsBack;
        }, 1000)
    };
    
    pad(value) {
        return String(value).padStart(2, '0');
    };

    getTimeComponentsBack(deltaTim) {
    const dayBack = Math.floor(deltaTim / (1000 * 60 * 60 * 24));
    const hoursBack = this.pad(Math.floor((deltaTim % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minsBack = this.pad(Math.floor((deltaTim % (1000 * 60 * 60)) / (1000 * 60)));
    const secsBack = this.pad(Math.floor((deltaTim % (1000 * 60)) / 1000));

    return { dayBack, hoursBack, minsBack, secsBack };
    };

}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 1, 2021'),
});

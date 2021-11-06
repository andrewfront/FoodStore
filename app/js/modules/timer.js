const timer = () => {
    const deadline = '2025-05-11'
    function getRemainigTime(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date())
        const days = Math.floor( (t/(1000*60*60*24)) )
        const seconds = Math.floor( (t/1000) % 60 )
        const minutes = Math.floor( (t/1000/60) % 60 )
        const hours = Math.floor( (t/(1000*60*60) % 24) )
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    function getZero(num){
        if (num >= 0 && num < 10) {
            return '0' + num
        } else {
            return num
        }
    }
    function setClock(selector, endtime) {

        const timer = document.querySelector(selector)
        const days = timer.querySelector(".timer__days span")
        const hours = timer.querySelector('.timer__hours span')
        const minutes = timer.querySelector('.timer__minutes span')
        const seconds = timer.querySelector('.timer__seconds span')
        const timeInterval = setInterval(updateClock, 1000)

        updateClock();

        function updateClock() {
            const t = getRemainigTime(endtime)

            days.textContent = getZero(t.days)
            hours.textContent = getZero(t.hours)
            minutes.textContent = getZero(t.minutes)
            seconds.textContent = getZero(t.seconds)

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock('.timer', deadline)
}
export default timer
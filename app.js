const profile = {
    name: "Dej_xx01",
    img: "nif.jpg",
    track: "Front-End"
}

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const testIds = document.querySelectorAll("[data-testid]")
testIds.forEach(testId =>{
    if (testId.dataset.testid == "slackDisplayImage"){
        testId.src = profile.img 
    }else if (testId.dataset.testid == "slackUserName"){
        testId.textContent = profile.name
    }else if (testId.dataset.testid == "myTrack"){
        testId.textContent = profile.track
    }else if (testId.dataset.testid == "currentDayOfTheWeek"){
        testId.textContent = daysOfWeek[new Date().getDay()]
    }else{
        testId.textContent = new Date().getTime()
    }
})


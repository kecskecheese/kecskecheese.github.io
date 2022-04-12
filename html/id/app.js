async function getUserInformation() {
    let userInfo = {}

    try {
        let res = await fetch('https://tomlink.ca/identify')
        userInfo = await res.json()
    } catch (err) {
        console.log(err)
    }

    var parsedResults = new UAParser().getResult()

    userInfo.browser = parsedResults.browser.name
    userInfo.os = osDescription(parsedResults.os.name)

    decorateAboutYou(userInfo)
    unhideAboutYou()
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });


}

var blink_speed = 500;
var t = setInterval(function () {
    var ele = document.getElementById('blinker');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);


function glitch() {
    document.querySelector('body').classList.add('wiggle')
    document.querySelector('h1').classList.add('glitch')
    document.querySelector('#about-you h2').classList.add('glitch')
}

function decorateAboutYou(userInfo) {
    document.querySelector('#about-you-os').textContent = userInfo.os
    document.querySelector('#about-you-browser').textContent = userInfo.browser
    document.querySelector('#about-you-country').textContent = userInfo.country
    document.querySelector('#about-you-city').textContent = userInfo.city
}

function eventListeners() {
    document
        .querySelector('#about-you summary')
        .addEventListener('click', glitch)
}

function unhideAboutYou() {
    document.querySelector('#about-you').classList.remove('hide')
}

function osDescription(os) {
    if (os == 'iOS') {
        return `iPhones are supposed to be secure, right. Maybe time to rethink useing iproducts.`
    }

    if (os.includes('Android')) {
        return `I know you get what you pay for and Android is expensive but Maybe if you'd gotten an iPhone you'd be more secure.`
    }

    if (os.includes('Windows')) {
        return `Online privacy is overrated, keep using that Windows PC and relax, It's just you, me, and Bill Gates here now.`
    }

    if (os === 'Arch') {
        return `You're sitting in front of your computer. BTW, did you know you use Arch?`
    }

    if (os === 'Void') {
        return `You have entered the Void and felt safe and secure, until now, you read this and suddenly feel like maybe my system is not as secure as I thought.`
    }

    if (os === 'Mac OS') {
        return `As you type and click away on your Mac you feel like it was a good choice, Now reading this you are maybe feeling less convinced that Apple makes secure products.`
    }

    if (os === 'Linux') {
        return `Privacy and security online are important to you, going with Linux was the obvious choice, but as you read this and stare at the screen displaying your Linux setup, you can't help but but feel more hacked and a little less hacker.`
    }

    return 'Your computer is unconventional.'
}

getUserInformation()
eventListeners()

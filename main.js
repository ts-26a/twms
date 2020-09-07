function timeSince(d) {
    const seconds = Math.floor((new Date() - d) / 1000);
    let interval = seconds / 31536000;
    const f = (i) => Math.floor(i);
    if (interval > 1) return `${f(interval)} year`;
    interval = seconds / 2592000;
    if (interval > 1) return `${f(interval)} months`;
    interval = seconds / 86400;
    if (interval > 1) return `${f(interval)} days`;
    interval = seconds / 3600;
    if (interval > 1) return `${f(interval)} hours`;
    interval = seconds / 60;
    if (interval > 1) return `${f(interval)} minutes`;
    return `${f(seconds)} seconds`;
}

function calc(_id, x) {
    if (x === undefined) x = true;
    const id = parseInt(_id);

    const unixTime = parseInt(id / Math.pow(2, 22)) + 1288834974657;
    const now = new Date();
    const tweetDate = new Date(unixTime);
    const since = timeSince(tweetDate);

    const _year = tweetDate.getFullYear();
    const year =
        _year === now.getFullYear() && x ? "" : ("000" + _year).slice(-4) + "/";
    const _month = tweetDate.getMonth()
    const _date = tweetDate.getDate();
    const md = _month === now.getMonth() && _date === now.getDate() && x;
    const month =
        md ? "" : ("0" + (_month + 1)).slice(-2) + "/";
    const date =
        md ? "" : ("0" + _date).slice(-2) + " ";
    const hours = ("0" + tweetDate.getHours()).slice(-2) + ":";
    const minutes = ("0" + tweetDate.getMinutes()).slice(-2) + ":";
    const seconds = ("0" + tweetDate.getSeconds()).slice(-2) + ".";
    const millis = ("00" + tweetDate.getMilliseconds()).slice(-3);
    return year + month + date + hours + minutes + seconds + millis + (x ? ` : ${since}` : "");
}

function _main() {
    if (location.href.match(/.*\/status\/[0-9]+/) != null) {
        let tweet = document.querySelector(`#react-root > div > div > div > main > div > div > div > div > div > div:nth-child(2) > div > section > div > div > div > div > div > article > div > div > div > div:nth-child(3) > div > div > div > a[href*="/status/"] > span`);
        if (tweet != null) {
            tweet.innerHTML = calc(location.href.split("/").slice(-1)[0], false);
        }
    }
    const tweets = document.querySelectorAll(`a[href*="/status/"][dir="auto"][role="link"]:not([href$="/likes"]):not([href*="retweets"]):not([href*="media_tags"])`);
    tweets.forEach(tweet => {
        let id = tweet["href"].split("/").slice(-1)[0];
        tweet.innerHTML = calc(id);
    });
}

function main() {
    setInterval(_main, 500);
}

main();

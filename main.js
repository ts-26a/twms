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
        let tweet = document.querySelector(`#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-yfoy6g.r-18bvks7.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > section > div > div > div:nth-child(2) > div > div > article > div > div > div > div:nth-child(3) > div.css-1dbjc4n.r-vpgt9t > div > div.css-901oao.r-111h2gw.r-1tl8opc.r-a023e6.r-16dba41.r-ad9z0x.r-zso239.r-bcqeeo.r-qvutc0 > span:nth-child(1) > span`);
        if (tweet == null) {
            tweet = document.querySelector(`#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-yfoy6g.r-18bvks7.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div > div:nth-child(3) > div.css-1dbjc4n.r-vpgt9t > div > div.css-901oao.r-111h2gw.r-1tl8opc.r-a023e6.r-16dba41.r-ad9z0x.r-zso239.r-bcqeeo.r-qvutc0 > span:nth-child(1) > span`);
        }
        if (tweet == null) {
            tweet = document.querySelector(`#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-yfoy6g.r-18bvks7.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > section > div > div > div:nth-child(8) > div > div > article > div > div > div > div:nth-child(3) > div.css-1dbjc4n.r-vpgt9t > div > div.css-901oao.r-111h2gw.r-1tl8opc.r-a023e6.r-16dba41.r-ad9z0x.r-zso239.r-bcqeeo.r-qvutc0 > span:nth-child(1) > span`);
        }
        if (tweet == null) {
            tweet = document.querySelector(`#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-yfoy6g.r-18bvks7.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div > div:nth-child(3) > div.css-1dbjc4n.r-vpgt9t > div > div.css-901oao.r-111h2gw.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-zso239.r-bcqeeo.r-qvutc0 > span:nth-child(1) > span`);
        }
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

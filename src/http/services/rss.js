const url = "https://dev.to/feed/michelnovellino";

exports.Get = async function () {
    return fetch(url).then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            let items = data.querySelectorAll("item");
            //let html = ``;
            let posts = []
            items.forEach(el => {
                console.log(el.querySelector("title").innerHTML);

                posts.push({
                    title: el.querySelector("title").innerHTML,
                    url: el.querySelector("link").innerHTML
                    ,
                    date: el.querySelector("pubDate").innerHTML.split(" ", 3).join(" ")
                });
            });
            console.log(posts)
            return posts
            //document.getElementById('posts').innerHTML = html
            console.log(items);
        });

}
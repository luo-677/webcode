function ajax(way, url, selector) {
    const xhr = new XMLHttpRequest();
    xhr.open(way, url);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.querySelector(selector).innerHTML = xhr.responseText;
        }
    }
};
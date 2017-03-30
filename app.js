// JavaScript source code

    document.querySelector('.on').addEventListener('click', function onOnClick() {
        httpGet("http://192.168.1.207:8080/gpio/0");
    });
document.querySelector('.off').addEventListener('click', function onOffClick() {
    httpGet("http://192.168.1.207:8080/gpio/1");
});





    function httpGet(url) {

        return new Promise(function (resolve, reject) {

            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };

            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };

            xhr.send();
        });

    }
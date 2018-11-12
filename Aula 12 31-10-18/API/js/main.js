console.log("link pro js OK!")
function getMeteo() {
    $.ajax({
        url: "http://192.168.0.122:3000/api/orders",
        type: 'POST',
        contentType: "application/json",
        data:JSON.stringify({
            "name": "soraya teste",
          }),
        success: function (result) {
            console.log(result);
        }
    });
    
}
getMeteo()
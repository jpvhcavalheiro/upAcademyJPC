//console.log("ola")
$(document).ready(function () {
    //console.log("ready!");
    $("#nGosto").click(function () {
        console.log("ola");
        getRandomBookInfo();
        console.log(startindex)
    });
});
var startindex = 0
var description = ""
var imageLink = ""
var text = ""
var possible = ""
function makeid() {
    text = "";
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 1; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
//console.log(makeid()); //para debug
var livros=[]
var description = ""
var imageLink = ""
var qValue = makeid()
function getRandomBookInfo() {
    let bookData = []
    console.log(qValue) //para debug
    //console.log(startindex)
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q='"+qValue+"'&maxResults=1&startIndex=" + startindex,
        type: 'GET',
        success: function (data) {
            console.log(data)
            startindex++;
            //console.log(data) //para debug
            //console.log(data.items)
            description = data.items[0].volumeInfo.description
            //console.log(description)
            //console.log(data.items[0].volumeInfo.imageLinks.smallThumbnail)
            imageLink = data.items[0].volumeInfo.imageLinks.smallThumbnail
            //console.log(imageLink) //pra debug
            //console.log(data.items[0].volumeInfo.title) //para debug
            titulo = data.items[0].volumeInfo.title
            //console.log(titulo) //para debug
            livros.push(titulo)
            bookData.push(titulo)
            bookData.push(description)
            bookData.push(imageLink)
            //console.log(bookData) //para debug
            //console.log(bookData[2]) //para debug
            $("#idTitle").html(bookData[0])
            $("#idImage").html("<img src='" + imageLink + "' alt='Impossivel apresentar imagem'>")
            $("#idDescription").html(bookData[1])
        },
    });
}
console.log("retrogrado")
console.log("retrogrado2")
getRandomBookInfo()
console.log("retrogrado23")




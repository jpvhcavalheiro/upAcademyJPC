// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");




    $("#target").click(function () {
        console.log()
        $('h1').css('color', 'red')
        $('.conteudo').html(getImage('https://www.w3schools.com/w3css/img_lights.jpg', "Ola"))
    });

    $('#btn1').click(function(){
        $('h1').css('color', 'red')
        $('.conteudo').html(getTable())
    });



});
function getImage (srcImage,altImage){
    return `<img src="${srcImage}" altImage">`
}

function getTable (){
    return`<table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th> 
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td> 
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td> 
      <td>94</td>
    </tr>
  </table>`
}
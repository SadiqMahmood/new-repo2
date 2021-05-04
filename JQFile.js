var clicked = false;
var inc = false;
$(function(){
   
   $("#addbtn").click(handleAdd);

});


function handleAdd(e){
   
   event.preventDefault();
   
      
      var name = $("#inputName").val();
      var gender = $("input[name = 'gender']:checked").val();
      var age =   $("#inputAge").val();
      var city = $("#city").val();

      $(".tbl tbody").append("<tr data-name = '"+name+"' data-gender = '"+gender+"' data-age = '"+age+"' data-city = '"+city+"'><td>"+name+"</td><td>"+gender+"</td><td>"+age+"</td><td>"+city+"</td><td><button class='btn btn-danger  btn-delete' type='button' id = 'delete'>Delete</button><button class='btn btn-info btn-edit' type='button' id = 'edit'>Update</button></td></tr>");
      if(inc== false)
      {
         $("#button").append(" <button type = 'button' class = 'btn btn-info' id = 'reset'>Reset</button>");
         $("#reset").click(function(){
            location.reload();
         });
         inc = true;
      }
     
   
      $('body').on('click','.btn-delete', function(){
         $(this).parents('tr').remove()
      });

      $('body').on('click', '.btn-edit', function(){
         if(clicked===false){
         $("#button").append(" <button type = 'button' class = 'btn btn-info' >update</button>");
         clicked = true;
                  }
         var name = $(this).parents('tr').attr('data-name');
         var gender = $(this).parents('tr').attr('data-gender');
         var age = $(this).parents('tr').attr('data-age');
         var city = $(this).parents('tr').attr('data-city');

         $(this).parents('tr').find('#inputName').html("<input name = 'edit_text' value = '"+name+"'>");
         //$(this).parents('tr').find('input[name = "gender"]').html("<input name = 'gender' value = '"+gender+"'>");
         $(this).parents('tr').find('#inputAge').html("<input name = 'edit_age' value = '"+age+"'>");
         $(this).parents('tr').find('#city').html("<input name = 'city' value = '"+city+"'>");

        // $(this).parents('tr').find('#de').prepend("<button type='button' class= 'btn btn-info'>update</button>");
          

      });
      
     
}


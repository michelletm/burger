console.log("Time to eat burgers!");

function getBurgers() {
   $.ajax({
      url: "/api",
      method: "GET",
   }).then(function (burgersArr) {
      console.log(burgersArr);
      showAll(burgersArr);
   });
}

function showAll(burgersArr) {
   $(".burgerList").empty()
   $(".devouredBurgerList").empty()

   for (var i = 0; i < burgersArr.length; i++) {
      var burgerId = burgersArr[i].item_id
      var burgerTitle = burgersArr[i].burger_name;
      var burgerIsDevoured = burgersArr[i].devoured;

      console.log(burgerTitle);

      /*
      <div>
         <img />
         <button></button>
      </div>
      */
      var div = $(`<div class='burgerdiv' data-burger-id="${burgerId}">`)
      var img = $(`<img src='/static/assets/css/burger.png'>`)
      var btn = $(`<button>`).text(burgerTitle);

      div.append(img, btn)
      if (burgerIsDevoured) {
         $(".devouredBurgerList").append(div);
      } else {
         $(".burgerList").append(div);
      }
   }
}



$(".create").on("click", function (event) {
   const burger_name = $("#burgerName").val();
   console.log(burger_name);
   $.ajax({
      url: "/api/create",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ burger_name, devoured: false })
   }).then(function (response) {
      console.log(response)
      getBurgers();
      $(".newBurgerField").empty();
   });
});

$(".burgerList").on("click", '.burgerdiv', function (event) {
   const id = $(this).attr("data-burger-id")
   $.ajax({
      url: `/api/update/${id}`,
      method: "PUT",
   }).then(function (response) {
      console.log(response);
      getBurgers()
   });
});

getBurgers()
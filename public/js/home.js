
let tempState = false;
const checkbox = $("input#joke_mode");
function showConfirmation() {
     // Display the overlay and confirmation box
     
     $(".confirm_overlay").removeClass("d_none");
     $(".confirm_overlay").addClass("d_flex");
 };

 function hideConfirmation() {
     // Hide the overlay and confirmation box
     $(".confirm_overlay").addClass("d_none");
     $(".confirm_overlay").removeClass("d_flex");
 };



 $(function () {
     
      $("#joke_mode").change(function(e){
          // e.preventDefault();
          
          tempState = checkbox[0].checked;
          $("input#forJokeMode[name='joke_mode_check']").val(tempState ? "true" : "false");
          console.log(tempState);

          showConfirmation();
          checkbox[0].checked = !tempState;

     });
     
      $("button.confirm").click(function(){
          checkbox[0].checked = tempState;
          
          $("form.mode").submit();;
          // checkbox[0].checked = tempState;

          hideConfirmation();

     });
     
     $("button.cancel").click(function(){
          // console.log($(document.querySelector("input#joke_mode")))
          checkbox[0].checked = !tempState;
          hideConfirmation();
     });
     // Conditional statement for dark jokes 
     if(!checkbox[0].checked ){
          $(".header .logo a").addClass("dark");
          $(".header .logo span").addClass("dark");
          $(".container .header .mode").addClass("disabled");
          $(".container .main .joke").addClass("dark");
          $(".container .choose button#dark").removeClass("disabled");
          $(".confirm_overlay .confirmation_1").addClass("d_none");
          $(".confirm_overlay .confirmation_2").removeClass("d_none");
     }else {
          $(".header .logo a").removeClass("dark");
          $(".header .logo span").removeClass("dark");
          $(".container .header .mode").removeClass("disabled");
          $(".container .main .joke").removeClass("dark");
          $(".container .choose button#dark").addClass("disabled");
          $(".confirm_overlay .confirmation_1").removeClass("d_none");
          $(".confirm_overlay .confirmation_2").addClass("d_none");
     }

     // animate response
     let responseDOM =$(".main .joke .cover h3")
     let response = responseDOM.text()
     response = response.trim()
     responseArray = Array.from(response)
     console.log(responseArray)

     let i = 0;
     let intervalId ;
     responseDOM.text(" ");
     const clearAnimate = () => {
          responseDOM.text(" ");
          i = 0;
     }
     const animateText = () => {
          if(i < responseArray.length){
               responseDOM.text(responseDOM.text() + responseArray[i]);
          }
          i++;
          console.log(i)
     }
     $(".main .joke .cover").hover(
          // mouse enter 
          function () {
               if(i >= responseArray.length){
                    clearInterval(intervalId);
                    responseDOM.removeClass('fade')
                    responseDOM.addClass('show')
               }else {
                    clearAnimate();
                    responseDOM.removeClass('fade')
                    responseDOM.addClass('show')
                    intervalId = setInterval(()=> {
                         if(i < responseArray.length){
                              animateText()
                         }
                    }, 50);

               }
          },
          // Mouse leave 
          function () {
               clearInterval(intervalId);
               responseDOM.addClass('fade')
               responseDOM.removeClass('show')
               // setTimeout(clearAnimate, 5000)
          }
     )
     

     
     
 });





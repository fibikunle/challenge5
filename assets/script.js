var today = moment();

// To add current day to display at top of page under header
$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY")); 
        $(".saveBtn").on("click", function(){
            var scheduleText = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
            localStorage.setItem(time, scheduleText);
    
        }); 
        //Get any user input that was saved in localStorage
        $("#8 .description").val(localStorage.getItem("8"));
        $("#9 .description").val(localStorage.getItem("9"));
        $("#10 .description").val(localStorage.getItem("10"));
        $("#11 .description").val(localStorage.getItem("11"));
        $("#12 .description").val(localStorage.getItem("12"));
        $("#13 .description").val(localStorage.getItem("13"));
        $("#14 .description").val(localStorage.getItem("14"));
        $("#15 .description").val(localStorage.getItem("15"));
        $("#16 .description").val(localStorage.getItem("16"));
        $("#17 .description").val(localStorage.getItem("17"));
    
        function timeChange(){
            var currentHour = moment().hour(); 
            
            //Code to apply the past, present, or future class to each time
            $('.time-block').each(function(){
                var idTime = parseInt($(this).attr("id"));
                if (currentHour > idTime){
                    $(this).addClass("past");
                } else if (currentHour === idTime){
                    $(this).addClass("present");
                    $(this).removeClass("past");
                } else {$(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
                }
            })
        }
        timeChange();
        var timeInterval = setInterval(timeChange, 1000);
    
    });
    //Clear All User Inputs 
    $("#clearBtn").click(function () {

        localStorage.clear();
        location.reload();
        window.scrollTo(0, 0);
    });
    

  
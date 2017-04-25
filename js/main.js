//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Betty',
        lastName: 'White'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

    // Code for login function that listens for clicks on the "login" button.
    // When a user clicks the "login" button, hide the login form elements on the page.
    // Fill the user's first and last name into `div.user-info`.
  $('#login-form .btn').on('click', function(event) {
    $('#login-form').hide();
    $('.user-info').show();
    $('.user-fullname').text(' ' + userInfo.firstName + ' ' + userInfo.lastName);
 
 }); 
  
    // Function that listens for clicks on all the "View Details"
    // buttons so that when a user clicks they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
 
 
    $('.view-details').on('click', function(event){
        var targetElement = event.target;
        var container = targetElement.parentElement.parentElement;
    //  Toggle visibility of all the elements within that parent with the class `details`. 
        $(container).find('.details').each(function(index, el){
          if ($(el).is(':visible')){
              $(el).fadeOut();
              targetElement.innerText = "View Details"
   //   Change the text of the "view details" button to read "hide details" so the user understands they can hide the text again.
        } else {
          $(el).fadeIn();
          targetElement.innerText = "Hide Details"
        }
    });    
 });   

 // Vote function that listens for 'click'.
 // When a button is clicked determine what the user is voting for ("great" or "greatest").
  
    $('.vote').on('click', function(event) {
      if ($(this).attr('data-vote')==='great'){
          voteCounts.great++;
          voteCounts.total++;
         
    } else {
        if ($(this).attr('data-vote')==='greatest'){
          voteCounts.greatest++;
          voteCounts.total++;
        }   
    }   

// Increment the counter for whichever vote talley is affected.
// Determine the respective percentages (out of 100) for each progress bar.
// Modify the `width` attribute on each progress bar to set the updated percentage.      
      var greatGraph = voteCounts.great / voteCounts.total * 100 + '%';
      var greatestGraph = voteCounts.greatest / voteCounts.total * 100 + '%';
      $('.great-progress').css('width', greatGraph);                          
      $('.greatest-progress').css('width', greatestGraph);  
      });
});

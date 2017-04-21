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
  
    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
    //      2. Within that parent, find all the elements that have the class `details`.
    //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.
    $('.view-details').on('click', function(event){
        console.log(event);
        var targetElement = event.target;
        var container = targetElement.parentElement.parentElement;
        $(container).find('.details').each(function(index, el){
          if ($(el).is(':visible')){
              $(el).fadeOut();
              targetElement.innerText = "View Details"

        } else {
          $(el).fadeIn();
          targetElement.innerText = "Hide Details"
        }
    });    
 });   

 // Vote function that listens for 'click'.
 // When a button is clicked determine what the user is voting for ("great" or "greatest").
  
    $('.vote').on('click', function(event) {
      console.log(event);
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

  

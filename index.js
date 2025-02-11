window.onload = function () {
    gapi.load('auth2', function () {
        gapi.auth2.init();
    });
};

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    
    // Display user information
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl()); // Fixed image issue

    // Show user data and hide sign-in button
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully.");
        
        // Hide user data and show sign-in button
        $(".g-signin2").css("display", "block");
        $(".data").css("display", "none");
    });

    // Ensure session is revoked
    auth2.disconnect();
}

var apiKey = require ("./../.env").apiKey;

GithubUser = function(userName){
  this.userName = userName;

};

GithubUser.prototype.getUser = function(){
  $.get('https://api.github.com/users/' + this.userName + "?access_token=" + apiKey).then(function(response) {
    $("#GHUserName").hide();
    $("#results").show();
    $("#resultName").html("Here's a list of <a href='" + response.html_url + "'>" + response.login + "</a>" + "'s repositories:");
  }).fail(function(error) {
    $("#resultName").text(error.responseJSON.message);
  });
};

GithubUser.prototype.getRepos = function(){
  $.get("https://api.github.com/users/" + this.userName + "/repos?access_token=" + apiKey).then(function(response) {
    for (var i = 0; i < response.length; i ++)
    {
      if (response[i].description === null || response[i].description === "") {
        $("#resultRepo").append("<li>" + response[i].name + "</li>");
      }
      else {
        $("#resultRepo").append("<li>" + response[i].name + ": " + response[i].description + "</li>");
      }
    }
  }).fail(function(error) {
    $("#resultRepo").text(error.responseJSON.message);
  });
};

GithubUser.prototype.getEmail = function(){
  $.get('https://api.github.com/users/' + this.userName + "?access_token=" + apiKey).then(function(response) {
    if (response.email === null){
      $("#resultEmail").text("");
    }
    else {
      $("#resultEmail").html("Email them: <a href= '" + response.email +"'>" + response.email + "</a>");
    }
  });
};
exports.githubUserModule = GithubUser;
// created_at

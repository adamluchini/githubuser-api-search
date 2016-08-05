var apiKey = require ("./../.env").apiKey;
var GithubUser = require('./../js/usersearch.js').githubUserModule;

$(document).ready(function(event) {
  $("#GHUserName").submit(function(event) {
    event.preventDefault();
    var currentUser = new GithubUser($("#GHUserNameInput").val());
    currentUser.getUser();
    currentUser.getRepos();
    currentUser.getEmail();
    $("#resubmitForm").show();
  });

  $("#resubmitForm").click(function() {
    $("#resubmitForm").hide();
    $("#GHUserName").show();
  });
});

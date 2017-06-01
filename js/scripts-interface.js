var Repo = require('./../js/scripts.js').repoModule;

$(document).ready(function() {

  $('#userRepos').click(function() {
    $('.showUser').empty();
    $('.showRepos').empty();
    var GitHubUser = $('#repos').val();
    var newRepo = new Repo ();
    newRepo.getUserInfo(GitHubUser);
    newRepo.getRepos(GitHubUser);
    $('#repos').val("");
    $('.showUser').text("Repositories for " + GitHubUser + ":");
  });

});

var apiKey = require('./../.env').apiKey;

function Repo () {

}

Repo.prototype.getUserInfo = function(user) {
  if (apiKey === undefined) {
    $.get('https://api.github.com/users/' + user).then(function(response) {
    }).fail(function(error) {
      $('.showUser').text("There is no user matching that name");
    });
  } else {
    $.get('https://api.github.com/users/' + user + '?access_token' + apiKey).then(function(response) {
    }).fail(function(error) {
      $('.showUser').text("There is no user matching that name");
    });
  }
};

Repo.prototype.getRepos = function(user) {
  if (apiKey === undefined) {
    $.get('https://api.github.com/users/' + user + '/repos?per_page=100').then(function(response) {
      var userRepos = response;
      for (i = 0; i < userRepos.length; i++) {
        $('.showRepos').append('<li><a href="' + userRepos[i].html_url + '">' + userRepos[i].name + '</a></li>')
      }
    }).fail(function(error) {
      $('.showRepos').text(error.responseJSON.message);
    });
  } else {
    $.get('https://api.github.com/users/' + user + '/repos?per_page=100' + '&access_token=' + apiKey).then(function(response) {;
      var userRepos = response;
      for (i = 0; i < userRepos.length; i++) {
        $('.showRepos').append('<li><a href="' + userRepos[i].html_url + '">' + userRepos[i].name + '</a></li>')
      }
    }).fail(function(error) {
      $('.showRepos').text(error.responseJSON.message);
    });
  }
};

exports.repoModule = Repo;

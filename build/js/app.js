(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "48075b61a329252f50157afeb55d8b0b1d16bab8";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/scripts.js":2}]},{},[3]);

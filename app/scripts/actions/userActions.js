import Reflux from 'reflux';
import $ from 'jquery';

import config from '../config.js';

if (typeof(localStorage) === "undefined") {
    localStorage = window.localStorage;
}

const UserActions = Reflux.createActions({
    'loadUser': {children: ['completed', 'failed']},
    'saveUser': {children: ['completed', 'failed']},
    'loadMonster': {children: ['completed', 'failed']},
    'saveMonster': {children: ['completed', 'failed']}
});

var setupAjax = function (token) {
    $.ajaxSetup({
        headers: { 'authorization': token },
        contentType: 'application/json'
    });
}

UserActions.loadUser.listen(function() {
    var token = localStorage.getItem('token');

    if (token) {
        setupAjax(token)
    }

    var promise = $.get(config.apiRoot + '/me');
    promise.then((function(user) {
        localStorage.setItem('token', user.token);

        setupAjax(user.token);

        this.completed(user);
    }).bind(this)).fail((function(error) {
        this.failed(error);
    }).bind(this));
});


UserActions.loadMonster.listen(function() {
    var promise = $.get(config.apiRoot + '/monster');
    promise.then((function(monster) {
        if (monster.lines.length === 0) {
            monster.lines = ['', '', '', ''];
        }
        this.completed(monster);
    }).bind(this)).fail((function(error) {
        this.failed(error);
    }).bind(this));
});

UserActions.saveUser.listen(function(user) {
    var promise = $.ajax({
        url: config.apiRoot + '/me',
        type: 'PUT',
        data: JSON.stringify(user)
    });

    promise.then((function(user) {
        this.completed(user);
    }).bind(this)).fail((function(error) {
        this.failed(error);
    }).bind(this));
});

UserActions.saveMonster.listen(function(monster) {
    var promise = $.ajax({
        url: config.apiRoot + '/monster',
        type: 'PUT',
        data: JSON.stringify(monster)
    });

    promise.then((function(monster) {
        this.completed(monster);
    }).bind(this)).fail((function(error) {
        console.debug(error);
        this.failed(error);
    }).bind(this));
});

export default UserActions;

import Reflux from 'reflux';
import $ from 'jquery';

import config from '../config.js';

localStorage = window.localStorage;

const UserActions = Reflux.createActions({
    'loadUser': {children: ['completed', 'failed']},
    'saveUser': {children: ['completed', 'failed']}
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
    }).bind(this));
});

export default UserActions;

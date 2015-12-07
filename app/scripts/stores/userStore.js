import Reflux from 'reflux';

import UserActions from '../actions/userActions';


let UserStore = Reflux.createStore({
    listenables: UserActions,

    init() {
        this.user = {
        };
    },

    loadUser() {
        this.trigger({
            loading: true
        });
    },

    loadUserCompleted(user) {
        this.user = user;

        this.trigger({
            user: this.user,
            loading: false
        });
    },

    loadUserFailed(error) {
        this.trigger({
            error: error,
            loading: false
        });
    },

    loadMonster() {
        this.trigger({
            loadingMonster: true
        });
    },

    loadMonsterCompleted(monster) {
        this.monster = monster;
        this.trigger({
            monster: this.monster,
            loadingMonster: false
        });
    },

    loadMonsterFailed(error) {
        this.trigger({
            error: error,
            loadingMonster: false
        });
    }


});

export default UserStore;

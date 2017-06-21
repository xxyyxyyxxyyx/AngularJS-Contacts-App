(function () {
    var app = angular.module("ContactApp");
    app.controller("Controller", Controller);

    function Controller(ContactDataSvc) {
        this.contacts = ContactDataSvc.contacts;
        this.selected = this.contacts[2];
        this.update = function (index) {
            this.selected = this.contacts[index];
        }
    }



})();

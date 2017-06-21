(
    function () {
        var app = angular.module("ContactApp");
        app.service("AppDataServiceSvc", function (AppNameSvc) {

            this.name = AppNameSvc;
            this.author = "Sunil";
            this.buildDate = new Date().toDateString();

        });

    }

)();

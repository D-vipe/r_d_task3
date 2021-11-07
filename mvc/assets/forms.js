"use strict";

$(document).ready(function () {
  (() => {
    function DashboardForm() {
      this.forms = {
        authForm: $("#authForm"),
      };
    }

    const _proto = DashboardForm.prototype;

    _proto.init = function () {
      const _this = this;
      console.log("starting form controll script...");

      _this.authFormHandler();
    };

    _proto.authFormHandler = async function () {
      const _this = this;

      console.log("submit handler");
      // _this.forms.authForm.find('button[type=submit]').on('click', function(e) {
      //     e.preventDefault();
      //     console.log('submit clicked!');
      // })
      _this.forms.authForm.on("submit", function (e) {
        e.preventDefault();

        if ($(this).get(0).reportValidity()) {
          let formData = {
            userName: $(this).find("input[name=userName]").val(),
            userPass: $(this).find("input[name=userPass]").val(),
          };

          const response = fetch("/users/auth", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
          }).then((data) => {
              console.log(data);
          })
        }

        // console.info({'action': 'submit auth form', 'name': $(this).find('input[name=userName]').val(), 'password': $(this).find('input[name=userPass]').val()});
      });
    };

    return new DashboardForm();
  })().init();
});

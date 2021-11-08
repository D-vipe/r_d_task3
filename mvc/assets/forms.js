"use strict";

$(document).ready(function () {
  (() => {
    function DashboardForm() {
      this.forms = {
        authForm: $("#authForm"),
      };

      this.logout = $('#logoutBtn')
    }

    const _proto = DashboardForm.prototype;

    _proto.init = function () {
      const _this = this;
      console.log("starting form controll script...");

      _this.authFormHandler();
      _this.logoutHandler();
    };

    _proto.logoutHandler = function () {
        const _this = this;

        _this.logout.on('click', function (e) {
            e.preventDefault();
            console.log('logout clicked!');

            // remove current cookie, setting it to expired and reload the page
            document.cookie = "userToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
            location.href = '/';
        });
    }

    _proto.authFormHandler = function () {
      const _this = this;

      console.log("submit handler");
      _this.forms.authForm.find('.formError').empty();
      // _this.forms.authForm.find('button[type=submit]').on('click', function(e) {
      //     e.preventDefault();
      //     console.log('submit clicked!');
      // })
      _this.forms.authForm.on("submit", async function (e) {
        e.preventDefault();

        if ($(this).get(0).reportValidity()) {
          let formData = {
            userName: $(this).find("input[name=userName]").val(),
            userPass: $(this).find("input[name=userPass]").val(),
          };

          let response = await fetch("/users/auth", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });

          let decodedAnswer = await response.json();

          if (decodedAnswer.status == 'false') {
            _this.forms.authForm.find('.formError').empty().text(decodedAnswer.error_message ?? 'Произошла ошибка, попробуйте позже.')
          } else {
              console.log('success. redirect to list view. Set cookie');

              if (decodedAnswer.user_token != undefined && decodedAnswer.user_token != '') {
                document.cookie = 'userToken=' + decodedAnswer.user_token + '; max-age=36000';
              }


              location.href = '/';
          }
          console.log(decodedAnswer);

        }

        // console.info({'action': 'submit auth form', 'name': $(this).find('input[name=userName]').val(), 'password': $(this).find('input[name=userPass]').val()});
      });
    };

    return new DashboardForm();
  })().init();
});

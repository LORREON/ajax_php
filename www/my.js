$("#information").hide();

function funcBefore() {
    $("#information").text("Ожидание данных...");
}

function funcSuccess(data) {
    $("#information").text(data);
}

var log = "";
$(document).ready(function () {
    $("#load").bind("click", function () {
        var admin = "Admin";
        $.ajax({
            url: "content.php",
            type: "POST",
            data: ({name: admin, number: 5, log}),
            dataType: "html",
            beforeSend: funcBefore,
            success: funcSuccess
        });
    });

    $("#done").bind("click", function () {
        $.ajax({
            url: "login.php",
            type: "POST",
            data: ({name: $('#name').val()}),
            dataType: "html",
            beforeSend: function () {
                $("#information").toggle().text("Проверка логина ...");
            },
            success: function (data) {
                if (data == "fail")
                    $("#information").text("Неверный логин");
                else
                    $("#information").text(data);

            }
        });
    });
});


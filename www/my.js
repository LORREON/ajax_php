$("#information").hide();

function funcBefore() {
    $("#information").toggle().text("Ожидание данных...");
}

function funcSuccess(data) {
    $("#information").text(data);
}

$(document).ready(function () {
    $("#load").bind("click", function () {
        var admin = "Admin";
        $.ajax({
            url: "content.php",
            type: "POST",
            data: ({name: admin, number: 5}),
            dataType: "html",
            beforeSend: funcBefore,
            success: funcSuccess
        });
    });
});


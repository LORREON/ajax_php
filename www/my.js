$(document).ready(function () {
    $("select[name='country']").bind("change", function () {
        $("select[name='city']").empty();
        $.get("countryCheck.php", {country: $("select[name='country']").val()},
            function (data) {
                data = JSON.parse(data);
                $("#img").hide();
                for (var id in data) {
                    $("select[name='city']").append($("<option value='" + id + "'>" + data[id] + "</option>"));
                }
                $("select[name='city']").change();
            });
    });

    $("select[name='city']").bind("change", function () {
        $("#img").attr("src","img/"+$("select[name='city']").val()+".jpg").show();
    });

});


$(document).ready(function() {
    // AJAX запрос для отправки комментария на сервер Flask
    $('#commentForm').submit(function(e) {
        e.preventDefault();
        var comment = $('#commentInput').val();
        $.ajax({
            url: '/add_comment',
            type: 'POST',
            data: {'comment': comment},
            success: function(response) {
                $('#commentInput').val('');
                getComments();
            }
        });
    });
    function getComments() {
        $.ajax({
            url: '/get_comments',
            type: 'GET',
            success: function(response) {
                $('#commentList').empty();
                for (var i = 0; i < response['comments'].length; i++) {
                    $('#commentList').append('<li>' + response['comments'][i] + '</li>');
                }
            }
        });
    }

    // Вызываем функцию для получения комментариев при загрузке страницы
    getComments();
});
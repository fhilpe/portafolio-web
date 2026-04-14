$(document).ready(function() {
    // Al hacer clic en un botón con la clase .open-video
    $('.open-video').on('click', function() {
        // Obtenemos los datos del botón
        var videoUrl = $(this).data('video');
        var projectTitle = $(this).data('title');

        // Asignamos el título y la URL al iframe del modal
        $('#modalTitle').text(projectTitle);
        $('#videoIframe').attr('src', videoUrl);

        // Mostramos el modal usando la API de Bootstrap
        var myModal = new bootstrap.Modal(document.getElementById('videoModal'));
        myModal.show();
    });

    // Limpiar el iframe al cerrar el modal para que el video deje de sonar
    $('#videoModal').on('hidden.bs.modal', function () {
        $('#videoIframe').attr('src', '');
    });
});
function previewCV() {
    const container = document.querySelector('.preview');

    if(container.childElementCount > 0) {
        container.removeChild(container.firstElementChild);
    }

    const cv = document.createElement('embed');
    cv.src = "/generated/cv";
    cv.width = "100%";
    cv.height = "100%";
    cv.type = "application/pdf";
    cv.style.border = "none";

    container.appendChild(cv);
}
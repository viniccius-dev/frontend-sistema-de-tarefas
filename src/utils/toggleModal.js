export default function toggleModal() {

    const aboutModal = document.querySelector("#aboutModal");
    const sectionModal = document.querySelector("#aboutSection");
    const closeButton = document.querySelector(".closeButton");
    const btnAbout = document.querySelector("#aboutButton");

    aboutModal.classList.toggle("hidden");
    
    window.onclick = function(event) {
        
        if(event.target == btnAbout || event.target == sectionModal || sectionModal.contains(event.target) && event.target !== closeButton) {
            return;
        }
        aboutModal.classList.add("hidden");
    }

}
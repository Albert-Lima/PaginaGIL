document.addEventListener("DOMContentLoaded", function () {


    //funcionalidade dos checkboxes da entrega
    const checkboxes = document.querySelectorAll('input[name="entrega_grupo"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== this) cb.checked = false;
                });
            } else {
                // Impede que todos fiquem desmarcados
                if (![...checkboxes].some(cb => cb.checked)) {
                    this.checked = true;
                }
            }
        });
    });
});
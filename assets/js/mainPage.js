$(document).ready(function() {
    // Define translations
    const translations = {
        en: {
            Contract: "Contract",
            Lang: "Lang",
            Pricing: "Pricing",

        },
        ar: {
            Contract: "الوصول",
            Lang: "اللغه",
            Pricing: "التسعير",
        }
    };

    // Function to update the content
    function updateContent(language) {
    $("#Contract").text(translations[language]['Contract']);
    $("#Lang").text(translations[language]['Lang']);
    $("#Pricing").text(translations[language]['Pricing']);

    }
//cccc
    // // Initial language setting from localStorage
    // let currentLanguage = localStorage.getItem('language') || 'en';
    updateContent('en');

    // Event listener for language switch
    $(document).on("click", ".dropdownLang", function () {
        currentLanguage = $(this).attr("value");
        updateContent(currentLanguage);
    });
});

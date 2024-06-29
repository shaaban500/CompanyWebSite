$(document).ready(function() {
    // Define translations
    const translations = {
        en: {
            Home: "Home",
            Contract: "Contract",
            Lang: "Lang",
            Pricing: "Pricing",
        },
        ar: {
            Home: "الصفحة الرئيسية",
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
        $("#home").text(translations[language]['Home']);

        // Change text direction based on language
        if (language === 'ar') {
            $("body").css("direction", "rtl");
        } else {
            $("body").css("direction", "ltr");
        }
    }

    // Initial language setting from localStorage
    let currentLanguage = localStorage.getItem('language') || 'en';
    updateContent(currentLanguage);

    // Event listener for language switch
    $(document).on("click", ".dropdownLang", function () {
        currentLanguage = $(this).attr("value");
        updateContent(currentLanguage);
        // Save the selected language in localStorage
        localStorage.setItem('language', currentLanguage);
    });
});

(function ($) {
    $.fn.toggleTarget = function () {
        return this.each(function () {
            $(this).on('click', function (e) {
                e.preventDefault();
                var $target = $($(this).attr('href'));
                $target.toggle();
                $(this).toggleClass('toggle-target-open', $target.is(':visible'));
            });
        });
    }

    $.fn.dismissibleMessage = function () {
        return this.each(function () {
            $(this).append('<a href="#" class="dismiss">dismiss</a>');
            $('a.dismiss', this).click(function (e) {
                e.preventDefault();
                $(this).parent().hide();
            });
        });
    };

})(jQuery);

$(document).ready(function () {
    $("body").addClass("js-enabled");
    $('.print-link a').attr('target', '_blank');

    if (window.location.hash && $(".design-principles").length != 1 && $('.section-page').length != 1) {
        contentNudge(window.location.hash);
    }

    $("nav").delegate('a', 'click', function () {
        var hash;
        var href = $(this).attr('href');
        if (href.charAt(0) === '#') {
            hash = href;
        }
        else if (href.indexOf("#") > 0) {
            hash = "#" + href.split("#")[1];
        }
        if ($(hash).length == 1) {
            $("html, body").animate({ scrollTop: $(hash).offset().top - $("#global-header").height() }, 10);
        }
    });

    function contentNudge(hash) {
        if ($(hash).length == 1) {
            if ($(hash).css("top") == "auto" || "0") {
                $(window).scrollTop($(hash).offset().top - $("#global-header").height());
            }
        }
    }

    // related box fixer
    if ($(window).width() >= "670") {
        if ($(".related-positioning").length !== 0) {
            $(".related-positioning").css("position", "absolute");
            var viewPort = $(window).height();
            var relatedBox = $(".related").height();
            var boxOffset = $(".related-positioning").position();
            var topBoxOffset = boxOffset.top;
            if (relatedBox > (viewPort - topBoxOffset)) {
                $(".related-positioning").css("position", "absolute");
            }
            else {
                $(".related-positioning").css("position", "fixed");
            }
        }
    }

    $('a.toggle-target').toggleTarget();
    $('.dismissible-message p').dismissibleMessage();

});

//overide of ValidatorUpdateDisplay to show class on closest div
function ValidatorUpdateDisplay(val) {

    if (typeof (val.display) == "string") {
        if (val.display == "None") {
            return;
        }
        if (val.display == "Dynamic") {
            val.style.display = val.isvalid ? "none" : "inline";
            //return;
        }
    }
    if ((navigator.userAgent.indexOf("Mac") > -1) && (navigator.userAgent.indexOf("MSIE") > -1)) {
        val.style.display = "inline";
    }
    val.style.visibility = val.isvalid ? "hidden" : "visible";

    //---  Add / Remove Error Class
    var triggeredSiblings = 0;
    if (val.isvalid) {
        $(val).siblings('span').each(function () {
            if ($(this).isvalid == false) { triggeredSiblings = 1; }
        });
        if (triggeredSiblings == 0) { $(val).closest("div").removeClass("validation"); }
    } else {
        $(val).closest("div").addClass("validation");
    }
}

//overide of RegularExpressionValidatorEvaluateIsValid to show class on closest div
function RegularExpressionValidatorEvaluateIsValid(val) {
    var value = ValidatorGetValue(val.controltovalidate);
    if (ValidatorTrim(value).length == 0)
        return true;
    var rx = new RegExp(val.validationexpression);
    var matches = rx.exec(value);
    
    //---  Add / Remove Error Class
    var triggeredSiblings = 0;
    if (matches != null && value == matches[0]) {
        $(val).siblings('span').each(function () {
            if ($(this).isvalid == false) { triggeredSiblings = 1; }
        });
        if (triggeredSiblings == 0) { $(val).closest("div").removeClass("validationReq"); }
    } else {
        $(val).closest("div").addClass("validationReq");
    }

    return (matches != null && value == matches[0]);
}

//CreditCardTypeCheck
function CreditCardTypeCheck(ccnum) {
    var first = ccnum.charAt(0);
    var second = ccnum.charAt(1);
    var third = ccnum.charAt(2);
    var fourth = ccnum.charAt(3);
    var ve = new RegExp('^(4026|417500|4405|4508|4844|4913|4917)');
    var mc = new RegExp('^(5[1-5])');
    var ma = new RegExp('^(5018|5020|5038|5893|6304|6759|6761|6762|6763)');
    var v = new RegExp('^(4)');

    if (v.test(ccnum)) {
        if (ve.test(ccnum)) {
            // visa electron
            document.getElementById("mastercard").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/mastercard-curved-32px-bw.png";
            document.getElementById("visa").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/visa-curved-32px-bw.png";
            document.getElementById("visaElectron").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/visa-electron-curved-32px.png";
            document.getElementById("maestro").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/maestro-curved-32px-bw.png";
        } else {
            //Visa
            document.getElementById("mastercard").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/mastercard-curved-32px-bw.png";
            document.getElementById("visa").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/visa-curved-32px.png";
            document.getElementById("visaElectron").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/visa-electron-curved-32px-bw.png";
            document.getElementById("maestro").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/maestro-curved-32px-bw.png";
        }
    } else if (mc.test(ccnum)) {
        // Mastercard
        document.getElementById("mastercard").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/mastercard-curved-32px.png";
        document.getElementById("visa").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/visa-curved-32px-bw.png";
        document.getElementById("visaElectron").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/visa-electron-curved-32px-bw.png";
        document.getElementById("maestro").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/maestro-curved-32px-bw.png";
    } else if (ma.test(ccnum)) {
        // Maestro
        document.getElementById("mastercard").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/mastercard-curved-32px-bw.png";
        document.getElementById("visa").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/visa-curved-32px-bw.png";
        document.getElementById("visaElectron").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/visa-electron-curved-32px-bw.png";
        document.getElementById("maestro").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/maestro-curved-32px.png";
    } else {
        document.getElementById("mastercard").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/mastercard-curved-32px.png";
        document.getElementById("visa").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/visa-curved-32px.png";
        document.getElementById("visaElectron").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/visa-electron-curved-32px.png";
        document.getElementById("maestro").src = "https://www.assets.vehicletax.service.gov.uk/vehicletax/Assets/Images/maestro-curved-32px.png";
    }


    /*
    * Calling the prepareHelp() function when the pages is loaded 
    * in a browser.
    */
    window.onload = function () {
        prepareHelp();
    };

    /**
    * Opens window with specified url.
    */
    function openWindow(url) {
        var windowName = "sameName"; // avoid opening many windows
        var options = "toolbar=no, menubar=no, resizeable=no, scrollbars=yes, status=no, titlebar=no, width=500, height=500, top=300, left=300";

        window.open(url, windowName, options, false);

    }

    /**
    * Close the window popup.
    */
    function closeWindow() {
        window.close();
    }

    /**
    * This function will be used to find all elements with a specific class
    * attribute. For example to find the anchor element with a given class value.
    * 
    * @param element -
    *            element to search DOM for.
    * @param value -
    *            value of attributes to search for.
    * @return array of elements with the specified attribute.
    */

    var getElementsByClassAttribute = function (element, value) {
        var results = [];
        var list = document.getElementsByTagName(element);
        for (var i = 0; i < list.length; i++) {
            if (list[i].className == value) {
                results.push(list[i]);
            }
        }
        return results;
    };

    /*
    * This method is called at onload to replace the href value of anchor links
    * with class name "helpPopUp" with an onclick attribute to call the openWindow
    * function.
    * 
    */
    function prepareHelp() {
        // find all elements with class name helpPop in the DOM
        var l = getElementsByClassAttribute('a', 'helpPopUp');
        // for each element find the value of the 'href' - store temporarily.
        for (i = 0; i < l.length; i++) {
            if (l[i].href !== '') {
                l[i].href;
                // add an onclick function to the element with the
                // href as an argument when calling function openWindow.
                l[i].onclick = function (i) {
                    var url = l[i].href;
                    return function (e) {
                        openWindow(url);
                        return false;
                    }
                } (i);
                // set href to nothing
                l[i].href = '';
            }
        }
    } 

}

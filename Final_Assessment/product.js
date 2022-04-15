/*I declare that my Final assessment assignment is wholly my own work in
accordance with Seneca Academic Policy. No part of this assignment has been
copied manually or electronically from any other source (including web sites)
except for the information supplied by the WEB222 instructor and / or made
available in this assignment for my use.
I also declare that no part of this assignment has been distributed to other
students.
Name: Sujan Maharjan
Dated: 2022-04-15*/

window.onload = function () {
    var prodDesc = document.querySelector('#productDesc');
    var errormsg = document.querySelector('#errorMsg');
    var errormsg_1 = document.querySelector('#errorMsg_1');
    var errormsg_2 = document.querySelector('#errorMsg_2');
    var button_1 = document.querySelector('#button_1');
    var username = document.querySelector('#username');
    var supplier = document.querySelector('#supplier');
    var supplier_1 = document.querySelector('#supplier_1');
    var supplier_2 = document.querySelector('#supplier_2');

    var flag = "";

    validateTextArea = () => {
        let done = false;
        debugger;
        if (prodDesc.value[0] >= 'a' && prodDesc.value[0] <= 'z' || !isNaN(Number(prodDesc.value[0]))) {
            flag = "Product description must start with capital alphabet only"
            errormsg.innerText = flag;
        }
        else if (prodDesc.value.length < 20) {
            flag = "Product description must be at least 20 characters"
            errormsg.innerText = flag;
        }
        else {
            errormsg.innerText = " "
            done = true;
        }
        return done;
    }

    validateName = () => {
        let done = false;
        if (!isNaN(Number(username.value[0]))) {
            flag = "Username must start with alphabetic character"
            errormsg_1.innerText = flag;
        }
        else if (username.value.length < 6) {
            flag = "Username must be at least 6 characters"
            errormsg_1.innerText = flag;
        }
        else {
            errormsg_1.innerText = " "
            done = true;
        }
        return done;
    }

    validateSupplier = () => {
        let done = false;

        if (supplier.checked != true) {
            if (supplier_1.checked != true) {
                if (supplier_2.checked != true) {
                    flag = "At least one option must be selected from supplier status"
                    errormsg_2.innerText = flag;
                }
                else {
                    errormsg_2.innerText = " "
                    done = true;
                }
            }
            else {
                errormsg_2.innerText = " "
                done = true;
            }
        }
        else {
            errormsg_2.innerText = " "
            done = true;
        }
        return done;
    }

    submitForm = (e) => {
        let returnValue = true;
        let isTrue = validateTextArea();
        let isTrue_1 = validateName();
        let isTrue_2 = validateSupplier();
        if (!isTrue || !isTrue_1 || !isTrue_2) {
            returnValue = false;
        }
        else {
            alert("Product registration successful");
        }
        return returnValue;
    }
}
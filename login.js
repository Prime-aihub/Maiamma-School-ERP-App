
/* =====================================
   MAIAMMA SCHOOL HUB LOGIN
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const roleSelect =
    document.getElementById("userRole");

    const loginIdentifier =
    document.getElementById("email");

    const password =
    document.getElementById("password");

    const togglePassword =
    document.getElementById("togglePassword");

    const loginBtn =
    document.getElementById("loginBtn");

    /* ==========================
       ROLE CHANGE
    ========================== */

    roleSelect.addEventListener("change", () => {

        const role =
        roleSelect.value;

        if(role === "parent"){

            loginIdentifier.placeholder =
            "Parent Email or Mobile";

        }

        else if(role === "student"){

            loginIdentifier.placeholder =
            "Student ID";

        }

        else if(role === "teacher"){

            loginIdentifier.placeholder =
            "Employee ID";

        }

        else if(role === "admin"){

            loginIdentifier.placeholder =
            "Admin ID";

        }

    });

    /* ==========================
       PASSWORD TOGGLE
    ========================== */

    togglePassword.addEventListener("click", () => {

        if(password.type === "password"){

            password.type = "text";

        }else{

            password.type = "password";
        }

    });

    /* ==========================
       LOGIN
    ========================== */

    loginBtn.addEventListener("click", () => {

        const role =
        roleSelect.value;

        if(role === "parent"){

            window.location.href =
            "parent-dashboard.html";
        }

        else if(role === "student"){

            window.location.href =
            "student-dashboard.html";
        }

        else if(role === "teacher"){

            window.location.href =
            "teacher-dashboard.html";
        }

        else if(role === "admin"){

            window.location.href =
            "admin-dashboard.html";
        }

    });

});


let jsonEmployeeInfo = `{
           "name": "Aleix Melon",
           "id": "E00245",
           "role": ["Dev", "DBA"],
           "doj": "11-12-2019",
           "married" : false,
           "address": {
            "stress": "32, Laham St.",
            "city": "Innsbruck",
            "country": "Austria"
           },
           "referred-by" : "E0012"

        }`;
        const employee = JSON.parse(jsonEmployeeInfo); // Convert from JSON format to object
        const arrayRole = employee.role;
        for (const role of arrayRole) {
            if (role=="Dev") {
                console.log(role);
            }
        }
       
          const employeeName = employee.name;
            let employeeSplit = employeeName.split(" ");
            console.log(employeeSplit);

       
            let employeeLength = employeeSplit[employeeSplit.length-1];
            console.log(employeeLength);

            const employeeDoj = employee.doj;
            let employeeSplit1 = employeeDoj.split("-");
            console.log(employeeSplit1);

            let employeeYear = employeeSplit1[employeeSplit1.length-1];
            console.log(employeeYear);


import Employee from "./Employee";

export function searchEmployee(){

    if(!localStorage['employees']){
        localStorage['employees'] = '[]';
    }
    let employees = localStorage['employees'];
    employees = JSON.parse(employees);

    return employees;

}

export function removerEmployee(id: string){
    let employees = searchEmployee();
    let indice = employees.findIndex((customer:Employee) => customer.id === id);
    employees.splice(indice,1);
    localStorage['employees'] = JSON.stringify(employees);

}

export function saveEmployee(customer:Employee){
    
    let employees = searchEmployee();
    if(customer.id){
        //editar
        let indice = employees.findIndex((c:Employee) => c.id === customer.id);
        employees[indice] = customer;
    }
    else{
        //nuevo
        customer.id = String(Math.round(Math.random() * 1000));
        employees.push(customer);
    }
 
    localStorage['employees'] = JSON.stringify(employees);
}

export function searchEmployeeById(id:string){
       
    let employees = searchEmployee();
    return employees.find((customer:Employee) => customer.id == id);
    
}
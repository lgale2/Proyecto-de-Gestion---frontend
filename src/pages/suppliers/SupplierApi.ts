import Supplier from "./Supplier";

export function searchSupplier(){

    if(!localStorage['suppliers']){
        localStorage['suppliers'] = '[]';
    }
    let suppliers = localStorage['suppliers'];
    suppliers = JSON.parse(suppliers);

    return suppliers;

}

export function removerSupplier(id: string){
    let suppliers = searchSupplier();
    let indice = suppliers.findIndex((customer:Supplier) => customer.id === id);
    suppliers.splice(indice,1);
    localStorage['suppliers'] = JSON.stringify(suppliers);

}

export function saveSupplier(customer:Supplier){
    
    let suppliers = searchSupplier();
    if(customer.id){
        //editar
        let indice = suppliers.findIndex((c:Supplier) => c.id === customer.id);
        suppliers[indice] = customer;
    }
    else{
        //nuevo
        customer.id = String(Math.round(Math.random() * 1000));
        suppliers.push(customer);
    }
 
    localStorage['suppliers'] = JSON.stringify(suppliers);
}

export function searchSupplierById(id:string){
       
    let suppliers = searchSupplier();
    return suppliers.find((customer:Supplier) => customer.id == id);
    
}
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import '../../theme/variables.css';
import { add, addCircle, pencil, pencilOutline, pencilSharp, trash, trashBinSharp, trashSharp } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { searchEmployee, removerEmployee } from './EmployeeApi';
import Employee from './Employee';



const EmployeeList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [empleados, setEmpleados] = useState<Employee[]>([]);
  const history = useHistory();

  useEffect(()=>{
    search();
  }, [history.location.pathname])

  const search = () =>{
   
    let result = searchEmployee();

    setEmpleados(result);
  }

  const remove = (id: string) => {
    removerEmployee(id);
    search();
  }

  
  const addEmployee = () =>{
    history.push('/page/Empleado/new');
  }

  const editEmployee = (id:string) =>{
    history.push('/page/Empleado/' + id);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
    
      <IonContent>
        <IonCard>

          <IonTitle>Gestión de Empleados</IonTitle>

          <IonItem>
            <IonButton onClick={addEmployee} color='tertiary' shape='round' size='default' fill='solid' slot='end'>
              <IonIcon icon={addCircle}/>
              Agregar Empleado
            </IonButton>
          </IonItem>

   <IonGrid>

    
   </IonGrid>
          
      <IonGrid className='table'>

      <IonRow>
          <IonCol size="12" size-sm="2">
            NOMBRE
          </IonCol>
          <IonCol size="12" size-sm="2">
            EMAIL
          </IonCol>
          <IonCol size="12" size-sm="2">
            TELEFONO
          </IonCol>
          <IonCol size="12" size-sm="3">
            DIRECCION
          </IonCol>
          <IonCol size="12" size-sm="2">
            ACCIONES
          </IonCol>
        </IonRow>

        {empleados.map((empleado:Employee) =>   <IonRow>
          <IonCol size="12" size-sm="2">
            {empleado.firstname} {empleado.lastname}
          </IonCol>
          <IonCol size="12" size-sm="2">
            {empleado.email}
          </IonCol>
          <IonCol size="12" size-sm="2">
            {empleado.phone}
          </IonCol>
          <IonCol size="12" size-sm="3">
            {empleado.address}
          </IonCol>
          <IonCol  size="12" size-sm="2">
            <IonButton shape="round" fill="outline" size="small" color="primary" onClick={()=> editEmployee(String(empleado.id))}>
           <IonIcon icon={pencilSharp} />
           </IonButton>
           <IonButton shape="round" fill="outline" size="small" color="danger" onClick={()=>remove(String(empleado.id))}>
           <IonIcon icon={trashSharp}/>
           </IonButton>
          </IonCol>
         
        </IonRow> )}

    



 
      </IonGrid>
      </IonCard>
      </IonContent>
     
 


      
      </IonContent>
    </IonPage>
  );
};

export default EmployeeList;

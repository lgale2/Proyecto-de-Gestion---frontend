import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import '../../theme/variables.css';
import { add, addCircle, checkmark, pencil, pencilOutline, pencilSharp, trash, trashBinSharp, trashSharp } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { searchEmployee, removerEmployee, saveEmployee, searchEmployeeById } from './EmployeeApi';
import Employee from './Employee';



const EmployeeEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id:string; }>();
  const [employee, setEmployee] = useState<Employee>({});
  const history = useHistory();


  useEffect(()=>{
    search();
  }, [history.location.pathname])

  const search = () =>{

    if(id!=='new'){
        let result = searchEmployeeById(id);
        setEmployee(result);
    }

  }


  const save = () =>{
    //employee.id = Math.round(Math.random() * 1000);
    saveEmployee(employee);
    history.push('/page/Empleados')
   
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

          <IonTitle> {id == 'new' ? 'Agregar Empleado' : 'Editar Empleado'}</IonTitle>


       
    

    <IonRow>
        <IonCol>
        <IonInput onIonChange={e=> employee.firstname = String(e.detail.value)}
         value={employee.firstname} label="Nombre" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
        <IonCol>
        <IonInput onIonChange={e=> employee.lastname =String(e.detail.value)}
         value={employee.lastname} label="Apellido" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
    </IonRow>
    

      <br />
      <IonRow>
        <IonCol>
        <IonInput label="Correo Electrónico" onIonChange={e=> employee.email =String(e.detail.value)}
         value={employee.email} labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
        <IonCol>
        <IonInput label="Dirección" onIonChange={e=> employee.address =String(e.detail.value)}
         value={employee.address} labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
    </IonRow>
     
      <br />

      <IonRow>
        <IonCol> 
      <IonInput label="Número de teléfono" onIonChange={e=> employee.phone =String(e.detail.value)}
       value={employee.phone} labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
      </IonCol>
    </IonRow>
     
  
          <IonItem>
            <IonButton onClick={save} color='success' shape='round' size='default' fill='solid' slot='end'>
              <IonIcon icon={checkmark}/>
              Guardar
            </IonButton>
          </IonItem>

  
          
  
      </IonCard>
      </IonContent>
     
 


      
      </IonContent>
    </IonPage>
  );
};

export default EmployeeEdit;


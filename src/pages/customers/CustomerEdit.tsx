import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import '../../theme/variables.css';
import { add, addCircle, checkmark, pencil, pencilOutline, pencilSharp, trash, trashBinSharp, trashSharp } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { searchCustomer, removerCustomer, saveCustomer, searchCustomerById } from './CustomerApi';
import Customer from './Customer';



const CustomerEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id:string; }>();
  const [customer, setCustomer] = useState<Customer>({});
  const history = useHistory();


  useEffect(()=>{
    search();
  }, [history.location.pathname])

  const search = () =>{

    if(id!=='new'){
        let result = searchCustomerById(id);
        setCustomer(result);
    }

  }


  const save = () =>{
    //customer.id = Math.round(Math.random() * 1000);
    saveCustomer(customer);
    history.push('/page/Clientes')
   
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

          <IonTitle> {id == 'new' ? 'Agregar Cliente' : 'Editar Cliente'}</IonTitle>


       
    

    <IonRow>
        <IonCol>
        <IonInput onIonChange={e=> customer.firstname = String(e.detail.value)}
         value={customer.firstname} label="Nombre" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
        <IonCol>
        <IonInput onIonChange={e=> customer.lastname =String(e.detail.value)}
         value={customer.lastname} label="Apellido" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
    </IonRow>
    

      <br />
      <IonRow>
        <IonCol>
        <IonInput label="Correo Electrónico" onIonChange={e=> customer.email =String(e.detail.value)}
         value={customer.email} labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
        <IonCol>
        <IonInput label="Dirección" onIonChange={e=> customer.address =String(e.detail.value)}
         value={customer.address} labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
    </IonRow>
     
      <br />

      <IonRow>
        <IonCol> 
      <IonInput label="Número de teléfono" onIonChange={e=> customer.phone =String(e.detail.value)}
       value={customer.phone} labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
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

export default CustomerEdit;


import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import '../../theme/variables.css';
import { add, addCircle, pencil, pencilOutline, pencilSharp, trash, trashBinSharp, trashSharp } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { searchCustomer, removerCustomer } from './CustomerApi';
import Customer from './Customer';



const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Customer[]>([]);
  const history = useHistory();

  useEffect(()=>{
    search();
  }, [history.location.pathname])

  const search = () =>{
   
    let result = searchCustomer();

    setClientes(result);
  }

  const remove = (id: string) => {
    removerCustomer(id);
    search();
  }

  
  const addCustomer = () =>{
    history.push('/page/Cliente/new');
  }

  const editCustomer = (id:string) =>{
    history.push('/page/Cliente/' + id);
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

          <IonTitle>Gestión de Clientes</IonTitle>

          <IonItem>
            <IonButton onClick={addCustomer} color='tertiary' shape='round' size='default' fill='solid' slot='end'>
              <IonIcon icon={addCircle}/>
              Agregar Cliente
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

        {clientes.map((cliente:Customer) =>   <IonRow>
          <IonCol size="12" size-sm="2">
            {cliente.firstname} {cliente.lastname}
          </IonCol>
          <IonCol size="12" size-sm="2">
            {cliente.email}
          </IonCol>
          <IonCol size="12" size-sm="2">
            {cliente.phone}
          </IonCol>
          <IonCol size="12" size-sm="3">
            {cliente.address}
          </IonCol>
          <IonCol  size="12" size-sm="2">
            <IonButton shape="round" fill="outline" size="small" color="primary" onClick={()=> editCustomer(String(cliente.id))}>
           <IonIcon icon={pencilSharp} />
           </IonButton>
           <IonButton shape="round" fill="outline" size="small" color="danger" onClick={()=>remove(String(cliente.id))}>
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

export default CustomerList;

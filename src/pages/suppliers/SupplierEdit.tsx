import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import '../../theme/variables.css';
import { add, addCircle, checkmark, pencil, pencilOutline, pencilSharp, trash, trashBinSharp, trashSharp } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { searchSupplier, removerSupplier, saveSupplier, searchSupplierById } from './SupplierApi';
import Supplier from './Supplier';



const SupplierEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id:string; }>();
  const [supplier, setSupplier] = useState<Supplier>({});
  const history = useHistory();


  useEffect(()=>{
    search();
  }, [history.location.pathname])

  const search = () =>{

    if(id!=='new'){
        let result = searchSupplierById(id);
        setSupplier(result);
    }

  }


  const save = () =>{
    //supplier.id = Math.round(Math.random() * 1000);
    saveSupplier(supplier);
    history.push('/page/Proveedores')
   
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

          <IonTitle> {id == 'new' ? 'Agregar Proveedor' : 'Editar Proveedor'}</IonTitle>


       
    

    <IonRow>
        <IonCol>
        <IonInput onIonChange={e=> supplier.firstname = String(e.detail.value)}
         value={supplier.firstname} label="Nombre" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
        <IonCol>
        <IonInput onIonChange={e=> supplier.lastname =String(e.detail.value)}
         value={supplier.lastname} label="Apellido" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
    </IonRow>
    

      <br />
      <IonRow>
        <IonCol>
        <IonInput label="Correo Electrónico" onIonChange={e=> supplier.email =String(e.detail.value)}
         value={supplier.email} labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
        <IonCol>
        <IonInput label="Dirección" onIonChange={e=> supplier.address =String(e.detail.value)}
         value={supplier.address} labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        </IonCol>
    </IonRow>
     
      <br />

      <IonRow>
        <IonCol> 
      <IonInput label="Número de teléfono" onIonChange={e=> supplier.phone =String(e.detail.value)}
       value={supplier.phone} labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
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

export default SupplierEdit;


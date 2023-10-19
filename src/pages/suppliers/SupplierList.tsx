import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import '../../theme/variables.css';
import { add, addCircle, pencil, pencilOutline, pencilSharp, trash, trashBinSharp, trashSharp } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { searchSupplier, removerSupplier } from './SupplierApi';
import Supplier from './Supplier';



const SupplierList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [proveedores, setProveedores] = useState<Supplier[]>([]);
  const history = useHistory();

  useEffect(()=>{
    search();
  }, [history.location.pathname])

  const search = () =>{
   
    let result = searchSupplier();

    setProveedores(result);
  }

  const remove = (id: string) => {
    removerSupplier(id);
    search();
  }

  
  const addSupplier = () =>{
    history.push('/page/Proveedor/new');
  }

  const editSupplier = (id:string) =>{
    history.push('/page/Proveedor/' + id);
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

          <IonTitle>Gestión de Proveedores</IonTitle>

          <IonItem>
            <IonButton onClick={addSupplier} color='tertiary' shape='round' size='default' fill='solid' slot='end'>
              <IonIcon icon={addCircle}/>
              Agregar Proveedor
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

        {proveedores.map((proveedor:Supplier) =>   <IonRow>
          <IonCol size="12" size-sm="2">
            {proveedor.firstname} {proveedor.lastname}
          </IonCol>
          <IonCol size="12" size-sm="2">
            {proveedor.email}
          </IonCol>
          <IonCol size="12" size-sm="2">
            {proveedor.phone}
          </IonCol>
          <IonCol size="12" size-sm="3">
            {proveedor.address}
          </IonCol>
          <IonCol  size="12" size-sm="2">
            <IonButton shape="round" fill="outline" size="small" color="primary" onClick={()=> editSupplier(String(proveedor.id))}>
           <IonIcon icon={pencilSharp} />
           </IonButton>
           <IonButton shape="round" fill="outline" size="small" color="danger" onClick={()=>remove(String(proveedor.id))}>
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

export default SupplierList;

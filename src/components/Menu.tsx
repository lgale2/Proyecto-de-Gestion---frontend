import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, people,peopleOutline, briefcase, briefcaseOutline, clipboard, clipboardOutline , trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Clientes',
    url: '/page/Clientes',
    iosIcon: peopleOutline,
    mdIcon: people
  },
  {
    title: 'Empleados',
    url: '/page/Empleados',
    iosIcon: briefcaseOutline,
    mdIcon: briefcase
  },
  {
    title: 'Proveedores',
    url: '/page/Proveedores',
    iosIcon: clipboardOutline,
    mdIcon: clipboard
  },
  {
    title: 'Inventario',
    url: '/page/Inventario',
    iosIcon: clipboardOutline,
    mdIcon: clipboard
  },
 
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Sistema de Gestion</IonListHeader>
          <IonNote>Manejo de registros de todos los datos</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

       
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

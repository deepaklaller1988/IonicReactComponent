import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonList , IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            {/* <IonTitle size="large">Blank</IonTitle>  */}
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding ion-text-center">
        <IonList>
          <IonItem routerLink="/login">
            <IonLabel>Login</IonLabel>
          </IonItem>
          <IonItem routerLink="/login">
            <IonLabel>Signup</IonLabel>
          </IonItem>
        </IonList>
          </IonContent>
        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;

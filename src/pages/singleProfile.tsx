import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> {}

  const Singleprofile: React.FC<ResetProps> = ({ match }) => {
    const history = useHistory();
    const [users, setUsers] = useState<any>();
    useEffect(() => {
      const api = axios.create({
          baseURL: `https://reqres.in/api`
      })
      api.get('/users/' + match.params.id)
          .then(res => {   
            console.log(res,'res')
              setUsers(res.data.data)
          })
          .catch(error=>{
              console.log("Error fetching data")
          })
    }, [])
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonTitle>Dasboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding ion-text-center">
          <IonGrid>
            <IonRow>
                <IonCol>
                    <h4>Welcome: {match.params.id}</h4>
                    <IonItemDivider></IonItemDivider>
                </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
              
            <IonCol>
            
            
                  <IonItem >
                    <IonAvatar>
                        <img src='https://reqres.in/img/faces/2-image.jpg' />
                    </IonAvatar>
                    <IonLabel>
                        <h2 style={{ paddingLeft: "10px" }}>{users?.first_name + " " + users?.last_name} </h2>

                        <IonItem routerLink={'/Singleprofile/' + users?.id}>
                        <p style={{ paddingLeft: "10px" }}>{users?.email}</p>
                       </IonItem>
                       
                    </IonLabel>
                  </IonItem>
        
           
            </IonCol>
            </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };

  export default Singleprofile;
  
import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import firebase from '../Firebase';
import './Tab1.css';

const Tab1: React.FC = () => {


  async function fetchData() {

    var ref = firebase.database().ref('subs');

    await ref.once("value")
      .then(function(snapshot) {  
      snapshot.forEach(function(childSnapshot) { 
        setAllVidIDs(allVidIDs => [...allVidIDs, childSnapshot.child("id").val().toString() || "nada"]);
            
           
         });
      

      });
  }

  const [ allVidIDs, setAllVidIDs ] = useState<string[]>([]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        {console.log(allVidIDs)}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;

import { IonButton, IonCard, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useDialog } from '../hooks/useDialog';
import prompt from '../pages/Dialog';
import { trash } from 'ionicons/icons';



const Home: React.FC = () => {

  const completedTask: string[] = [
    "Create Task Dialog",
    "Delete Tasks",
    "Styling & Theme",

];


const displayCompleteList = () => {
  return completedTask.map((top) => {
      return (
          <IonItem key={ top }>
            <IonItemSliding>
              <IonItemOptions side='start'>
              <IonItemOption color={'danger'}>
                <IonIcon slot='end' icon={trash}></IonIcon>
              </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
                  <IonCheckbox justify='end'>
                    <IonLabel>{ top }</IonLabel>
                  </IonCheckbox>
                
          </IonItem>
    
      );
  });
}

const incompletedTask: string[] = [
  "Create REST API Endpoint",
  "Displat Task List",
  "Toggle Tasks"

];

const displayIncompleteList = () => {
  return completedTask.map((bottom) => {
      return (
          <IonItem key={ bottom }>
            <IonItemSliding>
              <IonItemOptions side='start'>
              <IonItemOption color={'danger'}>
                <IonIcon slot='end' icon={trash}></IonIcon>
              </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
              <IonCheckbox justify='end'>
                <IonLabel>{ bottom }</IonLabel>
              </IonCheckbox>
          </IonItem>
    
      );
  });
}



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonTitle>Task List</IonTitle>
        </IonToolbar>
      </IonHeader>
              <h2>Incomplete</h2>
          <IonContent fullscreen>
            <IonList>
              <IonItem>
                   {displayIncompleteList()}
              </IonItem>
                <h2>Complete</h2>
              <IonItem>
                   {displayCompleteList()}
              </IonItem>
            </IonList>
              <IonButton shape='round' color="success" onClick={prompt}>
                            Add Task
              <IonIcon slot='end' icon='plus'></IonIcon>
            </IonButton>
          </IonContent>
    </IonPage>
  );
};

export default Home;

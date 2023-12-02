import { render } from '@testing-library/react';
import { useDialog } from '../hooks/useDialog';
import completedList from '../pages/Home';
import displayCompleteList from '../pages/Home';
import displayIncompleteList from '../pages/Home';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';



const Dialog: React.FC = () => {
  const { showPrompt } = useDialog();


const prompt = async () => {
        showPrompt('Task Title', 'Submit Assignment').then(task => {
        return(completedList);
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
                   
              </IonItem>
                <h2>Complete</h2>
              <IonItem>
                   
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

export default Dialog;
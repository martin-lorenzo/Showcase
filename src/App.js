import TaskList from './components/TaskList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function hideModalHandler() {
    setModalIsVisible(false)
  }

  function showModalHandler() {
    setModalIsVisible(true)
  }

  return (
    <>
      <MainHeader onCreateTask={showModalHandler} />
      <main>
        <TaskList
          posting={modalIsVisible}
          stopPosting={hideModalHandler}
        />
      </main>
    </>
  )
}

export default App;

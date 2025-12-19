import { useNavigate } from "react-router-dom";

const styles = {
  button: {
    fontSize: '2.2em', fontWeight: 500
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    gap: 60,
    marginBottom: 10,
    marginTop: 5,
  }
}

function Bar() {
  const navigate = useNavigate()

  function newNote() {
    navigate('/note?content=')
  }

  return (
    <div style={styles.toolbar} role='toolbar'>
      <button style={styles.button}>[scratch]</button>
      <button style={styles.button}>[save]</button>
      <button style={styles.button} onClick={newNote}>[new]</button>
      <button style={styles.button}>[list]</button>
      <button style={styles.button}>[upload bg]</button>
      <button style={styles.button}>[quit]</button>
    </div>
  )
}

export default Bar;

import ActiveUsers from '../components/ActiveUsers'
import Messages from '../components/Messages'
import Form from '../components/Form'

export default function Home() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Chat App</h1>

      <section
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '90vh',
          justifyContent: 'space-evenly',
          overflow: 'hidden',
        }}
      >
        <ActiveUsers />

        <article>
          <Messages />

          <Form />
        </article>
      </section>
    </>
  )
}

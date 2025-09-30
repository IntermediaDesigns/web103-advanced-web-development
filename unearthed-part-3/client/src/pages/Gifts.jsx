import Card from '../components/Card'

const Gifts = ({ gifts }) => {
  return (
    <main>
      <div className="gifts-container">
        {gifts && gifts.length > 0 ? (
          gifts.map((gift) => (
            <Card key={gift.id} gift={gift} />
          ))
        ) : (
          <h2>No Gifts Available 😞</h2>
        )}
      </div>
    </main>
  )
}

export default Gifts
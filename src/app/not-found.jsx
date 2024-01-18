import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h2>Non trouvé</h2>
      <p>Il semblerait que la page que vous cherchez n'existe pas.</p>
      <Link href="/">Revenir sur l'accueil</Link>
    </div>
  )
}

export default NotFound
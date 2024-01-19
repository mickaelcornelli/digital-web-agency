import { addPost, deletePost } from "@/lib/action"

const ServerActionTestPage = () => {

  // const actionInComponent = async ()=>{
  //   "use server"
  //   console.log("it works!")
  // }

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="Titre" name="title"/>
        <input type="text" placeholder="Description" name="desc"/>
        <input type="text" placeholder="Alias" name="slug"/>
        <input type="text" placeholder="ID utilisateur" name="userId"/>
        <button>Créer</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="ID du post" name="id" />
        <button>Supprimer</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage
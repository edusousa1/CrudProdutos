import axios from "axios";
type props = {
    productId: number
}
function handleClick(id : number){
    axios.delete(`http://localhost:8080/produtos/${id}`)
    .then(response => console.log("Produto excluido"))
    .catch(error => console.error(error))
}
function ButtonDelete({productId} : props) {
    return (
        <div className="btn btn-danger" onClick={() => handleClick(productId)}>Excluir</div>
    )
}
export default ButtonDelete
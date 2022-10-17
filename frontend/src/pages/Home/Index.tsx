import axios from "axios";
import { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom'
import { useForm} from "react-hook-form";
import ButtonDelete from "../../components/ButtonDelete/Index";
import { product } from "../../models/product";
import "./Styles.css"

function App() {
  const [products, setProducts] = useState<product[]>([])
  useEffect(() => {
    axios.get('http://localhost:8080/produtos')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => console.log(error))

  }, [products])
  const { register, handleSubmit,formState: { errors },getValues} = useForm({
    defaultValues: {
      nome: "",
      preco: 0,
      fabricacao: ""
    }})
    const onSubmit = () => {
      const valores = {
        name: getValues("nome"),
        preco: getValues("preco"),
        fabricacao: new Date(getValues("fabricacao"))
      }
      axios.post('http://localhost:8080/produtos',valores)
      .then(response => {console.log("cadastrado")})
      .catch(error => {console.log(error)})
    };

  return (
    <div className="container">
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Novo Produto</button>
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Id</td>
            <td>Nome</td>
            <td>preço</td>
            <td>Data de fabricação</td>
            <td colSpan={2}></td>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>R$ {product.preco.toFixed(2)}</td>
                <td>{new Date(product.fabricacao).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</td>
                <td>
                <Link
                  to={`/update/${product.id}`}>
                  <div className="btn btn-warning">Editar</div>
                  </Link>
                  </td>
                <td><ButtonDelete productId={product.id} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Novo produto</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="name" className="col-form-label">Nome:</label>
                  <input  {...register("nome", { required: true })} defaultValue="" type="text" className="form-control" placeholder="Digite o nome do produto" />
                  {errors.nome && <span>Campo obrigatório</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="preco" className="col-form-label">Preço:</label>
                  <input  {...register("preco", { required: true, maxLength: 10 })}  type="number" className="form-control" placeholder="Digite o preço do produto" />
                  {errors.preco && <span>Campo obrigatório</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="fabricacao" className="col-form-label">Data de fabricação:</label>
                  <input type="date" {...register("fabricacao", { required: true })} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

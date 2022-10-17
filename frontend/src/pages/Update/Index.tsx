import axios from "axios";
import {useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
function Update() {
    let { id } = useParams();
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm({
        defaultValues: {
            nome: "",
            preco: 0,
            fabricacao: ""
        }
    })
    const onSubmit = () => {
        const valores = {
            name: getValues("nome"),
            preco: getValues("preco"),
            fabricacao: new Date(getValues("fabricacao"))
        }
        axios.put(`http://localhost:8080/produtos/${id}`, valores)
            .then(response => { console.log("atualizado com sucesso") })
            .catch(error => { console.log(error) })
    };
    return (
        <div className="container">
            <h1>Update page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name" className="col-form-label">Nome:</label>
                    <input  {...register("nome", { required: true })} defaultValue="" type="text" className="form-control" placeholder="Digite o nome do produto" />
                    {errors.nome && <span>Campo obrigatório</span>}
             
                    <label htmlFor="preco" className="col-form-label">Preço:</label>
                    <input  {...register("preco", { required: true, maxLength: 10 })} type="number" className="form-control" placeholder="Digite o preço do produto" />
                    {errors.preco && <span>Campo obrigatório</span>}
                
                
                    <label htmlFor="fabricacao" className="col-form-label">Data de fabricação:</label>
                    <input type="date" {...register("fabricacao", { required: true })} />

                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}
export default Update
import FormCard from "../components/formComponents/FormCard";
import InputForm from "../components/formComponents/InputForm";
import * as Yup from "yup";
import swal from 'sweetalert';
import StardewBackground from "../components/StardewBackground";
import {Link, Navigate} from "react-router-dom";
import Cookies from "js-cookie";
import MontarAxiosAPI from '../utils/axios'


export default function SignUp ({user}) {
    const Axios = MontarAxiosAPI()
    if (!user) {
    async function SignUp (event) {
        event.preventDefault ();

        let data = {
            name: document.querySelector ("#name").value,
            email: document.querySelector ("#email").value, 
            password: document.querySelector ("#password").value
        }

        let validation = Yup.object ().shape ({
            name: Yup.string().required().min(2),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(8)
          });

        validation.validate (data).then (()=>{
            Axios.post ("/users/create", data)
            .then(()=>{
                swal({
                    title: "Sucesso!",
                    text: "Aproveite a viagem!",
                    icon: "success",
                    button: "Ok!",
                  })
                  .then(()=>{
                    window.location = "/login";
                  });
            })
            .catch(()=>{
                swal({
                    title: "Erro!",
                    text: "Usuário ou senha incorretos!",
                    icon: "error",
                    button: "Ok!",
                  });
            })
        })
        .catch (()=>{
            swal({
                title: "Erro!",
                text: "Credenciais inválidas!",
                icon: "error",
                button: "Ok!",
              });
        });

    }

    return (
        <div>
            <StardewBackground />
            <form method = "POST" onSubmit={SignUp}>
        <FormCard title = "Cadastro" description = "Abordo desta nave você irá descobrir novas galáxias de filmes !" submitValue="Cadastrar" 
        href = "/login" hrefText = "Login" hrefTwo="#" hrefTwoText= "Recuperar Senha">
            <InputForm title = "Nome" type = "text" id = "name"/>
            <InputForm title = "Email" type = "email" id = "email"/>
            <InputForm title = "Senha" type = "password" id = "password"/>
        </FormCard>
        </form>
        </div>
    );}else {
        return <Navigate to = "/" replace/>;
      }
}
import FormCard from "../components/formComponents/FormCard";
import InputForm from "../components/formComponents/InputForm";
import * as Yup from "yup";
import swal from 'sweetalert';
import StardewBackground from "../components/StardewBackground";
import {Link, Navigate} from "react-router-dom";
import Cookies from "js-cookie";
import MontarAxiosAPI from '../utils/axios';
export default function Login () {

    const Axios = MontarAxiosAPI()
    async function Login (event) {
        event.preventDefault ();

        let data = {
            email: document.querySelector ("#email").value, 
            password: document.querySelector ("#password").value
        }

        let validation = Yup.object ().shape ({
            email: Yup.string().email().required(),
            password: Yup.string().required().min(8)
          });

        validation.validate (data).then (()=>{
            Axios.post ("/users/login", data)
            .then((response)=>{
                swal({
                    title: "Sucesso!",
                    text: "Aproveite a viagem!",
                    icon: "success",
                    button: "Ok!",
                  })
                  .then(()=>{
                    Cookies.set ("userToken" , JSON.stringify (response.data), {expires : 1});
                    window.location = "/";
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
        <div className = "relative">
            <StardewBackground />
            <form method = "POST" onSubmit={Login}>
        <FormCard title = "Login" description = "Aqui você entra num universo de filmes !" submitValue="Login" 
        href = "/signup" hrefText = "Cadastro" hrefTwo="#" hrefTwoText= "Recuperar Senha">
            <InputForm title = "Email" type = "email" id = "email"/>
            <InputForm title = "Senha" type = "password" id = "password"/>
        </FormCard>
        </form>
        </div>
    );
}

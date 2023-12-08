import FormCard from "../components/formComponents/formCard";
import InputForm from "../components/formComponents/InputForm";
import Axios from "axios";
import * as Yup from "yup";
import Cookies from "js-cookie";
import JSAlert from 'js-alert';

export default function Login () {

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
            Axios.post ("http://localhost:5000/luminacritics/users/login", data)
            .then((response)=>{
                Cookies.set ("userToken" , JSON.stringify (response.data), {expires : 1});
                window.location = "/";
            })
            .catch(()=>{
                JSAlert.alert("Este usuário já está cadastrado.").dismissIn(1000 * 3);
            })
        })
        .catch (()=>{
            JSAlert.alert("Insira seus dados para continuar!").dismissIn(1000 * 3);
        });

    }

    return (
        <form method = "POST" onSubmit={Login}>
        <FormCard title = "Login" description = "Aqui você entra num universo de filmes !" submitValue="Login" 
        href = "/signup" hrefText = "Cadastro" hrefTwo="#" hrefTwoText= "Recuperar Senha">
            <InputForm title = "Email" type = "email" id = "email"/>
            <InputForm title = "Senha" type = "password" id = "password"/>
        </FormCard>
        </form>
    );
}
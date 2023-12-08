import FormCard from "../components/formComponents/formCard";
import InputForm from "../components/formComponents/InputForm";
import Axios from "axios";
import * as Yup from "yup";
import Cookies from "js-cookie";
import JSAlert from 'js-alert';

export default function SignUp () {

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
            Axios.post ("http://localhost:5000/luminacritics/users/create", data)
            .then((response)=>{
                Cookies.set ("userToken" , JSON.stringify (response.data), {expires : 1});
                window.location = "/login";
            })
            .catch(()=>{
               JSAlert.alert("Nome do usuário ou senha incorreto. Tente novamente.").dismissIn(1000 * 3);
            })
        })
        .catch (()=>{
            JSAlert.alert("Insira suas credencias!").dismissIn(1000 * 3);
        });

    }

    return (
        <form method = "POST" onSubmit={SignUp}>
        <FormCard title = "Cadastro" description = "Abordo desta nave você irá descobrir novas galáxias de filmes !" submitValue="Cadastrar" 
        href = "/login" hrefText = "Login" hrefTwo="#" hrefTwoText= "Recuperar Senha">
            <InputForm title = "Nome" type = "text" id = "name"/>
            <InputForm title = "Email" type = "email" id = "email"/>
            <InputForm title = "Senha" type = "password" id = "password"/>
        </FormCard>
        </form>
    );
}
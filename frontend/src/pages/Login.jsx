import FormCard from "../components/formComponents/formCard";
import InputForm from "../components/formComponents/InputForm";
import Axios from "axios";
import * as Yup from "yup";
import Cookies from "js-cookie";

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
                console.log ("erro");
            })
        })
        .catch (()=>{
            console.log ("erro");
        });

    }

    return (
        <form method = "POST" onSubmit={Login}>
        <FormCard title = "Login" description = "Aqui você entra num universo de filmes !" submitValue="Login" 
        href = "#" hrefText = "Cadastro" hrefTwo="#" hrefTwoText= "Recuperar Senha">
            <InputForm title = "Email" type = "email" id = "email"/>
            <InputForm title = "Senha" type = "password" id = "password"/>
        </FormCard>
        </form>
    );
}
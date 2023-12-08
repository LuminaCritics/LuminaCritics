import FormCard from "../components/formComponents/formCard";
import InputForm from "../components/formComponents/InputForm";
import StardewBackground from "../components/StardewBackground";

export default function Login () {
    return (
        <div>
            <StardewBackground />
        <FormCard title = "Login" description = "Aqui você entra num universo de filmes !" submitValue="Login" 
        href = "#" hrefText = "Cadastro" hrefTwo="#" hrefTwoText= "Recuperar Senha">
            <InputForm title = "Email" type = "email"/>
            <InputForm title = "Senha" type = "password"/>
        </FormCard>
        </div>
    );
}
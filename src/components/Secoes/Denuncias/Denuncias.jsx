import { DenunciasStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import BotaoSecundario from "../../Elementos/Botoes/BotaoSecundario/BotaoSecundario";
import InputSecundario from "../../Elementos/InputSecundario/InputSecundario";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import emailjs from "emailjs-com";
import { useState } from "react";

const Denuncias = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const enviarDenuncia = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const serviceID = "service_jcfaj7a"; // Use o mesmo service ID ou substitua pelo adequado
        const templateID = "template_4deq5k1"; // Use o mesmo template ID ou substitua pelo adequado

        // Parâmetros para o template do EmailJS
        const templateParams = {
            to_name: "Equipe Pilotage", // Nome do destinatário
            from_name: formData.nome || "Denúncia Anônima",
            from_email: formData.email || "anonimo@denuncias.com",
            message: formData.mensagem,
        };

        emailjs
            .send(
                serviceID,
                templateID,
                templateParams,
                "fLcr3VAzG5leG_3In" // Substitua pelo User ID adequado se necessário
            )
            .then(
                (response) => {
                    alert("Denúncia enviada com sucesso!");
                    console.log("SUCCESS!", response.status, response.text);

                    // Limpar o formulário após envio
                    setFormData({
                        nome: "",
                        email: "",
                        mensagem: ""
                    });
                },
                (err) => {
                    alert("Ocorreu um erro ao enviar sua denúncia. Tente novamente.");
                    console.error("FAILED...", err);
                }
            );
    };

    return (
        <DenunciasStyle>
            <TituloPrimario className={"titulo"}>
                <strong>FORMULÁRIO PARA ENVIO DE DENÚNCIAS</strong>
            </TituloPrimario>

            <TextoCorrido className={"texto"}>
                Para enviar sua denúncia use o formulário abaixo. A sua identificação com nome e endereço de email é opcional, caso não queira se identificar deixe estes campos em branco e preencha somente o campo de mensagem com o texto de denúncia e envie
            </TextoCorrido>

            <form onSubmit={enviarDenuncia}>
                <div className={"inputs"}>
                    <InputSecundario
                        className={"form"}
                        placeholder={"Nome completo (opcional)"}
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>

                <div className={"inputs"}>
                    <InputSecundario
                        className={"form"}
                        placeholder={"E-mail (opcional)"}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className={"inputs"}>
                    <InputSecundario
                        className={"form-mensagem"}
                        placeholder={"Mensagem"}
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                    />
                </div>

                <BotaoSecundario type="submit">
                    Enviar
                </BotaoSecundario>
            </form>
        </DenunciasStyle>
    );
}

export default Denuncias;
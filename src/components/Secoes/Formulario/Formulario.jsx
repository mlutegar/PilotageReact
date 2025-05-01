import { FormularioStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import BotaoSecundario from "../../Elementos/Botoes/BotaoSecundario/BotaoSecundario";
import InputSecundario from "../../Elementos/InputSecundario/InputSecundario";
import emailjs from "emailjs-com";
import { useState } from "react";

const Formulario = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        cidade: "",
        mensagem: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const enviarEmail = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const serviceID = "service_jcfaj7a"; // Use o mesmo service ID ou substitua pelo da Pilotage
        const templateID = "template_4deq5k1"; // Use o mesmo template ID ou substitua pelo da Pilotage

        // Parâmetros para o template do EmailJS
        const templateParams = {
            to_name: "Equipe Pilotage", // Nome do destinatário
            from_name: formData.nome,
            from_email: formData.email,
            phone: formData.telefone,
            city: formData.cidade,
            message: formData.mensagem,
        };

        emailjs
            .send(
                serviceID,
                templateID,
                templateParams,
                "fLcr3VAzG5leG_3In" // Substitua pelo User ID da Pilotage se necessário
            )
            .then(
                (response) => {
                    alert("Mensagem enviada com sucesso para a equipe Pilotage!");
                    setFormData({
                        nome: "",
                        email: "",
                        telefone: "",
                        cidade: "",
                        mensagem: ""
                    });
                },
                (err) => {
                    alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
                    console.error("FAILED...", err);
                }
            );
    };

    return (
        <FormularioStyle>
            <TituloPrimario className={"titulo"}>
                <strong>Formulário de Contato</strong>
            </TituloPrimario>

            <form onSubmit={enviarEmail}>
                <div className={"inputs-grid"}>
                    <div className={"inputs"}>
                        <InputSecundario
                            placeholder={"Nome completo"}
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                        <InputSecundario
                            placeholder={"E-mail"}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={"inputs"}>
                        <InputSecundario
                            placeholder={"Telefone"}s
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                        />
                        <InputSecundario
                            placeholder={"Cidade"}
                            name="cidade"
                            value={formData.cidade}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={"inputs"}>
                        <InputSecundario
                            className={"mensagem"}
                            placeholder={"Mensagem"}
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={"btn"}>
                    <BotaoSecundario type="submit">
                        Enviar
                    </BotaoSecundario>
                </div>
            </form>
        </FormularioStyle>
    );
}

export default Formulario;
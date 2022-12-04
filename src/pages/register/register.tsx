import {
	FormWrapper,
	JaTenhoText,
	StyledCadastro,
	Subtitle,
	Terms,
	Title,
	TitleHighlight,
} from "./styles";
import Header from "../../components/header/header";
import InputComponent from "../../components/input/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdVerifiedUser } from "react-icons/md";
import Button from "../../components/button/button";
import { IFormData } from "./types";

const schema = yup
	.object({
		fullName: yup
			.string()
			.min(10, "Por favor, insira seu nome completo")
			.required("Campo obrigatório"),
		email: yup
			.string()
			.email("Email inválido")
			.required("Campo obrigatório"),
		password: yup
			.string()
			.min(4, "Sua senha deve conter no mínimo 4 caracteres")
			.required("Campo obrigatório"),
	})
	.required();

export const Cadastro = () => {
	const navigate = useNavigate();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormData>({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const onSubmit = async (formData: IFormData) => {
		try {
			const { data } = await api.post(
				`users?name=${formData.fullName}&email=${formData.email}&senha=${formData.password}`
			);

			if (data.length === 1) {
				navigate("/login");
			} else {
				alert(
					"Dados inválidos. Por favor, verifique e tente novamente"
				);
			}
		} catch {
			alert("Puts, falha nossa! Por favor, tente novamente.");
		}
	};

	return (
		<>
			<Header />
			<StyledCadastro>
				<div>
					<Title>
						A plataforma para você aprender com experts, dominar as
						principais tecnologias e entrar mais rápido nas empresas
						mais desejadas.
					</Title>
				</div>

				<div>
					<TitleHighlight>Comece agora grátis</TitleHighlight>

					<Subtitle>Crie sua conta e make the change._</Subtitle>

					<FormWrapper>
						<form onSubmit={handleSubmit(onSubmit)}>
							<InputComponent
								placeholder="Nome Completo"
								type="text"
								leftIcon={<MdVerifiedUser />}
								control={control}
								name="fullName"
							/>
							<InputComponent
								placeholder="Email"
								type="email"
								leftIcon={<MdEmail />}
								control={control}
								name="email"
							/>
							<InputComponent
								placeholder="Senha"
								type="password"
								leftIcon={<MdLock />}
								control={control}
								name="password"
							/>
							<Button
								label="Criar minha conta grátis"
								variant="secondary"
								type="submit"
							/>
						</form>

						<Terms>
							Ao clicar em "criar minha conta grátis", declaro que
							aceito as Políticas de Privacidade e os Termos de
							Uso da DIO.
						</Terms>

						<JaTenhoText>
							Já tenho conta.
							<a href="/login">Fazer login</a>
						</JaTenhoText>
					</FormWrapper>
				</div>
			</StyledCadastro>
		</>
	);
};


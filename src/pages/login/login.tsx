import { useForm } from "react-hook-form";
import { MdEmail, MdLock} from "react-icons/md"
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import InputComponent from "../../components/input/input";
import {
	Column,
	CriarText,
	EsqueciText,
	FormWrapper,
	Row,
	StyledLoginPage,
	SubtitleLogin,
	Title,
	TitleLogin,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import api from "../../services/api"
import { IFormData } from "./types";

const schema = yup.object ({
	email: yup.string().email("Email inválido").required("Campo obrigatório"),
	password: yup.string().min(4, "Sua senha deve conter no mínimo 4 caracteres").required("Campo obrigatório"),
}).required()

const LoginPage = () => {
	const navigate = useNavigate();

	const { control, handleSubmit, formState: {errors} } = useForm<IFormData>({
		resolver: yupResolver(schema),
		mode: "onChange"
	})

	const onSubmit = async (formData: IFormData) => {
		try {
			const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
			if (data.length === 1) {
				navigate("/feed")
			} else {
				alert("Email ou senha inválidos. Por favor, verifique e tente novamente")
			}
		} catch {
			alert("Puts, falha nossa! Por favor, tente novamente.")
		}
	};
	
	return (
		<>
			<Header />
			<StyledLoginPage>
				<Column>
					<Title>
						A plataforma para você aprender com experts, dominar as
						principais tecnologias e entrar mais rápido nas empresas
						mais desejadas.
					</Title>
				</Column>

				<Column>
					<FormWrapper>
						<TitleLogin>Faça seu cadastro</TitleLogin>
						<SubtitleLogin>
							Faça seu login and make the change._
						</SubtitleLogin>
						<form onSubmit={handleSubmit(onSubmit)}>
							<InputComponent placeholder="Email" type="email" leftIcon={<MdEmail />} control={control} name="email" errorMessage={errors?.email?.message}
							/>
							<InputComponent placeholder="Senha" type="password" leftIcon={<MdLock />} control={control} name="password" errorMessage={errors?.password?.message}
							/>
							<Button label="Entrar" variant="secondary"  type="submit"/>
						</form>
						<Row>
							<EsqueciText>Esqueci minha senha</EsqueciText>
							<CriarText>Criar conta</CriarText>
						</Row>
					</FormWrapper>
				</Column>
			</StyledLoginPage>
		</>
	);
};

export default LoginPage;

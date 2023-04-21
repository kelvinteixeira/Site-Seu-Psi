import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Rating,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import styled from "@emotion/styled";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import FavoriteIcon from "@mui/icons-material/Favorite";

type CardInfoProps = {
  nome: string;
  imagem: string;
  CRP: number;
  cidade: string;
  estado: string;
  notaAvaliacao: number;
  idiomas: string[];
  competencias: string[];
  valor: number;
  resumo: string;
  redesSocias: {
    instagram: string;
    linkedIn: string;
    email: string;
  };
};

export function InfoCard(props: CardInfoProps) {
  return (
    <Card variant="elevation" sx={{ width: 600, height: 570, margin: 3 }}>
      <StyledCardHeader></StyledCardHeader>
      <Grid container alignContent={"center"} justifyContent={"center"}>
        <Avatar
          alt={props.nome}
          src={props.imagem}
          sx={{ width: 220, height: 220, margin: 2 }}
        />

        <Grid sx={{ width: 300 }}>
          <Typography variant="body1" marginTop={3} fontSize={25}>
            {props.nome}
          </Typography>
          <Grid container>
            <Typography variant="body2">CRP: &nbsp; </Typography>
            <Typography
              color={"var(--main-color)"}
              variant="body2"
              fontWeight={800}
            >
              {props.CRP}
            </Typography>
          </Grid>
          <Typography variant="body2">
            {props.cidade}, {props.estado}
          </Typography>
          <Grid container alignItems={"center"}>
            <Rating name="read-only" value={props.notaAvaliacao} readOnly />
            <Typography
              color={"var(--main-color)"}
              variant="body2"
              fontWeight={600}
            >
              <a href="">(Avaliações)</a>
            </Typography>
          </Grid>
          <Typography variant="body1">Principais áreas de atuação</Typography>
          {props.competencias.map((items) => (
            <Box marginLeft={4}>
              <ul>
                <li>
                  <Typography variant="subtitle2">{items}</Typography>
                </li>
              </ul>
            </Box>
          ))}
          <Typography variant="overline" fontSize={18}>
            Valor: R$ {props.valor.toFixed(2)}/hr
          </Typography>
        </Grid>

        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
        >
          <Grid
            padding={2}
            container
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="body1" fontSize={20}>
              Um Pouco sobre mim:
            </Typography>
            <Typography variant="subtitle2">
              {props.resumo.substring(0, 220)}
            </Typography>
          </Grid>

          <Typography variant="body1" fontSize={20}>
            <FavoriteIcon />
            Gostou de mim? Entre em contato! <FavoriteIcon />
          </Typography>

          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Tooltip arrow title="Me segue!">
              <StyledIconButton
                onClick={() => window.open(props.redesSocias.instagram)}
              >
                <InstagramIcon />
              </StyledIconButton>
            </Tooltip>
            <Tooltip arrow title="Postagens profissionais">
              <StyledIconButton
                onClick={() => window.open(props.redesSocias.linkedIn)}
              >
                <LinkedInIcon />
              </StyledIconButton>
            </Tooltip>
            <Tooltip arrow title="Ou pelo email">
              <StyledIconButton
                onClick={() => window.open(props.redesSocias.email)}
              >
                <AttachEmailIcon />
              </StyledIconButton>
            </Tooltip>
          </Grid>

          <Typography variant="subtitle2">Ou</Typography>

          <Tooltip arrow title="Em desenvolvimento">
            <StyledButton
              sx={{ margin: 1 }}
              variant="text"
              startIcon={<ChatBubbleOutlineIcon />}
            >
              Manda mensagem!
            </StyledButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Card>
  );
}

export const StyledButton = styled(Button)`
  border-radius: 1rem;
  margin-bottom: 2rem;
  color: #000000;
  border: 1px solid #000000;
  text-transform: none;
  font-weight: 600;

  :hover {
    border: 1px solid var(--main-color);
    background-color: var(--main-color);
    color: #ffffff;
  }
`;

export const StyledIconButton = styled(IconButton)`
  color: var(--main-color);
`;

export const StyledCardHeader = styled(Box)`
  height: 1rem;
  background-color: var(--main-color);
`;

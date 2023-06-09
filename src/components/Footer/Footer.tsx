import {
  Box,
  Grid,
  Tooltip,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";

export function Footer() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        bottom: 0,
        height: 200,
      }}
    >
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid container margin={2} justifyContent={"space-evenly"}>
          <Grid>
            <Typography variant="body1" fontWeight={"bold"}>
              Plataforma
            </Typography>
            <Box marginLeft={4} marginBottom={3}>
              <ul>
                <li>
                  <Link underline="hover" color={"black"} variant="body2">
                    O que é o SeuPsi?
                  </Link>
                </li>
                <li>
                  <Typography variant="body2">
                    Como me cadastrar na plataforma?
                  </Typography>
                </li>
              </ul>
            </Box>
            <Grid container alignItems={"center"} justifyContent={"center"}>
              <Tooltip arrow title="Nossas postagens instagram!">
                <IconButton
                  sx={{
                    color: "var(--main-color)",
                  }}
                  onClick={() => window.open("link")}
                >
                  <InstagramIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Nossas postagens profissionais">
                <IconButton
                  sx={{
                    color: "var(--main-color)",
                  }}
                  onClick={() => window.open("link")}
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Nos mande um email">
                <IconButton
                  sx={{
                    color: "var(--main-color)",
                  }}
                  onClick={() => window.open("link")}
                >
                  <AttachEmailIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Nossas postagens no twitter">
                <IconButton
                  sx={{
                    color: "var(--main-color)",
                  }}
                  onClick={() => window.open("link")}
                >
                  <TwitterIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Nossas postagens no facebook">
                <IconButton
                  sx={{
                    color: "var(--main-color)",
                  }}
                  onClick={() => window.open("link")}
                >
                  <FacebookIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="body1" fontWeight={"bold"}>
              Ajuda
            </Typography>
            <Box marginLeft={4}>
              <ul>
                <li>
                  <Typography variant="body2">Perguntas frequentes</Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Política de privacidade
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">Termos de uso</Typography>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid>
            <Typography variant="body1" fontWeight={"bold"}>
              Contato
            </Typography>
            <Box marginLeft={4}>
              <ul>
                <li>
                  <Typography variant="body2">
                    Para nossos usuários email1@email.com
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Para nossas empresas email2@email.com
                  </Typography>
                </li>

                <li>
                  <Typography variant="body2" marginBottom={1}>
                    Para nossos especialistas email3@email.com
                  </Typography>
                </li>
              </ul>
            </Box>
            <Typography variant="body2" fontSize={10}>
              <i>
                Atendimento a clientes, colaboradores e empresas de segunda
                <br /> à sexta feira das 09h às 18h (exceto feriados).
              </i>
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="body1" fontWeight={"bold"}>
              Sobre o seu SeuPsi
            </Typography>
            <Box marginLeft={4}>
              <ul>
                <li>
                  <Typography variant="body2"> Blog </Typography>
                </li>
                <li>
                  <Typography variant="body2"> Trabalhe conosco </Typography>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" fontSize={11}>
          SeuPsi Serviços Ltda - CNPJ: 01.234.567/0001-89 | Endereço: R. sem
          nome, 00 - 58000-200 Campina Grande, Paraíba | Possui o Cadastro
          Nacional de Estabelecimento de Saúde (CNES) sob o protocolo 9763775.
        </Typography>
      </Grid>
    </Box>
  );
}

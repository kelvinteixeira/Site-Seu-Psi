import { formatDate } from "../../../../utils/date";

export const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

type Column = {
  id: "type" | "professional" | "date" | "situation";
  label: string;
  align?: "right";
  format?: (value: string) => string;
}

export const columns: readonly Column[] = [
  { id: "type", label: "Tipo do atendimento" },
  { id: "professional", label: "Profissional" },
  {
    id: "date",
    label: "Data da consulta",
    format: (value: string) => formatDate(new Date(value)),
  },
  { id: "situation", label: "Situação" },
];
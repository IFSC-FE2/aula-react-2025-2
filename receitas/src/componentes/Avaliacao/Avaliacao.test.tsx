import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Avaliacao from ".";

describe("O componente Avaliacao", () => {
  it("deve ser renderizado", () => {
    render(<Avaliacao />);
    const avaliacao = screen.getByTestId("avaliacao");

    expect(avaliacao).toBeInTheDocument();
  });

  it("deve renderizar 5 corações", () => {
    render(<Avaliacao />);
    const coracoes = screen.getAllByTestId("coracao");

    expect(coracoes.length).toBe(5);
  });

  it("deve permitir selecionar uma avaliacao", () => {
    render(<Avaliacao />);
    const coracoes = screen.getAllByTestId("coracao");

    fireEvent.click(coracoes[2]);
    const preenchidos = screen.getAllByTestId("preenchido");
    const vazados = screen.getAllByTestId("vazado");

    expect(preenchidos.length).toBe(3);
    expect(vazados.length).toBe(2);
  });

  it("deve alterar a avaliacao quando clicado novamente", () => {
    render(<Avaliacao />);
    const coracoes = screen.getAllByTestId("coracao");

    fireEvent.click(coracoes[2]);
    const preenchidos = screen.getAllByTestId("preenchido");
    const vazados = screen.getAllByTestId("vazado");

    expect(preenchidos.length).toBe(3);
    expect(vazados.length).toBe(2);

    const novosCoracoes = screen.getAllByTestId("coracao");
    fireEvent.click(novosCoracoes[0]);

    const novosPreenchidos = screen.getAllByTestId("preenchido");
    const novosVazados = screen.getAllByTestId("vazado");

    expect(novosPreenchidos.length).toBe(1);
    expect(novosVazados.length).toBe(4);
  });
});

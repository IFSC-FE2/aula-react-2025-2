import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Coracao from '.'

describe("O componente Coracao", () => {
    test("deve renderizar corretamente", () => {
        const aoSelecionar = vi.fn()
        render(<Coracao selecionado={false} aoSelecionar={aoSelecionar} />)
        const coracao = screen.getByTestId('coracao')

        expect(coracao).toBeInTheDocument();
    })

    test("deve renderizar um coracao vazado quando não selecionado", () => {
        const aoSelecionar = vi.fn()
        render(<Coracao selecionado={false} aoSelecionar={aoSelecionar} />)
        const coracaoVazado = screen.getByTestId('vazado')

        expect(coracaoVazado).toBeInTheDocument();
    })

    test("não deve renderizar um coracao preenchido quando não selecionado", () => {
        const aoSelecionar = vi.fn()
        render(<Coracao selecionado={false} aoSelecionar={aoSelecionar} />)
        const coracaoPreenchido = screen.queryByTestId("preenchido")

        expect(coracaoPreenchido).not.toBeInTheDocument()
    })

    test("deve renderizar um coracao preenchido quando selecionado", () => {
        const aoSelecionar = vi.fn()
        render(<Coracao selecionado={true} aoSelecionar={aoSelecionar} />)
        const coracaoPreenchido = screen.getByTestId('preenchido')

        expect(coracaoPreenchido).toBeInTheDocument();
    })

    test("não deve renderizar um coracao vazado quando selecionado", () => {
        const aoSelecionar = vi.fn()
        render(<Coracao selecionado={true} aoSelecionar={aoSelecionar} />)
        const coracaoVazado = screen.queryByTestId("vazado")

        expect(coracaoVazado).not.toBeInTheDocument()
    })

    test("deve chamar a função aoSelecionar quando clicado", () => {
        const aoSelecionar = vi.fn()
        render(<Coracao selecionado={false} aoSelecionar={aoSelecionar} />)
        const coracao = screen.getByTestId('coracao')

        fireEvent.click(coracao)

        expect(aoSelecionar).toHaveBeenCalled();
    })
})
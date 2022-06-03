import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm'

test('Initial conditions', ()=>{
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i})
    const confirmButton = screen.getByRole('button', {name: /confirm order/i})

    //Checkbox destildado y el botón desabilitado
    expect(checkbox).not.toBeChecked()
    expect(confirmButton).toBeDisabled()
})

test('Checking checkbox enables and disables button',()=>{
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i})
    const confirmButton = screen.getByRole('button', {name: /confirm order/i})

    //Checkbox destildado y el botón desabilitado
    expect(checkbox).not.toBeChecked()
    expect(confirmButton).toBeDisabled()

    //Click y botón habilitado
    fireEvent.click(checkbox)
    expect(confirmButton).toBeEnabled()

    //Click y botón deshabilitado
    fireEvent.click(checkbox)
    expect(confirmButton).toBeDisabled()
})


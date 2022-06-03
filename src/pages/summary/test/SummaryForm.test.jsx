import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    userEvent.click(checkbox)
    expect(confirmButton).toBeEnabled()

    //Click y botón deshabilitado
    userEvent.click(checkbox)
    expect(confirmButton).toBeDisabled()
})

test('Popover responds to hover', async () =>{
    render(<SummaryForm />)
    
    //Popover comienza oculto 
    //queryBy devuelve NULL si no encuentra algo
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered /i)
    expect(nullPopover).not.toBeInTheDocument()

    //Popover aparecer con el hover
    const termsAndConditions = screen.getByText(/terms and conditions/i)
    userEvent.hover(termsAndConditions)
    
    const popover = screen.getByText(/no ice cream will actually be delivered/i)
    expect(popover).toBeInTheDocument()

    //Popover desaparece con el mouseout
    userEvent.unhover(termsAndConditions)
    //const nullPopoverAgain = screen.queryByText(/no ice cream will actually be delivered/i)
    //expect(nullPopoverAgain).not.toBeInTheDocument()
    await waitForElementToBeRemoved(() =>  screen.queryByText(/no ice cream will actually be delivered/i))
})
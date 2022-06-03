import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SummaryForm () {
    
    const [termsChecked, setTermsChecked] = useState(false)
    const checkboxLabel = (
        <span>
            I Agree to <span style={{color: "blue"}}>Terms and Conditions</span>
        </span>
    )

    return(
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check 
                    type="checkbox"
                    checked={termsChecked}
                    onChange={e=> setTermsChecked(e.target.checked)}
                    label={checkboxLabel}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!termsChecked}>
                Confirm Order
            </Button>
        </Form>
    )
}
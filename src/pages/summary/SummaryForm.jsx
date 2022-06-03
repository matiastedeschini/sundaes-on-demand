import React, {useState} from "react";
import { Popover, OverlayTrigger, Button, Form } from "react-bootstrap";

export default function SummaryForm () {
    
    const [termsChecked, setTermsChecked] = useState(false)
    
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                No ice cream will actually be delivered
            </Popover.Body>
        </Popover>
    )

    const checkboxLabel = (
        <span>
            I Agree to 
            <OverlayTrigger 
                overlay={popover}
                trigger="hover" 
                placement="right"> 
            <span style={{color: "blue"}}>Terms and Conditions</span>
            </OverlayTrigger>
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
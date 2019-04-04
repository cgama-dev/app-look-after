import React from 'react'
import { Form} from 'semantic-ui-react'

const DiapersDetails = (props) => {
    return (
        props.diaper_details.map((val, idx) => {
            let sizeId = `size-${idx}`, quantityId = `quantity-${idx}`
            return (
                <Form.Group key={idx}>
                    <Form.Field  >
                        <label htmlFor={sizeId}>{`Size #${idx + 1}`}</label>
                        <input
                            type="text"
                            name={sizeId}
                            data-id={idx}
                            id={sizeId}
                            value={props.diaper_details[idx].size}
                            className="size"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor={quantityId}>Quantity</label>
                        <input
                            type="number"
                            name={quantityId}
                            data-id={idx}
                            id={quantityId}
                            value={props.diaper_details[idx].quantity}
                            className="quantity"
                        />
                    </Form.Field>
                </Form.Group>
            )
        }
        )
    )
}


export default DiapersDetails

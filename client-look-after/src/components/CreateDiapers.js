import React, { Component } from 'react'
import { Segment, Header, Form, Button, Icon, Divider, Input } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import DiapersDetails from './DiapersDetails'
import ActionsCreators from './../redux/actions'
import { connect } from 'react-redux'
class CreateDiapers extends Component {

    state = {
        model: "",
        description: "",
        price: "",
        diaper_details: [{ size: "", quantity: "" }]
    }
    handleChange = (e) => {
        if (["size", "quantity"].includes(e.target.className)) {
            let diaper_details = [...this.state.diaper_details]
            let target = e.target;
            let value = target.value;
            if (e.target.className === 'quantity') {
                value = parseInt(target.value)
            }
            diaper_details[e.target.dataset.id][e.target.className] = value
            this.setState({ diaper_details }, () => {})
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    handleAddDiaperDetails = (e) => {
        if (this.state.diaper_details.length <= 2) {
            this.setState((prevState) => ({
                diaper_details: [...prevState.diaper_details, { size: "", quantity: "" }],
            }));

        }
    }
    handleSaveDiaper = () => {

        const { model, description, price, diaper_details } = this.state

        this.props.createDiaper({
            model, description, price, diaper_details
        })
    }
    render() {
        let { model, price, description, diaper_details } = this.state
        return (
            <Segment.Group>
                {
                    this.props.error &&
                    <Segment color='red'> {this.props.error}</Segment>
                }
                {this.props.saved &&
                    <Redirect to={`/`} />
                }
                <Segment>
                    <Header as='h3' content='Create Diaper' textAlign='center' />
                    <Form onChange={this.handleChange}>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>Model</label>
                                <input type="text" name="model" id="model" value={model} />
                            </Form.Field>
                            <Form.Field>
                                <label>Description</label>
                                <input type="text" name="description" id="description" value={description} />
                            </Form.Field>
                            <Form.Field>
                                <label>Price</label>
                                <input type="text" name="price" id="price" value={price} />
                            </Form.Field>
                        </Form.Group>

                        <Form.Group  >
                            <Form.Field>
                                <label>Add new size</label>
                                <Button positive icon labelPosition='right' onClick={this.handleAddDiaperDetails}>
                                    Add<Icon name='plus' />
                                </Button>
                            </Form.Field>
                            <DiapersDetails diaper_details={diaper_details} />
                        </Form.Group>
                        <Divider />
                        <Button type="button" content='Save' primary onClick={() => this.handleSaveDiaper()} />
                    </Form>
                    <Divider />
                </Segment>
            </Segment.Group>
        )
    }
}

const mapStateToProps = state => {
    return {
        diapers: state.diapers.data[0],
        saved: state.diapers.saved,
        error: state.diapers.error
    }
};

const mapDisptchToProps = (dispatch) => {
    return {
        createDiaper: (diaper) => dispatch(ActionsCreators.createDiaperRequest(diaper))
    }
}

export default connect(mapStateToProps, mapDisptchToProps)(CreateDiapers)

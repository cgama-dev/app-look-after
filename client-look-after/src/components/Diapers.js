import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Segment,
    Button,
    Icon,
    Table,
    Label
} from 'semantic-ui-react'

import { connect } from 'react-redux'

import ActionsCreators from './../redux/actions'

class Diapers extends Component {

    componentDidMount() {
        this.props.getDiapers()
    }


    render() {
        return (

            <div>

                {
                    this.props.diapers.length === 0 &&
                    <Segment color='orange'> No registered diapers.</Segment>
                }
                {
                    this.props.diapers.length > 0 &&
                    <Segment.Group>
                        <Segment >
                            <Button as={Link} to={'/newdiaper'} floated='left' icon labelPosition='left' primary size='small'>
                                <Icon name='plus' /> Add Diapers
                        </Button>
                        </Segment>

                        <Segment style={{ marginTop: '2em' }}>
                            <Table celled compact structured>
                                <Table.Header fullWidth>
                                    <Table.Row>
                                        <Table.HeaderCell width={1}>Model</Table.HeaderCell>
                                        <Table.HeaderCell width={2}>Description</Table.HeaderCell>
                                        <Table.HeaderCell width={1}>Price</Table.HeaderCell>
                                        <Table.HeaderCell width={8}>Details Diaper</Table.HeaderCell>
                                        <Table.HeaderCell width={2}>Options</Table.HeaderCell>
                                    </Table.Row>

                                </Table.Header>

                                <Table.Body>
                                    {
                                        this.props.diapers.map((diaper) => (
                                            <Table.Row key={diaper._id}>
                                                <Table.Cell>{diaper.model}</Table.Cell>
                                                <Table.Cell>{diaper.description}</Table.Cell>
                                                <Table.Cell>{diaper.price}</Table.Cell>
                                                <Table.Cell>
                                                    <Table basic='very' celled >
                                                        <Table.Header fullWidth>
                                                            <Table.Row>
                                                                <Table.HeaderCell >Size</Table.HeaderCell>
                                                                <Table.HeaderCell >Quantity</Table.HeaderCell>
                                                                <Table.HeaderCell >Purchase</Table.HeaderCell>
                                                                <Table.HeaderCell >Available</Table.HeaderCell>
                                                                <Table.HeaderCell >Time to zero</Table.HeaderCell>
                                                                <Table.HeaderCell >Purchase</Table.HeaderCell>
                                                            </Table.Row>
                                                        </Table.Header>
                                                        <Table.Body>
                                                            {
                                                                diaper.diaper_details.map((detail, index) => (
                                                                    <Table.Row key={index}>
                                                                        <Table.Cell>{detail.size}</Table.Cell>
                                                                        <Table.Cell>{detail.quantity}</Table.Cell>
                                                                        <Table.Cell>{detail.purchased}</Table.Cell>
                                                                        <Table.Cell>{detail.available}</Table.Cell>
                                                                        <Table.Cell>
                                                                            {
                                                                                detail.available_time === '' && <span>Not estimated</span>
                                                                            }
                                                                            {
                                                                                detail.available_time !== "" && <span>{detail.available_time} <b>minutes</b></span>
                                                                            }
                                                                        </Table.Cell>
                                                                        <Table.Cell>
                                                                            {
                                                                                detail.available === 0 &&
                                                                                <Label as='a' basic color='red' pointing>
                                                                                    finished stock
                                                                                </Label>
                                                                            }
                                                                            {
                                                                                detail.available !== 0 &&
                                                                                <Button animated='vertical'>
                                                                                    <Button.Content hidden onClick={() => this.props.purchaseDiaper(diaper._id, detail.size)}>Purchase</Button.Content>
                                                                                    <Button.Content visible>
                                                                                        <Icon name='shop' />
                                                                                    </Button.Content>
                                                                                </Button>
                                                                            }
                                                                        </Table.Cell>
                                                                    </Table.Row>
                                                                ))
                                                            }
                                                        </Table.Body>
                                                    </Table>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <Button.Group>
                                                        <Button as={Link} to={`/editdiaper/${diaper._id}`} color='blue'>Edit</Button>
                                                        <Button.Or />
                                                        <Button color='red' onClick={() => this.props.deleteDiapers(diaper._id)}>Delete</Button>
                                                    </Button.Group>
                                                </Table.Cell>
                                            </Table.Row>

                                        ))
                                    }

                                </Table.Body>

                                <Table.Footer fullWidth>
                                    <Table.Row>
                                        <Table.HeaderCell />
                                        <Table.HeaderCell colSpan='5'>
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Footer>
                            </Table>
                        </Segment>
                    </Segment.Group>

                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        diapers: state.diapers.data,
        isLoading: state.diapers.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDiapers: () => dispatch(ActionsCreators.getDiaperRequest()),
        deleteDiapers: (id) => dispatch(ActionsCreators.deleteDiaperRequest(id)),
        purchaseDiaper: (id, size) => dispatch(ActionsCreators.purchaseDiaperRequest(id, size))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diapers)
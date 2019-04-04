module.exports = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "Application API Look After",
        "description": "Node.js Look After Application API",
        "license": {
            "name": "",
            "url": ""
        }
    },
    "host": "localhost:4001",
    "basePath": "/",
    "tags": [{
        "name": "Diapers",
        "description": "Api Operations about diapers"
    }],
    "schemes": [
        "http"
    ],
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ],
    "paths": {
        "/diapers": {
            "post": {
                "tags": [
                    "Diapers"
                ],
                "summary": "Add a new diaper to the store",
                "description": "Endpoint responsible for creating new diapers in the application",
                "parameters": [{
                    "name": "diapers",
                    "in": "body",
                    "description": "Required fields for creating a new diaper",
                    "schema": {
                        "$ref": "#/definitions/Diapers"
                    }
                }],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "201": {
                        "description": "Diaper created successfully",
                        "schema": {
                            "$ref": "#/definitions/DiapersResponse"
                        }
                    }
                }
            },
            "get": {
                "tags": [
                    "Diapers"
                ],
                "summary": "Find all active system diapers",
                "description": "Endpoint responsible for fetching all registered diapers in the application",
                "responses": {
                    "200": {
                        "description": "Diapers found with success",
                        "schema": {
                            "$ref": "#/definitions/Diapers"
                        }
                    }
                }
            }
        },
        "/diapers/{id}": {
            "parameters": [{
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID of the diaper we want to find",
                "type": "string"
            }],
            "get": {
                "tags": [
                    "Diapers"
                ],
                "summary": "Get diaper with a given ID",
                "description": "Endpoint responsável por buscar um único usuário",
                "operationId": "findById",
                "responses": {
                    "200": {
                        "description": "Diaper successfully found",
                        "schema": {
                            "$ref": "#/definitions/DiapersResponse"
                        }
                    }
                }
            },
            "delete": {
                "tags": [
                    "Diapers"
                ],
                "summary": "Delete a diaper",
                "responses": {
                    "200": {
                        "description": "Diaper deleted",
                        "schema": {
                            "$ref": "#/definitions/Diapers"
                        }
                    }
                }
            },
            "put": {
                "summary": "Update diaper",
                "description": "Endpoint responsible for updating a diapers data",
                "tags": [
                    "Diapers"
                ],
                "parameters": [{
                    "name": "diaper",
                    "in": "body",
                    "description": "Diaper with new property values",
                    "schema": {
                        "$ref": "#/definitions/DiapersUpdate"
                    }
                }],
                "responses": {
                    "200": {
                        "description": "Diaper updated successfully",
                        "schema": {
                            "$ref": "#/definitions/DiapersUpdate"
                        }
                    }
                }
            }
        },
        "/diapers/purchase/{id}": {
            "parameters": [{
                "name": "id",
                "in": "path",
                "required": true,
                "description": "ID of the diaper we want to find",
                "type": "string"
            }],
            "put": {
                "tags": [
                    "Diapers"
                ],
                "summary": "Purchase diaper",
                "description": "Endpoint responsible for purchase diapers",
                "parameters": [{
                    "name": "body",
                    "in": "body",
                    "description": "Fields needed to make the purchase",
                    "required": true,
                    "schema": {
                        "$ref": "#/definitions/DiapersPurchase"
                    }
                }],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Purchase made successfully",
                        "schema": {
                            "$ref": "#/definitions/DiapersResponse"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
       
        "Diapers": {
            "required": [
                "model",
                "description",
                "price",
                "diaper_details"
            ],
            "properties": {
                "model": {
                    "type": "string",
                    "requerid": true
                },
                "description": {
                    "type": "string",
                    "requerid": true
                },
                "price": {
                    "type": "number",
                    "requerid": true
                },
                "diaper_details": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/diaper_details"
                    }
                }
            }
        },
        "DiapersResponse": {
            "properties": {
                "mensage": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "_id": {
                            "type": "string"
                        },
                        "_rev": {
                            "type": "string"
                        },
                        "model": {
                            "type": "string"
                        },
                        "description": {
                            "type": "string"
                        },
                        "price": {
                            "type": "string"
                        },
                        "diaper_details": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/diaper_details"
                            }
                        },
                        "status": {
                            "type": "boolean"
                        },
                        "created_at": {
                            "type": "string"
                        },
                        "updated_at": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "diaper_details": {
            "type": "object",
            "properties": {
                "size": {
                    "type": "string",
                    "enum": ["Big", "Medium", "Little"],
                    "requerid": true
                },
                "quantity": {
                    "type": "number",
                    "requerid": true
                }
            }
        },
        "DiapersPurchase": {
            "required": [
                "size",
                "purchase_number"
            ],
            "properties": {
                "size": {
                    "type": "string",
                    "enum": ["Big", "Medium", "Little"],
                    "requerid": true
                },
                "purchase_number": {
                    "type": "number",
                    "requerid": true
                }
            }
        },
        "DiapersUpdate": {
            "required": [
                "model",
                "description",
                "price",
                "diaper_details"
            ],
            "properties": {
                "model": {
                    "type": "string",
                    "requerid": true
                },
                "description": {
                    "type": "string",
                    "requerid": true
                },
                "price": {
                    "type": "number",
                    "requerid": true
                },
                "diaper_details": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/diaper_details_update"
                    }
                },
                "status": {
                    "type": "boolean",
                }
            }
        },
        "diaper_details_update": {
            "type": "object",
            "properties": {
                "size": {
                    "type": "string",
                    "enum": ["Big", "Medium", "Little"],
                    "requerid": true
                },
                "quantity": {
                    "type": "number",
                    "requerid": true
                },
                "purchased": {
                    "type": "number"
                },
                "available": {
                    "type": "number"
                },
                "available_time": {
                    "type": "string"
                },
                "last_purchase": {
                    "type": "string"
                }

            }
        },
    }
}
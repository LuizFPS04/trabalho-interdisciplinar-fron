import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerOptions = {
    definition: {
        "openapi": "3.0.0",
        "info": {
            "title": "BioGenius API",
            "version": "1.0.0"
        },
        "servers": [
            {
                "url": "https://biogenius.onrender.com/api/v1"
            }
        ],
        "paths": {
            "/login": {
                "post": {
                    "summary": "User login",
                    "tags": [
                        "Login"
                    ],
                    "operationId": "login",
                    "requestBody": {
                        "description": "User login credentials",
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "email": {
                                            "type": "string"
                                        },
                                        "password": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Successful login",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Invalid credentials",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/logout": {
                "post": {
                    "summary": "User logout",
                    "tags": [
                        "Login"
                    ],
                    "operationId": "logout",
                    "responses": {
                        "200": {
                            "description": "Successful logout",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/user": {
                "post": {
                    "summary": "Create a new user",
                    "tags": [
                        "User"
                    ],
                    "operationId": "createUser",
                    "requestBody": {
                        "description": "User creation data",
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "name": {
                                            "type": "string"
                                        },
                                        "email": {
                                            "type": "string"
                                        },
                                        "nickname": {
                                            "type": "string"
                                        },
                                        "password": {
                                            "type": "string"
                                        },
                                        "birth": {
                                            "type": "string",
                                            "format": "date"
                                        },
                                        "role": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "User created successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Failed to create user",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "get": {
                    "summary": "Get all users",
                    "tags": [
                        "User"
                    ],
                    "operationId": "getAllUsers",
                    "security": [
                        {
                            "bearerAuth": []
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "List of users",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "No users found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/user/{id}": {
                "get": {
                    "summary": "Get user by ID",
                    "tags": [
                        "User"
                    ],
                    "operationId": "getUserById",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "User found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "User not found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "summary": "Update user details",
                    "tags": [
                        "User"
                    ],
                    "operationId": "updateUser",
                    "security": [
                        {
                            "bearerAuth": []
                        }
                    ],
                    "requestBody": {
                        "description": "User update data",
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "name": {
                                            "type": "string"
                                        },
                                        "email": {
                                            "type": "string"
                                        },
                                        "nickname": {
                                            "type": "string"
                                        },
                                        "password": {
                                            "type": "string"
                                        },
                                        "role": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "User updated successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "User not found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "Delete a user",
                    "tags": [
                        "User"
                    ],
                    "operationId": "deleteUser",
                    "security": [
                        {
                            "bearerAuth": []
                        }
                    ],
                    "parameters": [
                        {
                            "name": "email",
                            "in": "query",
                            "required": false,
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "nickname",
                            "in": "query",
                            "required": false,
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "User deleted successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "User not found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/user/details": {
                "get": {
                    "summary": "Get user details by email or nickname",
                    "tags": [
                        "User"
                    ],
                    "operationId": "getUserWithDetails",
                    "parameters": [
                        {
                            "name": "email",
                            "in": "query",
                            "required": false,
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "nickname",
                            "in": "query",
                            "required": false,
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "User details found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "User not found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/quiz/complete": {
                "post": {
                    "summary": "Create a complete quiz with questions and answers",
                    "tags": [
                        "Quiz"
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/QuizCreationRequest"
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "Quiz created successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/QuizResponse"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid data or service error",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/quiz": {
                "post": {
                    "summary": "Create a new quiz",
                    "tags": [
                        "Quiz"
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/QuizCreationRequest"
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "Quiz created successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/QuizResponse"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid data or service error",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                },
                "get": {
                    "summary": "Get all quizzes",
                    "tags": [
                        "Quiz"
                    ],
                    "responses": {
                        "200": {
                            "description": "Quizzes fetched successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/QuizListResponse"
                                    }
                                }
                            }
                        },
                        "500": {
                            "description": "Internal server error",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/quiz/{id}": {
                "get": {
                    "summary": "Get a quiz by ID",
                    "tags": [
                        "Quiz"
                    ],
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Quiz fetched successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/QuizResponse"
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Quiz not found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "Delete a quiz by ID",
                    "tags": [
                        "Quiz"
                    ],
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Quiz deleted successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/QuizResponse"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid or missing quiz ID",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/quiz/theme": {
                "get": {
                    "summary": "Get quizzes by theme",
                    "tags": [
                        "Quiz"
                    ],
                    "parameters": [
                        {
                            "in": "query",
                            "name": "theme",
                            "required": true,
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Quizzes fetched by theme successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/QuizListResponse"
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "No quizzes found for the specified theme",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/questions": {
                "post": {
                    "summary": "Create a new question",
                    "tags": [
                        "Questions"
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/QuestionCreationRequest"
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "Question created successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/QuestionResponse"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid data or service error",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/questions/quiz/{id}": {
                "get": {
                    "summary": "Get all questions for a specific quiz",
                    "tags": [
                        "Questions"
                    ],
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Questions fetched successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/QuestionListResponse"
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "No questions found for the quiz",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/questions/{id}": {
                "delete": {
                    "summary": "Delete a question by ID",
                    "tags": [
                        "Questions"
                    ],
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Question deleted successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/QuestionResponse"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid or missing question ID",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/answers": {
                "post": {
                    "summary": "Create a new answer",
                    "tags": [
                        "Answers"
                    ],
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/AnswerCreationRequest"
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "Answer created successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AnswerResponse"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid data or service error",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/answers/question/{id}": {
                "get": {
                    "summary": "Get answers for a specific question",
                    "tags": [
                        "Answers"
                    ],
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Answers fetched successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AnswerListResponse"
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "No answers found for the question",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/answers/{id}": {
                "delete": {
                    "summary": "Delete an answer by ID",
                    "tags": [
                        "Answers"
                    ],
                    "parameters": [
                        {
                            "in": "path",
                            "name": "id",
                            "required": true,
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Answer deleted successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/AnswerResponse"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid or missing answer ID",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/ErrorResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/ranking": {
                "post": {
                    "summary": "Create a new ranking",
                    "tags": [
                        "Ranking"
                    ],
                    "operationId": "createRanking",
                    "requestBody": {
                        "description": "Ranking object that needs to be created",
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "userId": {
                                            "type": "integer"
                                        },
                                        "quizId": {
                                            "type": "integer"
                                        },
                                        "score": {
                                            "type": "number",
                                            "format": "float"
                                        }
                                    },
                                    "required": [
                                        "userId",
                                        "quizId",
                                        "score"
                                    ]
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "Ranking created successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Failed to create ranking",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/ranking/{id}": {
                "get": {
                    "summary": "Get a ranking by ID",
                    "tags": [
                        "Ranking"
                    ],
                    "operationId": "getRankingById",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "The ID of the ranking",
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Ranking fetched successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Ranking not found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "summary": "Update a ranking by ID",
                    "tags": [
                        "Ranking"
                    ],
                    "operationId": "updateRanking",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "The ID of the ranking",
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "requestBody": {
                        "description": "Updated ranking object",
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "score": {
                                            "type": "number",
                                            "format": "float"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Ranking updated successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Ranking not found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "Delete a ranking by ID",
                    "tags": [
                        "Ranking"
                    ],
                    "operationId": "deleteRanking",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "The ID of the ranking",
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Ranking deleted successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Ranking not found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/ranking/quiz/{id}": {
                "get": {
                    "summary": "Get rankings by quiz ID",
                    "tags": [
                        "Ranking"
                    ],
                    "operationId": "getRankingsByQuizId",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "The ID of the quiz",
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Rankings fetched successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "No rankings found for this quiz",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/ranking/user/{id}": {
                "get": {
                    "summary": "Get rankings by user ID",
                    "tags": [
                        "Ranking"
                    ],
                    "operationId": "getRankingsByUserId",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "The ID of the user",
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Rankings fetched successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "No rankings found for this user",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/ranking/complete/{id}": {
                "get": {
                    "summary": "Get rankings with user and quiz by ID",
                    "tags": [
                        "Ranking"
                    ],
                    "operationId": "getRankingsWithUserAndQuiz",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "The ID of the ranking",
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Rankings fetched successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "No rankings found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/result": {
                "post": {
                    "summary": "Create a new result",
                    "tags": [
                        "Result"
                    ],
                    "operationId": "createResult",
                    "requestBody": {
                        "description": "Result object that needs to be created",
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "userId": {
                                            "type": "integer"
                                        },
                                        "quizId": {
                                            "type": "integer"
                                        },
                                        "score": {
                                            "type": "number",
                                            "format": "float"
                                        }
                                    },
                                    "required": [
                                        "userId",
                                        "quizId",
                                        "score"
                                    ]
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "Result created successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Failed to create result",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/result/{id}": {
                "get": {
                    "summary": "Get a result by ID",
                    "tags": [
                        "Result"
                    ],
                    "operationId": "getResultById",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "The ID of the result",
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Result fetched successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Result not found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "summary": "Update a result by ID",
                    "tags": [
                        "Result"
                    ],
                    "operationId": "updateResult",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "The ID of the result",
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "requestBody": {
                        "description": "Updated result object",
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "score": {
                                            "type": "number",
                                            "format": "float"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Result updated successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Result not found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "summary": "Delete a result by ID",
                    "tags": [
                        "Result"
                    ],
                    "operationId": "deleteResult",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "The ID of the result",
                            "schema": {
                                "type": "integer"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Result deleted successfully",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "success": {
                                                "type": "boolean"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "components": {
            "securitySchemes": {
                "bearerAuth": {
                    "type": "http",
                    "scheme": "bearer",
                    "bearerFormat": "JWT"
                }
            },
            "schemas": {
                "QuizCreationRequest": {
                    "type": "object",
                    "properties": {
                        "title": {
                            "type": "string"
                        },
                        "theme": {
                            "type": "string"
                        },
                        "description": {
                            "type": "string"
                        }
                    }
                },
                "QuizResponse": {
                    "type": "object",
                    "properties": {
                        "success": {
                            "type": "boolean"
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "object"
                        }
                    }
                },
                "QuizListResponse": {
                    "type": "object",
                    "properties": {
                        "success": {
                            "type": "boolean"
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/QuizResponse"
                            }
                        }
                    }
                },
                "QuestionCreationRequest": {
                    "type": "object",
                    "properties": {
                        "text": {
                            "type": "string"
                        },
                        "quizId": {
                            "type": "integer"
                        }
                    }
                },
                "QuestionResponse": {
                    "type": "object",
                    "properties": {
                        "success": {
                            "type": "boolean"
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "object"
                        }
                    }
                },
                "QuestionListResponse": {
                    "type": "object",
                    "properties": {
                        "success": {
                            "type": "boolean"
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/QuestionResponse"
                            }
                        }
                    }
                },
                "AnswerCreationRequest": {
                    "type": "object",
                    "properties": {
                        "text": {
                            "type": "string"
                        },
                        "questionId": {
                            "type": "integer"
                        }
                    }
                },
                "AnswerResponse": {
                    "type": "object",
                    "properties": {
                        "success": {
                            "type": "boolean"
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "object"
                        }
                    }
                },
                "AnswerListResponse": {
                    "type": "object",
                    "properties": {
                        "success": {
                            "type": "boolean"
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/AnswerResponse"
                            }
                        }
                    }
                },
                "ErrorResponse": {
                    "type": "object",
                    "properties": {
                        "success": {
                            "type": "boolean"
                        },
                        "message": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.ts'],
};

export const swaggerDocs = swaggerJsdoc(swaggerOptions);
Koz: Inclusive Website Project Overview Koz is a web platform designed to connect users with volunteers in real time through chat. Users can find volunteers, request help, and communicate via chat. Volunteers can manage requests and assist users directly on the platform.

Group Members:

Orynbasar Birzhan
Nurlankyzy Nuray
Front-End Requirements

Interfaces/Classes for APIs:

Create interfaces to handle the data coming from the back-end API (e.g., User, Volunteer, Request, and Chat).
Services for API Data Fetching:

Implement Angular services that handle API calls (e.g., UserService, VolunteerService, RequestService, and ChatService).
Minimum 4 (onclick) Events:

onRequestAssistance(): Triggers a request for volunteer help.
onSendMessage(): Sends a message in the chat.
onUpdateAvailability(): Updates the volunteer's availability status.
onViewRequestHistory(): Displays the request history.
Minimum 4 [(ngModel)] Bindings:

ngModel used for binding user input fields like:
User login form (username and password).
Chat input field for sending messages.
Volunteer availability status form.
User profile management (e.g., name, contact information).
CSS Styling:

Basic CSS to style the platform's layout, buttons, and forms. Optionally, use a CSS framework like Bootstrap or Material UI for additional styling.
Routing Module:

Implement routing for pages like the login, user profile, volunteer dashboard, request assistance, and chat.
Directives:

ngFor: Used to render lists, like displaying available volunteers or chat messages.
ngIf: Used to show/hide elements, like showing the chat when the user is logged in.
JWT-based Authentication:

Implement a login and logout system with JWT tokens to authenticate users and volunteers.
Use an interceptor to attach the JWT token to all outgoing requests to the API.
Back-End Requirements

Minimum 4 Models:

User: Represents users (both volunteers and regular users).
Volunteer: Extends the User model and includes availability status.
Request: Represents a user’s request for volunteer help.
Chat: Represents a chat message between the user and volunteer.
Minimum 1 Model Manager (Optional):

VolunteerManager: Manages volunteer availability and response.
Minimum 2 Relations Between Models (ForeignKey):

User and Request: Each request is tied to a user (ForeignKey relationship).
Volunteer and Chat: Each chat message is tied to a volunteer (ForeignKey relationship).
Serializer:

UserSerializer: Serializes the user model.
RequestSerializer: Serializes the request model.
VolunteerSerializer: Serializes the volunteer model.
ChatSerializer: Serializes the chat model.
At Least 2 from serializer.Serializer:

RequestSerializer and ChatSerializer (basic serializers).
At Least 2 from serializer.ModelSerializer:

UserSerializer and VolunteerSerializer (model serializers).
Views:

2 FBV (Function-Based Views):

create_user: Handles user registration.
create_request: Handles request creation by the user.
2 CBV (Class-Based Views):

VolunteerListView: Displays a list of available volunteers.
RequestDetailView: Displays detailed information for a specific request.
Token-Based Authentication:

Implement token-based authentication using JWT tokens. Create endpoints for login and logout.
At Least 1 Model CRUD Operation:

CRUD for Request: Create, Read, Update, Delete user requests.
Create objects for the authenticated user: Each request and chat is tied to the currently authenticated user.
Postman Requests:

Create Postman requests for testing all implemented methods (POST, GET, PUT, DELETE).
Project Flow

User Registration/Login:

Users and volunteers sign up or log in to securely access the platform.
JWT tokens are generated upon login and used for authentication in subsequent requests.
Requesting Assistance:

Users submit requests for volunteer assistance, which are stored in the database.
Volunteers can view and respond to these requests.
Volunteer Response:

Volunteers update their availability and manage user requests.
Volunteers can chat with users to confirm assistance.
Chat System:

Users and volunteers communicate through real-time chat, stored and managed through the back-end.
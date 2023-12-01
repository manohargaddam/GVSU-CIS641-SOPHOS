# Overview

The purpose of this software requirements specification for Retro board application is to clearly define the functional and non-functional requirements of the system, and to ensure that the development team understands what features and capabilities the system should have. This SRS serves as a blueprint for the development of the system and provides a reference for testing,
maintenance, and support.

By defining the purpose of the system clearly, stakeholders can ensure that the system meets their needs and expectations and is delivered on time and within budget.

# Software Requirements

<!-- Descrobe the structure pf this section -->

## Functional Requirements

### Boards

ID | Requirement

- FR1 | The system shall allow users to create a new retrospective board when session is initiated.
- FR2 | Users shall be able to edit or delete retrospective boards when they exist.
- FR3 | Users shall be able to name retrospective boards when creation is initiated.
- FR4 | Requirement 4
- FR5 | Requirement 5

### Home Screen Dashboard

ID | Requirement

- FR1 | Users shall be required to log in to access the home screen
- FR2 | System shall display dashboard for user upon login
- FR3 | System shall display saved retrospective boards created.
- FR4 | Users shall have direct access to their recent retrospective boards.
- FR5 | System shall display updated shared boards users may be included in.

### Login Screen

ID | Requirement

- FR1 | Users shall be able to register for an account
- FR2 | System shall display login failures
- FR3 | System shall secure passwords once account is created
- FR4 | Requirement 4
- FR5 | Requirement 5

### Cards

ID | Requirement

- FR1 | Users shall be able to customize the appearance of their retrospective cards, such as choosing a different color.
- FR2 | Users shall be able to vote on retro cards during the retrospective.
- FR3 | The system shall calculate and display the total number of votes on each card.
- FR4 | Users shall be able to create, edit, or delete retrospective cards in a section.
- FR5 | The system shall provide real-time updates to users, showing changes made by others.

### Collaboration

ID | Requirement

- FR1 | The system shall allow users to invite other members to join a retrospective board by email or username.
- FR2 | The system shall recognize owner of the shared board
- FR3 | The system shall recognize collaborators of the shared board
- FR4 | The system shall allow simultaneous editing between collaborators
- FR5 | The system shall allow board owners permissions of access or revoking.

## Non-Functional Requirements

### Boards

ID | Non-Functional Requirement

- FR1 | System shall load quickly no matter the size of data.
- FR2 | System shall display easy to use interface for those with less techincal expertise.
- FR3 | System shall be able to load retrospective boards to the cloud to reduce data loss upon crashes.
- FR4 | System shall handle retrospective boards field smoothly across windows and mac.
- FR5 | System shall be able to handle 30+ retrospective boards.

### Home Screen Dashboard

ID | Non-Functional Requirement

- FR1 | System shall load home screen quickly upon login.
- FR2 | System shall display a user-friendly dashboard.
- FR3 | System shall be able to large amounts of data for scalability.
- FR4 | System shall handle button inputs by users within 1 second of processing.
- FR5 | Users shall be able to scroll smoothly when needed.

### Login Screen

ID | Non-Functional Requirement

- FR1 | Login Screen shall take special characters such as !, ?, and \*.
- FR2 | Login Screen shall be user-friendly and easy to navigate.
- FR3 | Login Screen shall be quick and responsive under 3 seconds.
- FR4 | Login Screen shall have two-factor authentication by phone number.
- FR5 | Login Screen shall load username and password to cloud such as AWS for data protection.

### Cards

ID | Non-Functional Requirement

- FR1 | Retrospective Cards shall handle a substantial number of concurrent users without reducing the performance.
- FR2 | Retrospective Cards shall respond to user actions promptly, ensuring low latency.
- FR3 | Retrospective Cards shall ensure optimal resource utilization and prevent overloads.
- FR4 | User shall have the ability to change colors of cards to green, red, purple, or more.
- FR5 | Retrospective Cards shall be able to work across platforms such as firefox, chrome, google.

### Collaboration

ID | Non-Functional Requirement

- FR1 | Collaboration system shall handle 10+ users for simultaneous work
- FR2 | Collaboration system shall provide real time updates within 5 seconds after editing
- FR3 | Users shall navigate any operating system such as firefox, chrome, safari.
- FR4 | Collaboration system shall backup data on AWS/other cloud service.
- FR5 | Collaboration system shall run efficiently with low latency.

# Change Management Plan

<!-- Description of what this section is -->

# Traceability Links

<!-- Description of this section -->

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

- FR6 | Users shall be required to log in to access the home screen
- FR7 | System shall display dashboard for user upon login
- FR8 | System shall display saved retrospective boards created.
- FR9 | Users shall have direct access to their recent retrospective boards.
- FR10 | System shall display updated shared boards users may be included in.

### Login Screen

ID | Requirement

- FR11 | Users shall be able to register for an account
- FR12 | System shall display login failures
- FR13 | System shall secure passwords once account is created
- FR14 | Requirement 4
- FR15 | Requirement 5

### Cards

ID | Requirement

- FR16 | Users shall be able to customize the appearance of their retrospective cards, such as choosing a different color.
- FR17| Users shall be able to vote on retro cards during the retrospective.
- FR18 | The system shall calculate and display the total number of votes on each card.
- FR19 | Users shall be able to create, edit, or delete retrospective cards in a section.
- FR20 | The system shall provide real-time updates to users, showing changes made by others.

### Collaboration

ID | Requirement

- FR21 | The system shall allow users to invite other members to join a retrospective board by email or username.
- FR22 | The system shall recognize owner of the shared board
- FR23 | The system shall recognize collaborators of the shared board
- FR24 | The system shall allow simultaneous editing between collaborators
- FR25 | The system shall allow board owners permissions of access or revoking.

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

- FR6 | System shall load home screen quickly upon login.
- FR7 | System shall display a user-friendly dashboard.
- FR8 | System shall be able to large amounts of data for scalability.
- FR9 | System shall handle button inputs by users within 1 second of processing.
- FR10 | Users shall be able to scroll smoothly when needed.

### Login Screen

ID | Non-Functional Requirement

- FR11 | Login Screen shall take special characters such as !, ?, and \*.
- FR12 | Login Screen shall be user-friendly and easy to navigate.
- FR13 | Login Screen shall be quick and responsive under 3 seconds.
- FR14 | Login Screen shall have two-factor authentication by phone number.
- FR15 | Login Screen shall load username and password to cloud such as AWS for data protection.

### Cards

ID | Non-Functional Requirement

- FR16 | Retrospective Cards shall handle a substantial number of concurrent users without reducing the performance.
- FR17 | Retrospective Cards shall respond to user actions promptly, ensuring low latency.
- FR18 | Retrospective Cards shall ensure optimal resource utilization and prevent overloads.
- FR19 | User shall have the ability to change colors of cards to green, red, purple, or more.
- FR20 | Retrospective Cards shall be able to work across platforms such as firefox, chrome, google.

### Collaboration

ID | Non-Functional Requirement

- FR21 | Collaboration system shall handle 10+ users for simultaneous work
- FR22 | Collaboration system shall provide real time updates within 5 seconds after editing
- FR23 | Users shall navigate any operating system such as firefox, chrome, safari.
- FR24 | Collaboration system shall backup data on AWS/other cloud service.
- FR25 | Collaboration system shall run efficiently with low latency.

# Change Management Plan

### Acquire Change Management Team

- Allow managers to collaborate with personel who expertise in this field.
- Get on training programs and work one on one with problems that may come up and help with solutions.
- Keep a change management personel alongside even after new system is implemented to ensure transition phase is completed and approved.

### Employee Involvement

- Allow employee engagement of the new system periodically or within a certain timeframe.
- Allow feedback from the change process phase to see what could be done better or enhanced.
- Listen to employees wants and needs in order to make the best possible system for everyone.

### Training Programs

- Start small training programs as necessary
- Keep them sweet, short, concise
- Excite the employees to show why this system will improve ease of life

### Performance Metrics

- Show higher leadership what the new system improves from the older system
- Keep track of metrics such as time efficiency, budget increases, expense reductions, etc...
- Provide up to date metrics of employee feedback and business enhancement so fallback to the original system does not occur

# Traceability Links

<!-- Description of this section -->

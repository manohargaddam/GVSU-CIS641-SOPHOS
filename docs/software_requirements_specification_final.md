# Overview

The purpose of this software requirements specification for Retro board application is to clearly define the functional and non-functional requirements of the system, and to ensure that the development team understands what features and capabilities the system should have. This SRS serves as a blueprint for the development of the system and provides a reference for testing,
maintenance, and support.

By defining the purpose of the system clearly, stakeholders can ensure that the system meets their needs and expectations and is delivered on time and within budget.

# Software Requirements

This section goes into the detailed specifications that outline our retrospective board functionalities and features. Below, serves as a blueprint of what we wished to acheive in order to meet the needs and expectations of our final system.

## Functional Requirements

### Boards

| ID  |                                         Requirement                                         |
| :-: | :-----------------------------------------------------------------------------------------: |
| FR1 | The system shall allow users to create a new retrospective board when session is initiated. |
| FR2 |         Users shall be able to edit or delete retrospective boards when they exist.         |
| FR3 |        Users shall be able to name retrospective boards when creation is initiated.         |
| FR4 |                    The system shall allow existing boards to be viewed.                     |
| FR5 |             The system shall allow users to rename boards when edit is clicked.             |

### Home Screen Dashboard

|  ID  |                             Requirement                              |
| :--: | :------------------------------------------------------------------: |
| FR6  |     Users shall be required to log in to access the home screen      |
| FR7  |          System shall display dashboard for user upon login          |
| FR8  |       System shall display saved retrospective boards created.       |
| FR9  | Users shall have direct access to their recent retrospective boards. |
| FR10 | System shall display updated shared boards users may be included in. |

### Login Screen

|  ID  |                      Requirement                      |
| :--: | :---------------------------------------------------: |
| FR11 |    Users shall be able to register for an account     |
| FR12 |          System shall display login failures          |
| FR13 | System shall secure passwords once account is created |
| FR14 | Users shall be able to login when account is created. |
| FR15 | Users shall be able logout after logging into system. |

### Cards

|  ID  |                                                    Requirement                                                    |
| :--: | :---------------------------------------------------------------------------------------------------------------: |
| FR16 | Users shall be able to customize the appearance of their retrospective cards, such as choosing a different color. |
| FR17 |                       Users shall be able to vote on retro cards during the retrospective.                        |
| FR18 |                  The system shall allow users to create, edit, or delete retrospective sections.                  |
| FR19 |                 Users shall be able to create, edit, or delete retrospective cards in a section.                  |
| FR20 |               The system shall provide real-time updates to users, showing changes made by others.                |

### Collaboration

|  ID  |                                               Requirement                                                |
| :--: | :------------------------------------------------------------------------------------------------------: |
| FR21 | The system shall allow users to invite other members to join a retrospective board by email or username. |
| FR22 |                           The system shall recognize owner of the shared board                           |
| FR23 |                       The system shall recognize collaborators of the shared board                       |
| FR24 |                    The system shall allow simultaneous editing between collaborators                     |
| FR25 |                  The system shall allow board owners to share board to respective users                  |

## Non-Functional Requirements

### Boards

|  ID  |                                    Non-Functional Requirement                                    |
| :--: | :----------------------------------------------------------------------------------------------: |
| NFR1 |                      System shall load quickly no matter the size of data.                       |
| NFR2 |       System shall display easy to use interface for those with less techincal expertise.        |
| NFR3 | System shall be able to load retrospective boards to the cloud to reduce data loss upon crashes. |
| NFR4 |         System shall handle retrospective boards field smoothly across windows and mac.          |
| NFR5 |                     System shall be able to handle 30+ retrospective boards.                     |

### Home Screen Dashboard

|  ID   |                        Non-Functional Requirement                         |
| :---: | :-----------------------------------------------------------------------: |
| NFR6  |             System shall load home screen quickly upon login.             |
| NFR7  |              System shall display a user-friendly dashboard.              |
| NFR8  |      System shall be able to large amounts of data for scalability.       |
| NFR9  | System shall handle button inputs by users within 1 second of processing. |
| NFR10 |            Users shall be able to scroll smoothly when needed.            |

### Login Screen

|  ID   |                               Non-Functional Requirement                                |
| :---: | :-------------------------------------------------------------------------------------: |
| NFR11 |            Login Screen shall take special characters such as !, ?, and \*.             |
| NFR12 |                Login Screen shall be user-friendly and easy to navigate.                |
| NFR13 |               Login Screen shall be quick and responsive under 3 seconds.               |
| NFR14 |           Login Screen shall have two-factor authentication by phone number.            |
| NFR15 | Login Screen shall load username and password to cloud such as AWS for data protection. |

### Cards

|  ID   |                                         Non-Functional Requirement                                          |
| :---: | :---------------------------------------------------------------------------------------------------------: |
| NFR16 | Retrospective Cards shall handle a substantial number of concurrent users without reducing the performance. |
| NFR17 |              Retrospective Cards shall respond to user actions promptly, ensuring low latency.              |
| NFR18 |            Retrospective Cards shall ensure optimal resource utilization and prevent overloads.             |
| NFR19 |            User shall have the ability to change colors of cards to green, red, purple, or more.            |
| NFR20 |         Retrospective Cards shall be able to work across platforms such as firefox, chrome, google.         |

### Collaboration

|  ID   |                             Non-Functional Requirement                              |
| :---: | :---------------------------------------------------------------------------------: |
| NFR21 |          Collaboration system shall handle 10+ users for simultaneous work          |
| NFR22 | Collaboration system shall provide real time updates within 5 seconds after editing |
| NFR23 |     Users shall navigate any operating system such as firefox, chrome, safari.      |
| NFR24 |         Collaboration system shall backup data on AWS/other cloud service.          |
| NFR25 |            Collaboration system shall run efficiently with low latency.             |

# Change Management Plan

In order to acheive a highly successful change management plan, we have put together some key factors to ensure the best path and setup is enacted upon. These points below regard our change management plan in order to acheive our system being implemented into a new area of business as smoothly as possible.

### Acquire Change Management Team

To begin, one of the best ways to ensure the change management plan is to acquire a change management team. This shall allow managers to collaborate with personel who expertise in this field. Additionally, it allows managers to get hands on training with these experienced personel and work one on one with problems that may come up, and how to find solutions to handle them. Lastly, it would be a good idea to keep these expert personel alongside even after the new system is implemented to ensure transition phase is completed and proceeds to move forward smoothly.

### Employee Involvement

Next, we would like to get employee engagement of the new system periodically or within a certain timeframe. In other words, allow employees to try it out, but still have the ability to go back to the old system since the new one will not be implemented right away. In correlation, this can also allow feedback from the change process phase to see what could be done better or enhanced. Furthermore, it would be beneficial to listen to employees wants and needs at this stage to make the best possible system for everyone.

### Training Programs

Thirdly, starting small training programs as necessary would help employee and management transitions. Keep them short, sweet, and concise. It may also excite employees to show why this system will improve ease of life.

### Performance Metrics

Lastly, performance metrics would be vital. This would show higher leadership what the new system improves from the older system. Additionally, it keeps track of metrics such as time efficiency, budget increases, expense reductions, etc.. Performance metrics would also provide up to date metrics of employee feedback and business enhancement so fallback to the original system does not occur.

# Traceability Links

The area below regards our traceabilities between use case diagrams, class diagrams, and activity diagrams. This helps refer relationships established between artifacts throught our system development lifecycle.

## Use Case Diagram Traceabiltiy

### Home Screen

| Artifact ID | Artifact Name | Req. ID |
| :---------: | :-----------: | :-----: |
|  UseCase 1  | Create Board  |   FR1   |
|  UseCase 2  |  Join Board   |  FR21   |
|  UseCase 3  |  Share Board  |  FR25   |
|  UseCase 4  |  View Board   |   FR4   |

### Board Screen

| Artifact ID | Artifact Name  | Req. ID |
| :---------: | :------------: | :-----: |
|  UseCase 1  |    Add Card    |  FR19   |
|  UseCase 2  |  Delete Card   |  FR19   |
|  UseCase 3  |   Edit Card    |  FR19   |
|  UseCase 4  |   Move Card    |  FR18   |
|  UseCase 5  |  Add Section   |  FR18   |
|  UseCase 6  | Rename Section |  FR18   |
|  UseCase 7  | Delete Section |  FR18   |
|  UseCase 8  |  Sync. Board   |  FR20   |

## Class Diagram Traceability

| Artifact Name |                Requirement ID                |
| :-----------: | :------------------------------------------: |
|  class Board  | FR1, FR2, FR25, FR21, NFR1, NFR2, NFR3, NFR4 |
| classSection  |           FR18, FR19, FR16, NFR19            |
|  classSignUp  |           FR11, FR13, NFR11, NFR13           |
|   classUser   |                 FR15, NFR13                  |
|  classLogin   | FR12, FR13, FR14, NFR12, NFR11, NFR14, NFR15 |

## Activity Diagram Traceability

|           Artifact ID           |  Artifact Name   |                   Requirement ID                   |
| :-----------------------------: | :--------------: | :------------------------------------------------: |
| Activity Diagram - Board Screen |    View Board    |    FR4, FR9, FR10, FR18, FR20, FR21, NFR6, NFR9    |
| Activity Diagram - Board Screen | Fetch board info |                        TBD                         |
| Activity Diagram - Board Screen |     Add Card     |      FR3, FR16, FR17, FR18, FR19, FR20, NFR16      |
| Activity Diagram - Board Screen |    Edit Card     |      FR2, FR16, FR17, FR18, FR19, FR20, NFR16      |
| Activity Diagram - Board Screen |    Move card     |                        TBD                         |
| Activity Diagram - Board Screen |   Delete Card    |               FR2, FR18, FR19, NFR16               |
| Activity Diagram - Board Screen |   Add Section    |                     FR18, FR19                     |
| Activity Diagram - Board Screen |  Rename Section  |                     FR18, FR19                     |
| Activity Diagram - Board Screen |  Delete Section  |                     FR18, FR19                     |
| Activity Diagram - Board Screen |    Sync Board    |                        TBD                         |
| Activity Diagram - Home Screen  |    View Board    |      FR4, FR9, FR10, NFR6, NFR7, NFR8, NFR10       |
| Activity Diagram - Home Screen  |   Share Board    | FR21, FR22, FR23, FR25, NFR21, NFR22, NFR23, NFR25 |
| Activity Diagram - Home Screen  |  Generate Link   |                        TBD                         |
| Activity Diagram - Home Screen  |   Delete Board   |                        FR2                         |
| Activity Diagram - Home Screen  |   Create Board   |      FR1, FR3, FR10, NFR6, NFR7, NFR8, NFR10       |
| Activity Diagram - Home Screen  |    Save Board    |      FR1, FR3, FR10, NFR6, NFR7, NFR8, NFR10       |

# Software Artifacts

This section helps document our software artifacts in order to capture, preserve, and connect information related to our retrospective board. This can help with future design, development, or maintenance as necessary.

- [Project Proposal](https://github.com/manohargaddam/GVSU-CIS641-SOPHOS/blob/main/docs/proposal-template.md)
- [SRS Document](https://github.com/manohargaddam/GVSU-CIS641-SOPHOS/blob/main/docs/software_requirements_specification.md)
- [Usecases-Board Screen](https://github.com/manohargaddam/GVSU-CIS641-SOPHOS/blob/main/artifacts/Usecases%20-%20Board%20Screen.pdf)
- [Usecases - Home Screen](https://github.com/manohargaddam/GVSU-CIS641-SOPHOS/blob/main/artifacts/Usecases%20-%20Home%20Screen.pdf)
- [Activity Diagram - Board Screen](https://github.com/manohargaddam/GVSU-CIS641-SOPHOS/blob/main/artifacts/Activity%20Diagram%20-%20Board%20Screen.pdf)
- [Activity Diagram - Home Screen](https://github.com/manohargaddam/GVSU-CIS641-SOPHOS/blob/main/artifacts/Activity%20Diagram%20-%20Home%20Screen.pdf)
- [CRC And Class Model](https://github.com/manohargaddam/GVSU-CIS641-SOPHOS/blob/main/artifacts/CRC%2C%20Class%20Model.pdf)
- [Class Model And Object Model](https://github.com/manohargaddam/GVSU-CIS641-SOPHOS/blob/main/artifacts/Class%20Model%2C%20Object%20Model.pdf)
- [Design](https://github.com/manohargaddam/GVSU-CIS641-SOPHOS/blob/main/artifacts/Design.pdf)

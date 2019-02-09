                          ===========================================================================
                          ==== NOTE: THIS PROJECT IS IMPLEMENTED WITH THE HELP OF THE TRELLO API ====
                          ===========================================================================

The Internet (web-based) "e-AirTickets" information system, which enables the company's customers to book flights to a particular city in the country or a foreign country. Of the various functions to be supported, the current semester project focuses on "Submit and electronic reservation control process." However, before describing the process must be aware of the following:

•	Ticket application features can only adults have a passport and have received permission (visa) to travel to that country. A customer has the possibility to close several locations in one flight. For convenience of work we believe that the import process and authentication is not repeated for each additional person included in the reservation request.

The e-AirTickets interoperates (and interactively exchange information) with the following external systems (which need not concern you as to their function):

•	The NSA system supports management of personal identification data of the permit (visa) while traveling to a destination that requires input / residence permit (visa). The NSA keeps for each person who has taken such leave the following information: Surname, name, passport number and visa Special 9-digit code.
•	The KRATISEIS system assumes the management of information on train, completeness of seats and passengers who have a confirmed booking. The system operates in a manner similar systemGoogle Flightsand it is independent of the e-AirTicket system. For passengers who booked the system maintains the following: Last Name, First Name, Passport Number, Code Flight Number and positions. Also, for each service maintains the following: starting point, destination, Price, Date, Time, Airline, Flight Code and Remaining (free) Positions on the plane made flight.

The architecture and operation of the NSA and KRATISEIS systems are not the subject of your study when preparing its work.

Submission and electronic reservation control:
The e-AirTickets system properly supports the submission process and e-ticket booking control. This procedure is supported as follows. The system displays a special form in which the prospective client may apply for reservation. The reservation request contains the following information: Last Name, First Name, Date of Birth, Passport Number, and Code Flight Number Positions for reservation. By submitting the booking request made two controls: (a) if the prospective client is an adult (b) if the flight is valid and there are seats available on the flight in relation to the number of posts requested by the customer. The first check is done internally by the e-AirTickets system while the second is from KRATISEIS system.

To KRATISEIS system checks in real time whether the basis of the records relating to the bookings (number of positions in flight) is position availability, then: (a) In the positive case (i.e. if there are positions available on the flight), returns the e-airTickets system a positive positions control message (b) If not (i.e., if the available sites are fewer than the plurality thereof requested by the client), sends the e-airTickets system a short positions Control Message. If even one of the two criteria is not met, the prospective customer receives message Reservation failed and the process is terminated.

If both criteria are met, then the prospective customer enters, for control purposes, the Special Code visa. The Security Information (Name, Surname, Special visa code, passport number) are checked for their accuracy, in real time, the NSA system as follows: (a) If the Security Elements are acceptable, the NSA system returns to the system e- airtickets a positive safety control message (b) If the security elements is not acceptable, the system returns to the NSA e-airTickets system a negative Security Control Message.

If all the controls (age, availability of places and checking visa) is successful, the e-AirTickets system gives the application a unique Application Code Reservation is conveyed to the customer. The system stores the details Booking Request File Reservation. The application is further characterized as tested. If even one of the controls (age, seat availability and Visa Control) has failed, the e-AirTickets system informs the appropriate message Detention Failure customers (offering enables rapid review of detention) and the process terminates.

Analysis:
For the purposes of the problem would consider that a prior detailed analysis of basic operational requirements and the design team came up with a number of individual Data Flow Diagrams that describe the basic functional requirements of the system.

The process of interest is the "Submit & electronic ticket reservation check".



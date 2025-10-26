My full-stack project utilized a spectrum of frontend technologies, each serving a distinct purpose. The application initially used Express with server-side rendered HTML, which was effective for delivering static or semi-static content directly from the server. The most complex frontend was the single-page application (SPA), which managed its own state and routing on the client side. Unlike the server-rendered pages, the SPA provides a faster, more fluid user experience by loading a single HTML shell and dynamically updating content, feeling more like a native application. On the backend, a NoSQL database like MongoDB was chosen for its flexibility. Its document-oriented, JSON-like data structure is ideal for a project where data requirements might evolve, allowing for storage of varied data without the rigid schemas of a traditional SQL database.
	
Understanding the distinction between JavaScript and JSON was fundamental to this project. 
JavaScript is the programming language that runs in the browser and on the server, defining all logic and behavior. JSON, however, is a data-interchange format; it is merely a text-based 
representation of data. The server's API would serialize data from the database into a JSON string, and the frontend's JavaScript would fetch this string and parse it back into a usable JavaScript object to update the UI. Throughout the process, I frequently refactored code, such as 
consolidating repetitive database queries on the backend into a single, reusable function. On the frontend, the 
use of reusable UI components in the SPA, such as a standardized card for displaying data, proved 
invaluable. The benefits include drastically reduced code duplication, a consistent look and feel 
across the application, and much simpler maintenance.

Testing a full-stack application requires a clear understanding of its API, which is composed of 
various endpoints, or the specific URLs the client calls to interact with the server.  Testing involves confirming that each method on each endpoint functions correctly. The addition of security
complicated this process significantly. 

This course has been extreme valuable for giving me the opportunity to work on a complex project given both the development of the front end and the back end. It will make me more marketable as I have since show my ability to work through tough errors, diving deep into their meaning and what caused them, and understanding deeply the design process of the backend systems. 

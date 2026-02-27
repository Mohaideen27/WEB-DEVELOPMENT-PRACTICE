# 1. How the Internet Works

The internet is a global network of computers connected to each other. When you access a website, your computer (the Client) requests data from another computer (the Server) located somewhere else in the world. This data travels through a series of routers and switches via cables (fiber optics, copper) or wireless signals.

# 2. What is HTTP?

HyperText Transfer Protocol (HTTP) is the set of rules used for transferring data over the web.

- Request/Response: Your browser sends an HTTP request to a server, and the server sends back an HTTP response containing the website files (HTML, CSS, JS).
- HTTPS: This is the secure version of HTTP. It encrypts the data being sent so that hackers cannot read it.

# 3. Browsers and How They Work

Browsers (like Chrome, Firefox, or Safari) are software applications that "render" code. They take the text-based files sent by the server and turn them into the visual website you see. Understanding the Rendering Engine and how a browser parses HTML and CSS is a fundamental skill for a frontend developer.

# 4. DNS and How it Works

Domain Name System (DNS) is often called the "phonebook of the internet."

- Computers communicate using IP Addresses (like 192.168.1.1).
- Since humans find names easier to remember than numbers, DNS translates a domain name (like google.com) into the specific IP address of the server where that site is hosted.

# 5. Domain Names vs. Hosting

- Domain Name: This is your "address" on the web (e.g., www.yourname.com). You purchase this from a registrar.
- Hosting: This is the "house" where your website's files actually live. A hosting provider gives you space on a powerful server that is always connected to the internet so people can visit your site 24/7.

# 6. IP Addresses

Every device connected to the internet has a unique numerical label called an IP Address. This allows the network to know exactly where to send information so that your request for a website reaches your computer and not someone else's.

# Internet Cycle

The internet is the infrastructure, while web technologies (HTML, CSS, JavaScript) are the tools you use to build on top of that infrastructure.
The "Big Picture" You Need
Before you write your first line of code, make sure you can visualize this flow:

- The Request: You type www.example.com into your browser (The Client).
- The Lookup: Your browser asks a DNS Server for the IP address of that name.
- The Connection: Your browser sends an HTTP Request to that IP address.
- The Response: The Server at that address sends back files (HTML, CSS, JS).
- The Rendering: Your Browser reads those files and displays the website.

# Final words about Website

A website is just a collection of files sitting on a computer (server) elsewhere and that your browser's job is to go get them and show them to you, you are ready.

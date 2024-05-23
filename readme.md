 "# blog 1"
difference between HTTP v1.1 and HTTP v2

HTTP/1.1:
 let’s assume the situation when you make a request to the server for the geeksforgeeks.html page and server responds to you as a resource geeksforgeeks.html page. before sending the request and the response there is a TCP connection established between client and server. again you make a request to the server for image img.jpg and the server gives a response as an image img.jpg. the connection was not lost here after the first request because we add a keep-alive header which is the part of the request so there is an open connection between the server and client. there is a persistent connection which means several requests and responses are merged in a single connection. These are the drawbacks that lead to the creation of HTTP/2: The first problem is HTTP/1.1 transfer all the requests and responses in the plain text message form. The second one is head of line blocking in which TCP connection is blocked all other requests until the response does not receive. all the information related to the header file is repeated in every request.

 HTTP/2:
 HTTP/2 was developed over the SPDY protocol. HTTP/2 works on the binary framing layer instead of textual that converts all the messages in binary format. it works on fully multiplexed that is one TCP connection is used for multiple requests. HTTP/2 uses HPACK which is used to split data from header. it compresses the header. The server sends all the other files like CSS and JS without the request of the client using the PUSH frame.



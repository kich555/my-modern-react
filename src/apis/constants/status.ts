export const HTTP_SUCCESS_STATUS = {
  SUCCESS_REQUEST: 200, // <- Succes s
  CREATED: 201, // <- Resource created
  ACCEPTED: 202, // <- Request accepted
  NO_CONTENT: 204, // <- Successful request but no content
  RESET_CONTENT: 205, // <- Tells the user agent to reset the document which sent this request.
  PARTIAL_CONTENT: 206, // Get partial content like streaming
};

export const HTTP_ERROR_STATUS = {
  BAD_REQUEST: 400, //<- Client side request error
  UNAUTHORIZED: 401, //<- Authentication failed
  FORBIDDEN: 403, //<- Access denied
  NOT_FOUND: 404, //<- Can't find resource
  METHOD_NOT_ALLOWED: 405, // <- API does not allow method
  NOT_ACCEPTABLE: 406, //<- Accept header does not match with server
  PROXY_UNAUTHORIZED: 407, // <- Proxy level Authentication failed
  TIME_OUT: 408, //<- Server throw Request time out
  CONFLICT: 409, //<- Request conflict with server state (sync error)
  DELETED_DATA: 410, //<- Content has been deleted from the server.
  LENGTH_REQUIRED: 411, // <- Header's Content-Length requied
  PRECONDITION_FAILED: 412, // <- Header's has unfulfilled preconditions
  TOO_LARGE_PAYLOAD: 413, // <-Request is larger than the server defined.
  TOO_LONG_URI: 414, // <- URI is longer than the server defined.
  UNSUPPORTED_MEDIA_TYPE: 415, // <- Request's media format dose not match with server
  EXPECTATION_FAILED: 417, // <- Header's expect unsuitable
  A_GUNYANG_SIRO: 418, // <- April fool
  UNPROCESSABLE_REQUEST: 422, // <- Server successfully get request but can't handled
  UPGRADE_REQUIRED: 426, // <- Client should requset by another protocol
  PRECONDITION_REQUIRED: 428, // <-Request should precondition (prevent server state conflict)
  TOO_MANY_REQUESTS: 429, // <-Too many request
  TOO_LARGE_HEADER_FIELDS: 431, // <- Header's Cookie or cache is too big or User agent is too long
  INTERNAL_SERVER_ERROR: 500, // <- Server has error
  UNHANDLED_METHOD: 501, // <- Check http method 잘 보기 힘듬
  BAD_GATEWAY: 502, // <- Server side protocal issue
  SERVICE_UNAVALIABLE: 503, // <- Possibility that erver's traffic is overloaded.
  GATEWAY_TIME_OUT: 504, // <- Server side request time out
  //   NOT_SUPPROTED_HTTP_VERSION: 505,
  NETWORK_AUTH_REQUIRED: 511, // <- Client should authentication to get access authorization
};

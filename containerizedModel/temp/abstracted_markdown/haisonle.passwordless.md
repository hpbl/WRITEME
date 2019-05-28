# Passwordless

Passwordless is a modern node.js module for @abstr_hyperlink that allows _authentication_ and _authorization_ without passwords by simply sending one-time password (OTPW) tokens via email or other means. It utilizes a very similar mechanism as the reset password feature of classic websites. The module was inspired by Justin Balthrop's article " @abstr_hyperlink "

Check out a @abstr_hyperlink and further documentation on https://passwordless.net or have a look at an @abstr_hyperlink .

Token-based authentication is... * **Faster to implement** compared to typical user auth systems (you only need one form) * **Better for your users** as they get started with your app quickly and don't have to remember passwords * **More secure** for your users avoiding the risks of reused passwords

## Getting you started

The following should provide a quick-start in using Passwordless. If you need more details check out the @abstr_hyperlink , the @abstr_hyperlink , or the @abstr_hyperlink . Also, don't hesitate to raise comments and questions on @abstr_hyperlink .

### @abstr_number . Install the module:

`$ npm install passwordless --save`

You'll also want to install a @abstr_hyperlink such as @abstr_hyperlink and something to deliver the tokens (be it email, SMS or any other means). For example:

`$ npm install passwordless-mongostore --save`

`$ npm install emailjs --save`

If you need to store your tokens differently consider @abstr_hyperlink and @abstr_hyperlink .

### @abstr_number . Require the needed modules

You will need: * Passwordless * A TokenStore to store the tokens such as @abstr_hyperlink * Something to deliver the tokens such as @abstr_hyperlink for email or @abstr_hyperlink for text messages / SMS

@abstr_code_section 

### @abstr_number . Setup your delivery

This is very much depending on how you want to deliver your tokens, but if you use emailjs this could look like this: @abstr_code_section 

### @abstr_number . Initialize Passwordless

`passwordless.init()` will take your TokenStore, which will store the generated tokens as shown below for a MongoStore: @abstr_code_section 

### @abstr_number . Tell Passwordless how to deliver a token

`passwordless.addDelivery(deliver)` adds a new delivery mechanism. `deliver` is called whenever a token has to be sent. By default, the mechanism you choose should provide the user with a link in the following format:

`http://www.example.com/token={TOKEN}&uid={UID}`

That's how you could do this with emailjs: @abstr_code_section 

### @abstr_number . Setup the middleware for express

@abstr_code_section 

`sessionSupport()` makes the login persistent, so the user will stay logged in while browsing your site. Make sure to have added your session middleware _before_ this line. Have a look at @abstr_hyperlink how to setup sessions if you are unsure. Please be aware: If you decide to use @abstr_hyperlink rather than e.g. express-session as your middleware you have to set `passwordless.init(tokenStore, {skipForceSessionSave:true})`

`acceptToken()` will accept incoming tokens and authenticate the user (see the URL in step @abstr_number ). While the option `successRedirect` is not strictly needed, it is strongly recommended to use it to avoid leaking valid tokens via the referrer header of outgoing HTTP links. When provided, the user will be forwarded to the given URL as soon as she has been authenticated.

Instead of accepting tokens on any URL as done above you can also restrict the acceptance of tokens to certain URLs: @abstr_code_section 

### @abstr_number . The router

The following takes for granted that you've already setup your router `var router = express.Router();` as explained in the @abstr_hyperlink 

You will need at least URLs to: * Display a page asking for the user's email (or phone number, ...) * Receive these details (via POST) and identify the user

For example like this: @abstr_code_section 

What happens here? `passwordless.requestToken(getUserId)` has two tasks: Making sure the email address exists _and_ transforming it into a proper user ID that will become the identifier from now on. For example user@example.com becomes @abstr_number or 'u @abstr_number '. You call `callback(null, ID)` if all is good, `callback(null, null)` if you don't know this email address, and `callback('error', null)` if something went wrong. At this stage, please make sure that you've added middleware to parse POST data (such as @abstr_hyperlink ).

Most likely, you want a user registration page where you take an email address and any other user details and generate an ID. However, you can also simply accept any email address by skipping the lookup and just calling `callback(null, user)`.

In an even simpler scenario and if you just have a fixed list of users do the following: @abstr_code_section 

### @abstr_number . Login page

All you need is a form where users enter their email address, for example: @abstr_code_section By default, Passwordless will look for a field called `user` submitted via POST.

### @abstr_number . Protect your pages

You can protect all pages that should only be accessed by authenticated users by using the `passwordless.restricted()` middleware, for example: @abstr_code_section You can also protect a full path, by adding: @abstr_code_section 

### @abstr_number . Who is logged in?

Passwordless stores the user ID in req.user (this can be changed via configuration). So, if you want to display the user's details or use them for further requests, do something like: @abstr_code_section You could also create a middleware that is adding the user to any request and enriching it with all user details. Make sure, though, that you are adding this middleware after `acceptToken()` and `sessionSupport()`: @abstr_code_section 

## Common options

### Logout

Just call `passwordless.logout()` as in: @abstr_code_section 

### Redirects

Redirect non-authorised users who try to access protected resources with `failureRedirect` (default is a @abstr_number error page): @abstr_code_section 

Redirect unsuccessful login attempts with `failureRedirect` (default is a @abstr_number or @abstr_number error page): @abstr_code_section 

After the successful authentication through `acceptToken()`, you can redirect the user to a specific URL with `successRedirect`: @abstr_code_section While the option `successRedirect` is not strictly needed, it is strongly recommended to use it to avoid leaking valid tokens via the referrer header of outgoing HTTP links on your site. When provided, the user will be forwarded to the given URL as soon as she has been authenticated. If not provided, Passwordless will simply call the next middleware.

### Error flashes

Error flashes are session-based error messages that are pushed to the user with the next request. For example, you might want to show a certain message when the user authentication was not successful or when a user was redirected after accessing a resource she should not have access to. To make this work, you need to have sessions enabled and a flash middleware such as @abstr_hyperlink installed.

Error flashes are supported in any middleware of Passwordless that supports `failureRedirect` (see above) but only(!) if `failureRedirect` is also supplied: \- `restricted()` when the user is not authorized to access the resource \- `requestToken()` when the supplied user details are unknown

As an example: @abstr_code_section 

The error flashes are pushed onto the `passwordless` array of your flash middleware. Check out the @abstr_hyperlink how to pull the error messages, but a typical scenario should look like this:

@abstr_code_section 

### Success flashes

Similar to error flashes success flashes are session-based messages that are pushed to the user with the next request. For example, you might want to show a certain message when the user has clicked on the token URL and the token was accepted by the system. To make this work, you need to have sessions enabled and a flash middleware such as @abstr_hyperlink installed.

Success flashes are supported by the following middleware of Passwordless: \- `acceptToken()` when the token was successfully validated \- `logout()` when the user was logged in and was successfully logged out \- `requestToken()` when the token was successfully stored and send out to the user

Consider the following example: @abstr_code_section 

The messages are pushed onto the `passwordless-success` array of your flash middleware. Check out the @abstr_hyperlink how to pull the messages, but a typical scenario should look like this:

@abstr_code_section 

### @abstr_number -step authentication (e.g. for SMS)

For some token-delivery channels you want to have the shortest possible token (e.g. for text messages). One way to do so is to remove the user ID from the token URL and to only keep the token for itself. The user ID is then kept in the session. In practice his could look like this: A user types in his phone number, hits submit, is redirected to another page where she has to type in the token received per SMS, and then hit submit another time. 

To achieve this, requestToken stores the requested UID in `req.passwordless.uidToAuth`. Putting it all together, take the following steps:

_* @abstr_number : Read out`req.passwordless.uidToAuth`_ *

@abstr_code_section 

_* @abstr_number : Display another form to submit the token submitting the UID in a hidden input_ *

@abstr_code_section 

_* @abstr_number : Allow POST to accept tokens_ *

@abstr_code_section 

### Successful login and redirect to origin

Passwordless supports the redirect of users to the login page, remembering the original URL, and then redirecting them again to the originally requested page as soon as the token has been accepted. Due to the many steps involved, several modifications have to be undertaken:

_* @abstr_number : Set`originField` and `failureRedirect` for passwordless.restricted()_ *

Doing this will call `/login` with `/login?origin=/admin` to allow later reuse @abstr_code_section 

_* @abstr_number : Display`origin` as hidden field on the login page_ *

Be sure to pass `origin` to the page renderer. @abstr_code_section 

_* @abstr_number : Let`requestToken()` accept `origin`_ *

This will store the original URL next to the token in the TokenStore. @abstr_code_section 

_* @abstr_number : Reconfigure`acceptToken()` middleware_ *

@abstr_code_section 

### Several delivery strategies

In case you want to use several ways to send out tokens you have to add several delivery strategies to Passwordless as shown below: @abstr_code_section To simplify your code, provide the field `delivery` to your HTML page which submits the recipient details. Afterwards, `requestToken()` will allow you to distinguish between the different methods: @abstr_code_section 

### Modify lifetime of a token

This is particularly useful if you use shorter tokens than the default to keep security on a high level: @abstr_code_section 

### Allow token reuse

By default, all tokens are invalidated after they have been used by the user. Should a user try to use the same token again and is not yet logged in, she will not be authenticated. In some cases (e.g. stateless operation or increased convenience) you might want to allow the reuse of tokens. Please be aware that this might open up your users to the risk of valid tokens being used by third parties without the user being aware of it.

To enable the reuse of tokens call `init()` with the option `allowTokenReuse: true`, as shown here: @abstr_code_section 

### Different tokens

You can generate your own tokens. This is not recommended except you face delivery constraints such as SMS-based authentication. If you reduce the complexity of the token, please consider reducing as well the lifetime of the token (see above): @abstr_code_section 

### Stateless operation

Just remove the `app.use(passwordless.sessionSupport());` middleware. Every request for a restricted resource has then to be combined with a token and uid. You should consider the following points: * By default, tokens are invalidated after their first use. For stateless operations you should call `passwordless.init()` with the following option: `passwordless.init(tokenStore, {allowTokenReuse:true})` (for details see above) * Tokens have a limited lifetime. Consider extending it (for details see above), but be aware about the involved security risks * Consider switching off redirects such as `successRedirect` on the `acceptToken()` middleware

## The tokens and security

By default, tokens are generated using @abstr_number Bytes of pseudo-random data as produced by the cryptographically strong crypto library of Node.js. This can be considered strong enough to withstand brute force attacks especially when combined with a finite time-to-live (set by default to @abstr_number h). In addition, it is absolutely mandatory to store the tokens securely by hashing and salting them (done by default with TokenStores such as @abstr_hyperlink ). Security can be further enhanced by limiting the number of tries per user ID before locking that user out from the service for a certain amount of time.

## Further documentation

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Tests

Download the whole repository and call: `$ npm test`

## License

@abstr_hyperlink 

## Author

Florian Heinemann @abstr_hyperlink 

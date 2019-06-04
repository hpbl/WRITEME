# Using OAuth With APIs

## Objectives

@abstr_number . Understand what OAuth is and why we use it. @abstr_number . Use OAuth with the Foursquare API.

## Lesson

We're going to expand on our Coffee Shop example to use OAuth with the Foursquare API to perform actions on behalf of an individual user.

### API User Authentication

Until now, we've been authenticating to APIs at the _application_ level using a Client ID/Secret pair with each request.

As we learned, this level of application authentication is important in that it allows the API provider to ensure good behavior by any client application.

Application-level authentication like this gives us access to application-level functions, for instance, venue search. This is an application-level function because you don't need to be any particular user to search for a coffee shop. In fact, if we look at the @abstr_hyperlink API documentation, we see an entry: **Requires Acting User: No** at the top.

Compare that to the documentation for @abstr_hyperlink , and we see that this function does require an acting user, which makes sense, because the application doesn't have friends, an individual user does.

So, if we want to show our user what their friends are doing, we need a way of authenticating the user to Foursquare through our application.

It's not enough for a user to be logged in to Foursquare and use our app, because Foursquare needs to know that we are acting on _behalf_ of a user and that the user has _allowed_ that action.

We could write some code to log in on behalf of the user, but that would require us to ask the user for their Foursquare login credentials. Think about that as if you're the user. Are you going to give some random website your login and password for Foursquare? The very thought should make you very suspicious of our motives.

@abstr_image 

Beyond the security issues, there's the problem of keeping things up to date. If we ask the user to log in to Foursquare on every request, that's a horrible experience.

However, if we store the user's Foursquare login info, we have whole other problems.

The first is that we'd have to store them unencrypted, in plain text, because Fourquare expects a person to log in with their unencrypted credentials. So we have another security problem. Now we have a database full of unencrypted Foursquare credentials waiting for anyone to get in there and grab them all.

Beyond the security issue is a logistical one. If the user changes her password on Foursquare, we'll never know about it, and our app will break. Now she has to update her Foursquare credentials in _two_ places, which is cumbersome to say the least.

### Enter OAuth

Okay, how do we authenticate a user without them entering their username and password into our application? @abstr_hyperlink .

OAuth provides a way for one application to authenticate to another on behalf of a user by means of a revokable, expirable _token_. If our application has a Foursquare token for the user, and someone gets access to our database of tokens, all of them can be revoked and a hacker never gets access to individual user credentials.

An OAuth token also provides a standard way for our application to tell Foursquare "hey, this user says we can do things for her", because part of implementing OAuth requires the user to take action on the provider (Foursquare, in this case), explicitly authorizing our application.

### OAuth Authentication Flow

OAuth authentication workflow involved three steps at a high level.

@abstr_number . Request access from the provider site (often via redirect to a special form) @abstr_number . Redirect back to our site with a code @abstr_number . Request a token from the provider using the code

Take a look at the @abstr_hyperlink , specifically the second subsection, under **Code (preferred)**. It describes how to do those three steps with Foursquare.

#### Checking Authentication

The first thing we want to do is figure out if a user has already authenticated to Foursquare in this session.

Ultimately, users will be considered "logged in" if they have an access token stored in their session. So, let's create a private method `#logged_in?` in your `ApplicationController` that will return false if `session[:token]` is nil and true otherwise:

@abstr_code_section 

#### Redirect Users To Request Foursquare Access

The first step in the OAuth flow is to direct the user to Foursquare to request access if we haven't already.

According to the @abstr_hyperlink , that URL looks like this:

@abstr_code_section 

Part of our URL includes passing a `redirect_uri` parameter, so we'll need to set that up. Update your @abstr_hyperlink and add a Redirect URI. Let's set it to `http://localhost: @abstr_number /auth` and save the app.

Because we're going to be using our client ID/secret a lot, instead of always typing it in, let's use a `.env` @abstr_hyperlink to hold our `FOURSQUARE_CLIENT_ID` and `FOURSQUARE_SECRET` values. Once that's set up, we'll be able to access these values as `ENV['FOURSQUARE_CLIENT_ID']` and `ENV['FOURSQUARE_SECRET']`, which is much easier to keep track of. Follow the instructions to set up Dotenv and add your app's client ID and secret. Don't forget to restart your server after you change any values in `.env`!

**Top-tip:** Dotenv is a great way to keep configuration variables for development, but always remember to add `.env` to your `.gitignore` so you don't share your secrets with everyone else!

Okay, that should handle everything we need to make this first request, so now we need to set up the redirect.

Write another private method `#authenticate_user` that will redirect the user to `https://foursquare.com/oauth @abstr_number /authenticate` _if_ the user is not already logged in. Then we'll set up a `before_action` to check authentication.

@abstr_code_section 

Once you've implemented `#authenticate_user`, set the authentication as a `before_action` in your `ApplicationController`. In your `SessionsController`, skip the `before_action` with `skip_before_action :authenticate_user, only: :create`. Now, whenever users do not have an access token stored in their session, they will be redirected to the Foursquare authorization URL.

Let's try it out. Start your Rails server and try to hit the `/search` page. You should get redirected to Foursquare! Hit the "Allow" button and let's see what happens.

Error. Okay. That's good. That means it's working so far. Now we need to implement step two.

#### Foursquare Redirects Back To Our Site With A Code

When you registered your application, you set your redirect URL to `http://localhost: @abstr_number /auth`. This is where Foursquare is sending users after the login process. Now we need to handle that request.

In your `routes.rb` file, add a route for `get '/auth', to: 'sessions#create'`. This will route that redirect to our `SessionsController` and a `create` action, which is where we'll get the token. So now let's implement that.

#### Request A Token From Foursquare With The Code

Back to our handy @abstr_hyperlink ! Foursquare redirects users with a code that can be accessed through `params` and exchanged for an access token with a second GET request. We'll need to provide our ID, secret, and the code we just got.

We're going to use @abstr_hyperlink to send this request in our controller action. If all goes well, according to the docs we can expect a JSON response with an `access_token`, so we'll parse that and put it in our `session[:token]`.

@abstr_code_section 

**Top-tip:** Make sure to skip the `authenticate_user` `before_action` when you're creating a session, otherwise you'll end up in an infinite loop of trying to figure out who the user is, which is a very existential bug.

#### Use the access token to access the API

Now that users have their API tokens, they can make calls to all of the API endpoints as long as those tokens are included in the request. Back in our @abstr_hyperlink , under the **Requests** section, we see that all we have to do now is add a `oauth_token` parameter to any request with the user's token.

Let's look again at the @abstr_hyperlink documentation and add a friends list to our application. First, let's add a route to `/friends`:

@abstr_code_section 

And then handle that in our controller:

@abstr_code_section 

**Top-tip:** Like many API providers, Foursquare gives you a way to try API calls right from the documentation. Try it with the @abstr_hyperlink to examine the response JSON.

Finally, let's set up our view:

@abstr_code_section 

Now load `/friends` and, just like that, they'll be there for you!

@abstr_image 

View @abstr_hyperlink on Learn.co and start learning to code for free.

View @abstr_hyperlink on Learn.co and start learning to code for free.

View @abstr_hyperlink on Learn.co and start learning to code for free.

# Modular HTML, CSS, & JS Workshop

  * @abstr_hyperlink 
  * @abstr_hyperlink 



You&# @abstr_number ;ve been tasked with developing a new front end feature. HTML, CSS, and JavaScript are nothing new to you, in fact you even know a few tricks to get this feature out the door. It doesn&# @abstr_number ;t take you long and the code works like a charm, yet you have a looming suspicion that some of the code might not be up to par. You&# @abstr_number ;re likely right, and you&# @abstr_number ;re definitely better than that.

We often write code without paying attention to the bigger picture, or overall code base. Upon stepping back we notice areas of duplicate code, ripe for refactoring. It&# @abstr_number ;s time to build more modular front ends, focusing on the reusability of HTML, CSS, and JavaScript, and to take maintainability to heart.

## Assembling Layout

### Step @abstr_number

  * Within the playlist, position the album artwork to the left of the song title and artist name
  * Keep the album artwork vertically centered with the song title and artist name



**HTML** @abstr_code_section 

**CSS** @abstr_code_section 

### Step @abstr_number

  * Reusing styles from positioning the album artwork, add a `Currently loading…` section at the top of the file to displayed before the playlist loads



**HTML** @abstr_code_section 

**CSS** @abstr_code_section 

## Accommodating Content

### Step @abstr_number

  * Add `previous`, `play`, and `next` controls within the player
  * Make the `previous` and `next` controls slightly smaller than the `play` control
  * Keep all controls vertically centered



**HTML** @abstr_code_section 

**CSS** @abstr_code_section 

### Step @abstr_number

  * Add `favorite` and `share` controls within each song in the playlist
  * Reuse as many styles from the player controls as possible



**HTML** @abstr_code_section 

**CSS** @abstr_code_section 

### Step @abstr_number

  * Animate the player controls to appear from the bottom upon hovering over the player
  * Animate the song controls to appear from the right upon hovering over a song
  * Add hardware acceleration to each of the animations



**HTML** @abstr_code_section 

**CSS** @abstr_code_section 

## Setting Up the JavaScript Application

### Step @abstr_number

  * Our application will be using a few JavaScript libraries, let&# @abstr_number ;s load these files on the page
  * We can load @abstr_hyperlink and @abstr_hyperlink from a CDN:

@abstr_code_section 

  * Add local files that allow us to interact with Rdio:

@abstr_code_section 

  * Load a JSON file with our playlist data (to prevent us from having to constantly hit Rdio during development):

@abstr_code_section 

  * Add `data-player-loading` to the loading flag element

  * Add `data-player-container` to the main player container element, and set the display property to `none` for the `.container` class

  * Look at `PLAYLIST_DATA.data` and use the console to familiarize yourself with the data structure




### Step @abstr_number

  * Create an object in `app.js` called `App` and load the script on the page:

@abstr_code_section 

  * Give the `App` object `RdioService`, `Templates`, `Player`, and `Playlist` properties, and assign all these properties a value of any empty object

  * Give the object an `initialize` function &# @abstr_number ; leave the function body empty for now



### Step @abstr_number

  * Assign `App.RdioService` to a new instance of `RdioService`



### Step @abstr_number

  * Inside the `initialize` function, create a new instance of the `Player` object and pass in a `playlistId` key with a value of `p @abstr_number`
  * Assign that new object to `App.Player`
  * Call `initialize` on document ready so that the application boots when the page loads:

@abstr_code_section 

  * Take a look at `App.Player.playlistData` in the console, the data should look the same as `PLAYLIST_DATA.data`




## Building the Playlist Object

### Step @abstr_number

  * Create a new object called `Playlist` in a file called `playlist.js` and load the script on the page:

@abstr_code_section 

  * Assign it to a constructor function that takes a parameter of `data`

  * Set some instance variables in that function: `data`, `songs`, `currentSong`
    * Initalize `songs` with an empty arrays
    * Initalize `currentSong` with an empty object
    * Assign `data` to the value `data` parameter passed in to the constructor



### Step @abstr_number

  * Create an `initialize` method on the prototype of the `Playlist` object &# @abstr_number ; leave the function body empty for now
  * Call the `initialize` method from the constructor function after the instance variables are assigned



### Step @abstr_number

  * Back in the `player.js` file, find the `getPlaylistData` callback _(Hint: it &# @abstr_number ;s where the `self.playlistData = data` assignment happens)_
  * In that callback function, create a new `Playlist` object and assign it to `App.Playlist`
  * Pass the callback `data` into the new `Playlist` object
  * Take a look at `App.Playlist.data` in the console, the data should look the same as `PLAYLIST_DATA.data` and `App.Player.playlistData`



## Building the Song Object

### Step @abstr_number

  * Create a new object called `Song` in a file called `song.js` and load the script on the page:

@abstr_code_section 

  * Assign it to a constructor function that takes a parameter of `data`

  * Set some instance variables in that function: 
    * `id` and assign it to `data.id`
    * `title` and assign it to `data.name`
    * `artist` and assign it to `data.artist`
    * `artwork` and assign it to `data.icon @abstr_number`



### Step @abstr_number

  * Test it out the new `Song` object with the following code:

@abstr_code_section 




## Rendering the Song

### Step @abstr_number

  * Add data attributes to the markup in the places where the song information should be rendered, we&# @abstr_number ;ll use: `data-song-title`, `data-song-artist`, `data-song-artwork`
  * Be sure to get both places for the artwork attribute



### Step @abstr_number

  * Create an `render` method on the prototype of the `Song` object
  * Use jQuery to render the song title, artist and artwork to the browser using the data attributes as your selectors
  * Try rendering you song object from the previous section: `mySong.render()`



## Rendering the Playlist

### Step @abstr_number

  * In the `initialize` method `Playlist` object use a `forEach` loop to create new `Song` objects from each song entry in the `data` object
  * Push those objects into the `songs` array in the `Playlist` object
  * Take a look at `App.Playlist.songs` in the console, you should see a bunch of `Song` objects
  * See if you can render one of them. _(Hint:`App.Playlist.songs[ @abstr_number ].render()`)_



### Step @abstr_number

  * Now we need to create a Handlebars template so that we can render each song to the player&# @abstr_number ;s playlist
  * Add a script tag with the type of `text/x-handlebars-template` and add the `data-template-song` data attribute (This will be the container for the Handlebars template)
  * Copy one of the `li`s from the existing markup and paste it inside the Handlebars container
  * Add Handlebars variables for each of dynamic pieces of the template (`title`, `artist` and `artwork`) (Variables in Handlebars are defined by double curly braces, i.e. `{{myVariable}}`)



### Step @abstr_number

  * Add the template to the `App.Templates` object and give it the name `playlistSong`
  * Use the Handlebars.compile function like so: `Handlebars.compile($('[data-template-song]').html())`
  * Test the template rendering with the following code:

@abstr_code_section 




### Step @abstr_number

  * Add a data attribute of `data-playlist` to the `ul` tag that wraps all of the list items in the playlist
  * Remove all the static `li` elements from the playlist, leaving just the wrapping `ul` tag
  * Create a `render` method in the `Playlist` prototype to render the playlist
  * We only want to display the next @abstr_number songs on the playlist, so use the `slice` function to get the first @abstr_number songs from the `songs` array
  * Now, use a `forEach` loop the render each object in your new array and append it to the `data-playlist` `ul` node
  * Try out your new render method by calling `App.Playlist.render()` in the console



### Step @abstr_number

  * At the beginning of the render method, assign the first song in the `songs` array to `currentSong` so that we can render that song to the player
  * Since the first song is now our `currentSong`, let move that element to the bottom of the array using the following code:

@abstr_code_section 

  * Call `render` on `currentSong` at the end of the `Playlist` render function

  * In the `Playlist` `initialize` function, add a call to `render` so that the playlist will be rendered when then object is created



## Final Product

@abstr_image 

# node-taas-client

A node.js module to interface with the Things-as-a-service, client-side.

This package implements a node.js module for @abstr_hyperlink clients, talking either directly to the steward or through a @abstr_hyperlink .

## Install
    
    
    npm install taas-client
    

## API

### Ready!
    
    
    var ClientAPI = require('taas-client');
    

### Set!

You can identify the steward by either:

  * steward.name:

    * IP address, e.g., ' @abstr_number . @abstr_number . @abstr_number .xxx', or ' @abstr_number . @abstr_number . @abstr_number . @abstr_number '
    * domain name, e.g., 'zekariah', or 'localhost'
    * place name, i.e., place @abstr_number .name such as 'zephyr'
  * steward.uuid:

    * place UUID, e.g., @abstr_number f @abstr_number f @abstr_number -da @abstr_number - @abstr_number e @abstr_number - @abstr_number b @abstr_number - @abstr_number ab



The place and the UUID are advertised by the steward on the local network. You should also include a reference to either the location of the steward's certificate file (steward.crtPath) or the actual certificate itself (steward.crtData).

If your steward is registered with a TAAS cloud, then you should also deifne the cloud.service domain and the location of TAAS certificate (cloud.crtPath) or the actual certificate itself (cloud.CrtData).

The state machine is fairly simple:

  * There are two channels: 'console' and 'management'.

  * Each of these channels will emit an 'open' event, letting you know whether login is required.

  * When a channel is ready for use, it will emit a 'ready' event

    * In the case of the 'console' channel, the 'data' parameter is an array indicating what privileges are authorized.

    * In the case of the 'management' channel, the 'data' parameter is a user object.

  * If either channel detects a remote close or an error, then these events are emitted, respectively.




The API does not attempt to recover on either a close, or error. Instead, you may choose to start over or exit, as you see fit.
    
    
    var steward = new ClientAPI.ClientAPI(
    { steward : { name    : 'steward.local'
                , crtPath : 'server.crt'
                }
    
    , cloud   : { service : 'taas.thethingsystem.net'
                , crtPath : 'cloud.crt'
                }
    }).on('open', function(channel, loginP) {
      // check to see if login required
      if (!loginP) {
        if (channel === 'management') console.log('steward in developer mode, no need to log in.');
        return;
      }
    
      steward.login('mrose/ @abstr_number ', ' @abstr_number ', function(err, error) {
        if (!!err) return console.log('>>> login error: ' + JSON.stringify(error));
    
        // logged in!
      });
    }).on('ready', function(channel, data) {
      // when the management channel is ready, it's time to get to work!
      if (channel !== 'management') return;
    
      // ok, let's get to work!
    }).on('close', function(channel) {
      // typically, just log and recover/exit
    }).on('error', function(err, channel) {
      // typically, just log and recover/exit
    });
    

### Go!

There is one state variable, 'actors', that is an object containing information about all known actors in the system, e.g., 'place/ @abstr_number ', 'device/ @abstr_number ', and so on. As changes are reported by the steward, an 'actor' event is omitted with the identity and classification of the actor:
    
    
    // use this event to filter changes on either a particular device (whoami) or deviceType (whatami)
    steward.on('actor', function(whoami, whatami) {
    
    });
    

The API provides several methods to communicate with the steward. Each method takes a callback which may be invoked more than once. Blocking operations in the steward typically result in two callbacks, the first is a success or failure indicator; and, if success is indicated, then a subsequent callback is made. The 'list _' and 'perform_ ' operations are not blocking, hence the callback is made exactly once.
    
    
    // if (!doneP), then only a success/failure indication is present, and a subsequent invocation will occur!
    var cb = function(message, doneP) { ... };
    
    // invoked exactly once
    var cb @abstr_number  = function(message) { ... };
    
    
    steward.createActivity(name, uuid, event, task, armed, comments, cb);
    
    steward.createDevice(name, uuid, whatami, info, comments, cb);
    
    steward.createEvent(name, uuid, actor, observe, parameter, comments, cb);
    
    steward.createGroup(name, uuid, type, operator, members, comments, cb);
    
    steward.createTask(name, uuid, actor, perform, parameter, comments, cb);
    
    steward.createUser(name, uuid, role, clientName, comments, cb);
    
    
    steward.listActivity(activityID, options, cb @abstr_number );
    
    steward.listActors(prefix, options, cb @abstr_number );
    
    steward.listDevice(deviceID, options, cb @abstr_number );
    
    steward.listEvent(eventID, options, cb @abstr_number );
    
    steward.listGroup(groupID, options, cb @abstr_number );
    
    steward.listTask(taskID, options, cb @abstr_number );
    
    steward.listUser(userID, options, cb @abstr_number );
    
    
    steward.modifyActivity(activityID, name, armed, event, task, cb);
    
    steward.modifyGroup(groupID, name, type, operator, members, cb);
    
    
    steward.performActivity(activityID, cb @abstr_number );
    
    steward.performActor = function(prefix, perform, parameter, cb @abstr_number );
    
    steward.performDevice(deviceID, perform, parameter, cb @abstr_number );
    
    steward.performGroup(groupID, perform, parameter, cb @abstr_number );
    
    steward.performTask(taskID, cb @abstr_number );
    
    
    steward.deleteActivity = function(activityID, cb);
    
    // steward.deleteDevice = function(deviceID, cb);
    
    steward.deleteEvent = function(eventID, cb);
    
    steward.deleteGroup = function(groupID, cb);
    
    steward.deleteTask = function(taskID, cb);
    

### Finally!

Enjoy.

# License

@abstr_hyperlink license. Freely have you received, freely give.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

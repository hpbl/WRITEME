# ARP-spoofing

> Python script to perform ARP spoofing on a network

This python script allows you to perform ARP spoofing, which can be used to perform attacks such as denial of service, man in the middle, or session hijacking.

# Requirements

For this attack to be performed, you need the following tools to be installed on the machine you will be performing this attacking from: @abstr_code_section 

# Requirement details

Python comes installed on ubuntu by default. 

You can get Scapy from the Ubuntu Software Center: @abstr_image 

You can also get Nmap from the Ubuntu Software Center: @abstr_image 

Wireshark is also available on the Ubuntu Software Center, however I recommend getting the latest version from the website: @abstr_code_section 

# Installation

You can download this python script by running the following command in the terminal: @abstr_code_section 

# Setting up IP Forwarding

We will be using this script to perform man in the middle attack. Which means we will use this to get the data from another device connected to the same network.

The first step you have to do it turn on the ip forwarding. This step is required so that the connection on the victim's device does not get interrupted. 

To turn on IP forwarding, open terminal and type: @abstr_code_section 

This will open up the ip_forward file. The default value in it should be `@abstr_number`, change it to `@abstr_number` and then save and exit. @abstr_image 

Now that we have that sorted, we need to get the MAC address and the IP address of the victim we want to attack on our network. To do that, you first need to see what IP address the router has given you. On Ubuntu you can get that info by going to the Connection Information menu: @abstr_image 

# Gathering MAC and IP addresses

According to this we are connected on IP Address: `@abstr_number . @abstr_number . @abstr_number . @abstr_number` and the Route IP is: `@abstr_number . @abstr_number . @abstr_number . @abstr_number` Now here is where a things get a bit tricky because you need a bit of technical knowledge of how IPs work. I wont be going into full details, however I will explain the part that is required for this script to work.

In the above image, you also can see that our Subnet Mask is: `@abstr_number . @abstr_number . @abstr_number . @abstr_number` The `@abstr_number` in the above simply means that that block `@abstr_number - @abstr_number` is available to the client, while the rest of the blocks are available to the host.

Now keep that in mind and look at this image below: @abstr_image 

As you can see the Mask length for the `@abstr_number . @abstr_number . @abstr_number . @abstr_number` is `@abstr_number`, you can calculate this yourself by converting the Subnet Mask into binary and then counting all the ones. Example: `@abstr_number . @abstr_number . @abstr_number . @abstr_number` into binary: `@abstr_number @abstr_number . @abstr_number @abstr_number . @abstr_number @abstr_number . @abstr_number @abstr_number` So the number of ones are `@abstr_number`. Now you might be wondering why we need this number? Well this is required for the next step, which is to get the MAC addresses and the IP addresses of everyone connected to your network.

Open up the terminal and type:

@abstr_code_section 

Here is mine: @abstr_code_section 

You should see something like this after it is done scanning your network: @abstr_image 

# Performing the attack

Now that you have gotten the IP address and the MAC address of the victim, all you need to do is launch the actual attack. To do that fire up the script you downloaded. @abstr_code_section 

Now all you need to do is enter the details it asks. Here is an example of what it should look like: @abstr_image 

If everything goes well, you should be able to start sending packets. @abstr_image 

Now while this ARP request is being spammed, we need to open wireshark @abstr_image 

Select the proper interface you are connected to. If you are not sure, select the `any` option and click start.

You should see a screen like this now: @abstr_image 

With the `ARP` protocol requests getting spammed. If you don't see this, you have done something wrong. 

Now to see what the victim is browsing, you can type the following in the filter: @abstr_code_section 

> Note: This filter allows you to see the http traffic only. If you want to look at other traffic, I recommend you learn how to use wireshark as this will help you to snoop around more easily. Because the IP address of the victim is `@abstr_number . @abstr_number . @abstr_number . @abstr_number` for me, I will type the following in the filter: @abstr_code_section 

and press enter.

@abstr_image 

As you see from the image above, the victim is on an android device and is browsing the website `www.tagcraftmc.com`

This sort of attack should work on any network that uses ARP request to get the device details.

# Extra

Here is a video of me performing all of these steps, so it is much easier for you to follow:

@abstr_hyperlink 

# Credits

This script is made by `www.arppoisoning.com` However, I have made this script easier to use.

# AutoCircle_generater

This software is a ROS node that generates RAVEN motion commands for it to follow a predefined circle trajectory. The circle RADIUS and orbitting speed are tunable. There are @abstr_number ROS nodes in this folder: talkerAutoCircle and listenerAutoCircle. 

## ROS topics :

The two ROS nodes talkerAutoCircle and listenerAutoCircle exchange information through ROS topics. Below are the two ROS topics that this software use in order to communicate with the main RAVEN software. This is the @abstr_hyperlink to the .msg files.

@abstr_number . **raven_state.msg** : This topic stores current RAVEN position and orientation values. @abstr_number . **raven_automove.msg** : This topic stores the motion command for RAVEN to move accordingly.

## ROS nodes :

@abstr_number . **talkerAutoCircle** : This ROS node is the command generator. It subscribes to raven_state.msg ROS topic to get current RAVEN status, then computes corresponding motion commands for the robot arm to follow circle trajectory. Finally, it publishes to raven_automove.msg ROS topic. @abstr_number . **listenerAutoCircle** : This ROS node is only for testing. It serves the same purpose as the main RAVEN software, and will be replaced during actual use. It communicates with the talkerAutoCircle by listening to the motion commands and sends out RAVEN position and orientation feedback after following the command. Thus, it subscribes to raven_automove.msg ROS topic, and updates RAVEN position and orientation accordingly, then publishes raven_state.msg ROS topic to show how the robot arm is currently posed.

## Files :

This is the big picture of what files are in this AutoCircle_generater repository and what are each files are for. Note that only the ones specified as (original) are the original files created here, others are copied from the main RAVEN software and do NOT need to copy again to the main RAVEN software when combining. 

**/msg folder:**

\---- **raven_automove.msg**

\---- **raven_state.msg**

**/src folder:**

\---- **/raven_ @abstr_number folder:**

\-------- **raven_automove.h**

\-------- **raven_state.h**

\---- **DS @abstr_number .h**

\---- **DS @abstr_number .h**

\---- **Raven_Controller.cpp** \--------------------- (original)

\---- **Raven_Controller.h** \----------------------- (original)This class controls the threads and workflow.

\---- **Raven_PathPlanner.cpp** \-------------------- (original)

\---- **Raven_PathPlanner.h** \---------------------- (original)This class defines all the math and path planning.

\---- **listener.cpp** \----------------------------- (original)This will be replaced with main RAVEN software.

\---- **talker.cpp** \------------------------------- (original)This file is where main is.

\---- **tools.h**

**AutoCircle Generator flowchart.png** \----------- (original)The ROS publish/subscribe flowchart for better understanding.

**CMakeLists.txt** \------------------------------- (original)Should merge with CMakeLists.txt in main RAVEN software.

**README.md** \------------------------------------ (original)This file!

**package.xml** \---------------------------------- (original)The ROS package.xml file.

The file talker.cpp is the heart of AutoCircle generater, it is where the main is. This file uses on methods defined in class Raven_Controller. Inside of class Raven_Contoller, there are two threads - ros_thread and console_thread, which takes charge of the ROS publishing/subscribing issues and user console inputs respectively. The class Raven_Contoller depends on class Raven_PathPlanner to compute and design circular trajectories. So, it is basically where all the math is! In the class Raven_Controller, there are two Raven_PathPlanner objects managing the motion of LEFT and RIGHT arm of RAVEN. (All these files belong to the talkerAutoCircle ROS node.) And since we are NOT actually connected to the main RAVEN software yet, we have listener.cpp as the simplified version to simulate the main RAVEN software just so talker.cpp has someone to interact with. Thus, listener.cpp will be completely replaced when we actually combine it with the RAVEN code. (This file belongs to the listenerAutoCircle ROS node.)

## How To Use This Code:

This software design allows RAVEN to be controlled and follow predefined circular trajectory from any remote computer, so below is the instruction for hardware setup and terminal commands for it to work. Computer A: The computer that downloads this AutoCircle_generater software and runsroscore from here. Computer B: This is the computer that RAVEN main software runs on. (This should be already setup and ready to go.)

@abstr_number . **Find out hostname and IP** : On both computer A and computer B, open up a terminal, type in "hostname" to find out the hostname of that computer and type in "ifconfig" to find out the IP address. Note that it will be better and more stable connection-wise if both computers are connected to wired internet. Because wireless connections does not have static IP, and can cause floating IP problem which may cause us to lose connection midway through your control. Up to this point, we should have: IP for computer A and B (denoted as IP_A and IP_B later on in the instruction),as well as the hostname for computer A and B (denoted as hostname_A and hostname_B later on in the instruction).

@abstr_number . **Download AutoCircle_generater code** : On computer A, type in "git clone git://github.com/melodysu @abstr_number /AutoCircle_generater.git" to download this repository to the directory you desire. It should create a AutoCircle_generater folder under that directory. Note that this should be a directory under the your ROS workspace. Then go back to your ROS workspace directory, type in "catkin_make_isolated --pkg AutoCircle_generater", and this should build the software. Now this part of the software is done.

@abstr_number . **ssh** : On computer A, open up another terminal and type in "ssh -X hostname_A@IP_B", it should allow you to control computer B from this terminal. Assume you already have RAVEN running on this computer, type in "pwd", and then "roscd raven_ @abstr_number ". Note that this RAVEN code should be the RAVEN @abstr_number . @abstr_number release version in October @abstr_number , because there is a pedal down/pedal up switch where you can control by pressing 'd' and 'u' keys respectively. And this feature is required for the AutoCircle_generater to work. If you don't have the version yet, you can download it from @abstr_hyperlink , and use the indigo branch.

@abstr_number . **Up and running** : On computer A, open up another terminal and run "roscore". Use ths terminal is step @abstr_number , type in "sudo roslaunch raven_ @abstr_number raven_ @abstr_number .launch". Next, initialize RAVEN. After it is initialized, press 'd' and it holds the pedal down state for @abstr_number seconds. If no commend is sent within the time range, it will automatically switch back to pedal up state. If you are constantantly sending commends, then RAVEN will be in pedal down state all the time until you press 'u' manually. But you can always re-press 'd' again if you need to. Within the @abstr_number second, use the terminal in step @abstr_number , type in "rosrun AutoCircle_genetater talkerAutoCircle" under the main ROS workspace directory, and you sill need to press "Enter" to start. At this point, you should see RAVEN moving slowly in very small circles already if everything is good. 

## Trouble Shooting :

These are the problems that may occur to you. Basically if you are running AutoCircle_generater code, and still the pedal down state in RAVEN holds for @abstr_number seconds then jumps back to pedal up, that means there is something wrong with the connection. Try doing the following to identify the problem . If you cannot even run the RAVEN code from terminal in step @abstr_number , then it is not even sensing the "roscore" on computer A.

@abstr_number . **Internet Connection Issue** : (If you cannot run RAVEN code) On the terminal in step @abstr_number , where you ssh to computer B, type in "ping hostname_A", and make sure it works well. If not, try "ping IP_A". If hostname_A fails but IP_A works, that means computer B does not know the name of computer A. Do it by typing in "gedit /etc/hosts" and add in hostname_A IP_A to the list of hosts. If even "ping IP_A" does not work, then there is some internet issue, try checking your internet connection and double check the IP address. Do the same process for computer A on any other terminal, only to change by typing "ping hostname_B" and "ping IP_B". If both sides are working good, 

@abstr_number . **ROS_MASTER_URL** : Make sure you set the ROS_MASTER_URL correctly. It should be the following: On regular terminal on computer A, type in "gedit ~/.bashrc", then set ROS_MASTER_URL = host_A (or IP_A), ROS_IP = host_A (or IP_A). On the terminal you ssh to computer B, type in "gedit ~/.bashrc", then set ROS_MASTER_URL = host_A (or IP_A), ROS_IP = host_B (or IP_B). This can be a tricky part, so be sure to set it correctly. This should ensure the ROS topic publishing and subscribing to be bidirectional.

@abstr_number . **rostopic monitoring** : You can type in "rostoppic echo topicname -c" this on each side to monitor the publishing and subscribing condition and check if it's the problem of receiving ravenstate or sending raven_automove.

## Selection Menu :

User can choose the circle speed, radius, direction(clockwise or counter-clockwise), base plane(Y-Z plane, X-Z plane, X-Y plane), center of the circle, as well as whether or not to display motion status on console. Note that only the Y-Z base plane will generate horizontal circle motion, the other two are vertical. There are @abstr_number levels of speed and @abstr_number levels of radius. In horizontal circles (Y-Z base plane) under radius level @abstr_number and @abstr_number , we can only increase the speed up to level @abstr_number , while larger radius (level @abstr_number ~ @abstr_number ) allows max speed to be level @abstr_number . In vertical circles (Y-Z and X-Z base plane), it requires more torque so we set max speed to be level @abstr_number under all radius.

## Spec :

These are the constraints we set for our physical device - RAVEN surgical robot arm to function normally. These are mostly defined in @abstr_hyperlink file under /src folder. Be careful when tuning these values!

@abstr_number . **publish rate** : The raven_automove.msg is being sent at @abstr_number Hz.

@abstr_number . **feedback rate** : The raven_state.msg is being sent at @abstr_number Hz in listener.cpp. But in actual RAVEN software, raven_state.msg is updated at @abstr_number Hz.

@abstr_number . **DEL_POS_THRESHOLD** : This is the motion translation threshold for RAVEN to move. It is set as @abstr_number micro meter (= @abstr_number . @abstr_number mm = @abstr_number . @abstr_number cm). That being said, the maximum speed that RAVEN will be moving is @abstr_number Hz * @abstr_number . @abstr_number cm = @abstr_number (cm/sec).

@abstr_number . **DEL_ROT_THRESHOLD** : This is the motion rotation threshold for RAVEN to move. It is set to be @abstr_number . @abstr_number degrees. That being said, the maximum rotational speed for RAVEN will be is @abstr_number Hz * @abstr_number . @abstr_number degrees = @abstr_number (degrees/sec). This is currently unused because the circle trajectoy we have now does NOT include orientation motion.

@abstr_number . **RADIUS levels** : There are ten levels of RADIUS to choose from. Level @abstr_number ~ @abstr_number corresponds to @abstr_number micro meter (= @abstr_number mm = @abstr_number . @abstr_number cm) ~ @abstr_number micro meter (= @abstr_number mm = @abstr_number . @abstr_number cm). Yet that is the desired radius. From our experiments, the relation between desired radius and actual radius are listed as follows: actual radius = desired radius * @abstr_number / @abstr_number + @abstr_number . @abstr_number 

@abstr_number . **SPEED levels** : There are sixty levels of SPEED to choose from, with each level increasing @abstr_number . @abstr_number cm/sec from the previous level. So level @abstr_number ~ @abstr_number corresponds to moving @abstr_number . @abstr_number cm/sec (= @abstr_number mm/sec = @abstr_number . @abstr_number mm per command) all the way up to @abstr_number cm/sec (= @abstr_number mm/sec = @abstr_number . @abstr_number mm per command, which is exactly DEL_POS_THRESHOLD).

## Relative links:

@abstr_number . **uw-biorobotics/raven @abstr_number _* : This is the main RAVEN software that this AutoCircle generater software is going to connect to. And @abstr_hyperlink will replace the ROS node listenerAutoCircle that we temporarily have for now. @abstr_number . *_ raven_absolute_controller** : This is the extended work for RAVEN absolute position control done by Imperial College London. We were originally intended to implement the AutoCircle generater based on their work. But since we want it to be a ROS node instead of teleoperating and sending UDP packages to communicate, we eventually didn't apply @abstr_hyperlink . 

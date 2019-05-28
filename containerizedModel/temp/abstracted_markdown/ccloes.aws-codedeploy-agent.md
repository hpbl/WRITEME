# AWS CodeDeploy Agent

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Build Steps

@abstr_code_section 

## Integration Test

Please do the build steps mentioned above before running the integration test.

The integration test creates the following * An IAM role "codedeploy-agent-integ-test-deployment-role" if it doesn't exist * An IAM role "codedeploy-agent-integ-test-instance-role" if it doesn't exist * A CodeDeploy application * A CodeDeploy deployment group * An EC @abstr_number key pair "codedeploy-agent-integ-test-key" if it doesn't exist * An EC @abstr_number security group "codedeploy-agent-integ-test-sg" if it doesn't exist * An EC @abstr_number instance tagged with key "codedeploy-agent-integ-test-instance" * A CodeDeploy deployment on that ec @abstr_number instance.

It terminates the test ec @abstr_number instance and deletes the CodeDeploy application at the end of each test run. It also terminates any test ec @abstr_number instances before starting up the test.

Update the features/AwsCredentials.yml file with AWS access key and secret key. The access key should have permission to create the above mentioned resources. You can also change the default region and ami id if you want. To run the integration test execute

@abstr_code_section 

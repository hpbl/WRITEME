# ![AzureIcon] ![PowershellIcon] Microsoft Azure PowerShell

This repository contains PowerShell cmdlets for developers and administrators to develop, deploy, and manage Microsoft Azure applications.

Try it out in Azure Cloud Shell!

@abstr_hyperlink 

## Modules

Below is a table containing our Azure PowerShell rollup module.

Description | Module Name | PowerShell Gallery Link \----------------- | ------------ | ----------------------- Azure PowerShell | `Az` | @abstr_hyperlink 

For a full list of modules found in this repository, please see the Azure PowerShell Modules document.

## Installation

### PowerShell Gallery

Run the following command in an elevated PowerShell session to install the rollup module for Azure PowerShell cmdlets:

@abstr_code_section 

This module runs on Windows PowerShell with @abstr_hyperlink or greater, or @abstr_hyperlink . The `Az` module replaces `AzureRM`. You should not install `Az` side-by-side with `AzureRM`.

If you have an earlier version of the Azure PowerShell modules installed from the PowerShell Gallery and would like to update to the latest version, run the following commands in an elevated PowerShell session:

@abstr_code_section 

`Update-Module` installs the new version side-by-side with previous versions. It does not uninstall the previous versions.

For detailed instructions on installing Azure PowerShell, please refer to the @abstr_hyperlink .

## Usage

### Log into Azure

To connect to Azure, use the @abstr_hyperlink cmdlet:

@abstr_code_section 

To log into a specific cloud (_AzureChinaCloud_, _AzureCloud_, _AzureGermanCloud_, _AzureUSGovernment_), use the `-Environment` parameter:

@abstr_code_section 

### Getting and setting your Azure PowerShell session context

A session context persists login information across Azure PowerShell modules and PowerShell instances. To view the context you are using in the current session, which contains the subscription and tenant, use the @abstr_hyperlink cmdlet:

@abstr_code_section 

To get the subscriptions in a tenant, use the @abstr_hyperlink cmdlet:

@abstr_code_section 

To change the subscription that you are using for your current context, use the @abstr_hyperlink cmdlet:

@abstr_code_section 

For details on Azure PowerShell contexts, see our @abstr_hyperlink .

### Discovering cmdlets

Use the `Get-Command` cmdlet to discover cmdlets within a specific module, or cmdlets that follow a specific search pattern:

@abstr_code_section 

### Cmdlet help and examples

To view the help content for a cmdlet, use the `Get-Help` cmdlet:

@abstr_code_section 

For detailed instructions on using Azure PowerShell, please refer to the @abstr_hyperlink .

## Reporting Issues and Feedback

### Issues

If you find any bugs when using the Azure PowerShell modules, please file an issue in our @abstr_hyperlink page. Please fill out the provided template with the appropriate information.

Alternatively, be sure to check out the @abstr_hyperlink if you have issues with the cmdlets or Azure services.

### Feedback

If there is a feature you would like to see in Azure PowerShell, please use the @abstr_hyperlink cmdlet, or file an issue in our @abstr_hyperlink page to provide the Azure PowerShell team direct feedback.

## Contribute Code

If you would like to become an active contributor to this project, please follow the instructions provided in @abstr_hyperlink .

Additional information about contributing to this repository can be found in the CONTRIBUTING.md document and the _Azure PowerShell Developer Guide_ document.

## Learn More

  * @abstr_hyperlink 
  * @abstr_hyperlink 



* * *

_This project has adopted the @abstr_hyperlink . For more information see the @abstr_hyperlink or contact @abstr_hyperlink with any additional questions or comments._

![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")
# Sitecore Hackathon 2024

- MUST READ: **[Submission requirements](SUBMISSION_REQUIREMENTS.md)**
- [Entry form template](ENTRYFORM.md)
  
### ⟹ [Insert your documentation here](ENTRYFORM.md) <<
# Hackathon Submission Entry form

You can find a very good reference to Github flavoured markdown reference in [this cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). If you want something a bit more WYSIWYG for editing then could use [StackEdit](https://stackedit.io/app) which provides a more user friendly interface for generating the Markdown code. Those of you who are [VS Code fans](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) can edit/preview directly in that interface too.

## Team name
Gravity 137

## Category
⟹ Write the name of the selected category
Module added for XM Cloud

## Description
⟹ Write a clear description of your hackathon entry.  

  - Module Purpose - OOTB sitecore XM CLOUD does not support the Geolocation feature; therefore, the visitor’s region will be identified using Vercel’s geo IP feature as part of the HTTP request header, and the country identified from the header information in the incoming request over vercel.
  - What problem was solved (if any) - Solving the geolocation feature in XM cloud which is available OOTB
    - How does this module solve it - Using vercels geolocation API

_You can alternately paste a [link here](#docs) to a document within this repo containing the description._

## Video link
⟹ Provide a video highlighing your Hackathon module submission and provide a link to the video. You can use any video hosting, file share or even upload the video to this repository. _Just remember to update the link below_

⟹ https://youtu.be/xsy1eSF0FB8(#video-link)

## Pre-requisites and Dependencies

⟹ Does your module rely on other Sitecore modules or frameworks?

- List any dependencies - XMCloud vanilla Instance
- Or other modules that must be installed - No
- Or services that must be enabled/configured - No

## Installation instructions
⟹ Write a short clear step-wise instruction on how to install your module.  

_# XM Cloud Starter Kit (Next JS)

## QUICK START

1. In an ADMIN terminal:

    ```ps1
    .\init.ps1 -InitEnv -LicenseXmlPath "C:\path\to\license.xml" -AdminPassword "DesiredAdminPassword"
    ```

2. Restart your terminal and run:

    ```ps1
    .\up.ps1
    ```

3. Follow the instructions to [deploy to XM Cloud](#deploy-to-xmcloud)

4. We have added this feature on not founda page

*** 

## About this Solution
This solution is designed to help developers learn and get started quickly
with XMCLoud + SXA.

### Configuration
⟹ If there are any custom configuration that has to be set manually then remember to add all details here.

_Remove this subsection if your entry does not require any configuration that is not fully covered in the installation instructions already_

## Usage instructions
⟹ Provide documentation about your module, how do the users use your module, where are things located, what do the icons mean, are there any secret shortcuts etc.

Include screenshots where necessary. You can add images to the `./images` folder and then link to them from your documentation:

![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")

You can embed images of different formats too:

![Deal With It](docs/images/deal-with-it.gif?raw=true "Deal With It")

And you can embed external images too:

![Random](https://thiscatdoesnotexist.com/)

## Comments
If you'd like to make additional comments that is important for your module entry.

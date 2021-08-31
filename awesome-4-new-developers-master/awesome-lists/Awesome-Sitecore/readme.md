# Awesome Sitecore [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="sitecore-logo.png" align="right" width="80">](https://sitecore.com)

> A curated list of Sitecore-related projects on GitHub. Please contribute!

Sitecore is a digital platform that helps managing multiple websites from one place. It provides marketing tools that deliver information about customers from different devices (CRMs, tracking, POS, etc.). Sitecore allows creating content to be accessed via different channels (desktops, mobiles, APIs, social media, etc.). The platform is flexible by design, with numerous points of extensions, it can be deployed both on-premise and cloud. This below list classifies extensibility and deployment options for Sitecore developers they can benefit from.

Contributions welcome. Add links through pull requests or create an issue to start a discussion.

## Contents

- [Analytics](#analytics)
- [Audit and performance](#audit-and-performance)
- [Azure](#azure)
- [Cache](#cache)
- [Commerce](#commerce)
- [Configuration](#configuration)
- [Containers](#containers)
- [Content Hub](#content-hub)
- [Content Search](#content-search)
- [Data](#data)
- [Data Exchange Framework](#data-exchange-framework)
- [Demo](#demo)
- [Deployment](#deployment)
- [Extending Content Editor](#extending-content-editor)
- [Fields](#fields)
- [Forms](#forms)
- [JSS](#jss)
- [JAMstack](#jamstack)
- [Helix](#helix)
- [Icons](#icons)
- [Languages](#languages)
- [Logging](#logging)
- [Maintenance](#maintenance)
- [Media](#media)
- [ORM](#orm)
- [Other](#other)
- [Packaging](#packaging)
- [Pipelines](#pipelines)
- [Publishing](#publishing)
- [Rules](#rules)
- [Security](#security)
- [SEO](#seo)
- [Serialization](#serialization)
- [Sitecore Host](#sitecore-host)
- [SPE (Sitecore PowerShell Extension)](#spe-sitecore-powershell-extension)
- [SPEAK](#speak)
- [SXA (Sitecore Experience Accelerator)](#sxa-sitecore-experience-accelerator)
- [Testing](#testing)
- [Templates](#templates)
- [Universal Tracker](#universal-tracker)
- [WebApi](#webapi)
- [Workflows](#workflows)
- [xConnect and xDB](#xconnect-and-xdb)

> Please note, **Awesome Sitecore** list only classifies and reviews useful GitHub repositories you may benefir from.
>
> If you're looking for a more comprehensive list of arcticles, blog posts, videos and Q'n'A please refer to the [Sitecore Link](https://Sitecore.Link) knowledge base.

## Analytics

- [Sitecore Goal Description](https://github.com/islaytitans/SitecoreGoalDescription) - Display the Goal Description in the Experience Profile.
- [Sitecore Goal Conversion Demo](https://github.com/martinrayenglish/GoalConversions.Demo) - Demonstrate how to obtain goals that were triggered during a visitor's interaction, after their session has ended, this data can be sent to an external system to be used helping marketers by informing them of what customer's and leads are doing on their website.
- [Custom Timeline Eras](https://github.com/coreyasmith/sitecore-custom-timeline-eras) - Demonstrates how to trigger outcomes and display custom outcomes as eras on the Experience Profile timeline in Sitecore.

## Audit and performance

- [Skillcore.Stats](https://github.com/marek-musielak/Skillcore.Stats) - Collect detailed timing information for all your Sitecore MVC renderings and API calls.
- [Sitecore.Boost](https://github.com/cardinal252/Sitecore.Boost) - This repository contains a whole wealth of potential patches for the performance Improvements for the Sitecore platform to improve, most of which are running in production instances of Sitecore.
- [Sitecore.Cleanup](https://github.com/martinrayenglish/Sitecore.Cleanup) - The module consists of 3 agents that will monitor each the Event Queue, Publish Queue and History tables to ensure that they don't exceed a set threshold.
- [SitecoreDXG: The Documentation Experience Generator](https://github.com/zkniebel/SitecoreDXG) - Sitecore template architecture visualization and documentation tool from the SitecoreUML family. Leveraging the open-source APIs associated with StarUML (on which SitecoreUML is also based), SitecoreDXG provides support for generating template data model architecture diagrams and HTML documentation from any existing Sitecore instance (PaaS and non-PaaS are both supported) that has the SitecoreUML Service for Sitecore.
- [sitecore-assembly-lists](https://github.com/richardszalay/sitecore-assembly-lists) - Sitecore started providing assembly list information for Sitecore releases starting at 8.2 Update 5. This project provides tools for validating Sitecore assembly lists, both against an installation and during the development process.

## Azure

- [ARM templates for Sitecore](https://github.com/Sitecore/Sitecore-Azure-Quickstart-Templates) - All currently available Azure Resource Manager templates for Sitecore.
- [Sitecore Azure Content](https://github.com/olegburov/Sitecore-Azure-Content) - Articles on how to automate a deployment of Sitecore solution to the Microsoft Azure Cloud Platform utilizing Azure services.
- [Sitecore Advanced Azure Devops](https://github.com/JeffDarchuk/AdvancedSitecoreAzureDevops) - Expanding Sitecore on azure with flexible and generic scripts (requires a valid powershell Azure session to be connected and available).
- [Language Understanding (LUIS) Samples](https://github.com/Azure-Samples/cognitive-services-language-understanding) - Samples for the Language Understanding Intelligent Service (LUIS).
- [Sitecore Media Azure Blob Storage provider](https://github.com/ivansharamok/Sitecore.Media.AzureBlobStorage) - Allows to store Sitecore media library assets in the Azure Blob Storage account.
- [CloudMediaLibrary](https://github.com/jammykam/Sitecore-CloudMediaLibrary) - Allow Sitecore Media Library to store and serve from Cloud Storage.
- [SitecoreCognitiveServices](https://github.com/smithc/SitecoreCognitiveServices) - SDK integrating Microsoft's Cognitive Services into Sitecore.
- [Sitecore Publishing Service Azure Templates](https://github.com/coreyasmith/sitecore-publishing-service-azure-templates) - Azure Resource Manager (ARM) templates to install the Sitecore Publishing Service in a Sitecore Azure PaaS environment.
- [SitecoreDiagnostics](https://github.com/BasLijten/SitecoreDiagnostics) - Sitecore Diagnostics using Application Insights.
- [sitecore-application-insights-annotations](https://github.com/BasLijten/sitecore-application-insights-annotations) - Creates App Insinghts annotations.

## Cache

- [CacheTuner](https://github.com/KayeeNL/CacheTuner) - The module is an implementation of the rules given in Sitecore Caching guide.
- [Cache-Processing-Instance](https://github.com/ParTech/Cache-Processing-Instance) - A proof-of-concept for a dedicated HTML cache processing instance.
- [ExperienceEditorCache](https://github.com/marek-musielak/Skillcore.ExperienceEditorCache) - A caching module which makes working with Sitecore Experience Editor more pleasant.
- [ManualHtmlCacheClearer](https://github.com/TwentyGotoTen/ManualHtmlCacheClearer) - Clear specific HTML Caches on local and remote instances from the Sitecore client.
- [CacheCounters](https://github.com/matthewkenny/CacheCounters) - Report Sitecore cache size information into Windows performance counters.
- [Sitecore Rules-Based Output Caching](https://github.com/zkniebel/Sitecore-Advanced-Output-Caching) - Provides rules-based Sitecore output caching variance support, enabling the caching of personalized components and other components that require more complex cache variance logic.

## Commerce

- [Reference Storefront](https://github.com/Sitecore/Reference-Storefront) - Sitecore Reference Storefront.
- [Commerce Sample Plugins](https://github.com/Sitecore/SitecoreCommerce) - A sample code for Sitecore Commerce Plugins (targeted toward XC 9.0.3 and 9.1).
- [HabitatHome Commerce](https://github.com/Sitecore/Sitecore.HabitatHome.Commerce) - An example built using SXA on XP and XC following the Helix architecture principles.
- [sitecore-commerce-configuration](https://github.com/richardszalay/sitecore-commerce-configuration) - Tools for configuring and boostrapping Sitecore Commerce Engine configuration.
- [Plumber for Sitecore Commerce](https://github.com/richardszalay/plumber-sc) - Tool to view Sitecore Commerce Engine Configuration.
- [Short Confirmation Codes](https://github.com/dsolovay/ShortConfirmationCodes) - Provides six character confirmation codes (configurable), randomly generated, and tracked in the commerce database to avoid conflicts, as shorter codes are easier to communicate over support calls and for some clients may be more convenient than the 25 character confirmations that are provided out of the box.

## Configuration

- [Sitecore configuration consolidator (offline ShowConfig)](https://github.com/ParTech/ScShowConfig) - Simple console app that consolidates Sitecore configuration include files.

## Containers

- [Sitecore Docker Examples](https://github.com/Sitecore/docker-examples) - An official Docker Examples images for the most recent versions of Sitecore 10.\*, including 'getting-started' XP0 container environment.
- [Lighthouse Demo](https://github.com/Sitecore/Sitecore.Demo.Platform) - The latest XP 10.0 demo using SXA 10.0. It can be only deployed inside Docker containers.
- [Sitecore MVP](https://github.com/Sitecore/MVP-Site) - The source code of real Sitecore MVP website built with Sitecore 10 and SXAworking in containers.
- [Repository of Sitecore Docker images](https://github.com/Sitecore/docker-images) - Build your own Docker images for the most recent versions of Sitecore.
- [Packer for Sitecore](https://github.com/asmagin/sitecore-packer) - Repository contains Packer templates for a local Sitecore hosting environment with IIS and and SQL Server on Windows, SOLR and Sitecore 9.0 building virtual machine images and Vagrant boxes for VirtualBox, provisioned with Chef.
- [Docker SOLR with SSL](https://github.com/LaubPlusCo/docker-solr-ssl) - A simple setup that set up a Linux container on a host running solr with SSL using a generated certificate.
- [Sitecore Docker Tools](https://github.com/sitecore/docker-tools) - Set of utilities to improve developer experience when running Sitecore in a Docker environment. This an image with development scripts and entrypoints which can be used during Sitecore container builds and a PowerShell module with functions used on the Sitecore container host to initialize the Sitecore Docker environment.
- [Konabos Docker Examples](https://github.com/konabos/konabos-docker-examples) - Sample compose files and associated configuration beyond those officially provided by Sitecore.

## Content Hub

- [Sitecore Content Hub Importer](https://github.com/vasiliyfomichev/content-hub-importer) - Sitecore Content Hub Asset Importer; allows importing image assets from various data sources into Sitecore Content Hub.
- [schguild](https://github.com/sitecoreguild/schguild) - Provides tools and sample code to help you in learning and working with Sitecore Content Hub.
- [Sitecore.ContentHub.Twitter](https://github.com/josedbaez/Sitecore.ContentHub.Twitter) - Demonstrates how to tweet from Sitecore Content Hub CMP.
- [Sitecore.SharedSource.CMP.Connector.Extensions](https://github.com/josedbaez/Sitecore.SharedSource.CMP.Connector.Extensions) - Extends Sitecore Connect for Sitecore CMP 2.0.0 so images set on CMP entities can be synchronised using the xml format used by Sitecore Connect™ for Sitecore DAM 2.0.0, so this module is required.

## Content Search

- [Sitecore spatial geojson polygons](https://github.com/josedbaez/sitecore-spatial-geojson-polygons) - Implementation of a Linq extension to be able to query on points that intercept GeoJson polygons in solr indexes. The demo provides a template with the spatial field, couple of sample items with polygons from openstreetmap that cover some cities; and a controller rendering that reads lat and lng from the querystring and returns the polygon of the item found (e.g. Big Ben's coordinates return London).
- [Search Index Builder](https://github.com/jermdavis/SearchIndexBuilder) - A tool for rebuilding search indexes from outside the Sitecore web app especially good for very long-running builds.
- [SolrCloud Install Scripts](https://github.com/jermdavis/SolrCloud-Helpers) - PowerShell scripting library to help with installing SolrCloud clusters on Windows.
- [Common Sitecore ContentSearch extensions](https://github.com/LaubPlusCo/LaubPlusCo.Common.ContentSearch) - Common extensions to Sitecore contentSearch; hereunder PopulateSolrSchema pipeline processors to ensure that all installed languages in Sitecore are added to the solr managed schema.
- [Sitecore Computed Search](https://github.com/martinrayenglish/Sitecore-Computed-Search) - An index search development accelerator that allows developers to declare computed search fields on an index that can capture and store targeted field values of items within a scope as well as the field values of items based on specific templates that are part of its presentation. In addition, specific weights can by applied to these computed fields using search boosting so that content matching search terms can be promoted in search results.
- [sitecore-azure-search-compat](https://github.com/richardszalay/sitecore-azure-search-compat) - Compatibility patch for Sitecore + Azure Search.

## Data

- [SitecoreDataImporter](https://github.com/markstiles/SitecoreDataImporter) - Used to import Database data and Sitecore content into Sitecore.
- [SitecoreEzImporter](https://github.com/dresser/SitecoreEzImporter) - Data Import tool for Sitecore CMS using SPEAK UI.

## Data Exchange Framework

- [Gutters for Sitecore Data Exchange Framework](https://github.com/KayeeNL/Sitecore.DataExchange.Gutters) - Collection of 3 gutters for DEF to provide a quick solution for context item of an item within the tree: `ItemDisabled`, `PipelineBatch` and `PipelineStep`.

## Demo

- [Sitecore Habitat](https://github.com/Sitecore/Habitat) - Habitat is an example Sitecore solution built on the Helix architecture principles. No longer being updated or maintained, and is being replaced with Sitecore Helix Examples.
- [Sitecore Helix Examples](https://github.com/Sitecore/Helix.Examples) - Demonstrations of Sitecore Helix practices across various tooling and business scenarios; intended to demonstrate a wider variety of implementation types / requirements than existing examples.
- [Lighthouse Demo](https://github.com/Sitecore/Sitecore.Demo.Platform) - The latest XP 10.0 demo using SXA 10.0. It can be only deployed inside Docker containers.
- [Sitecore MVP](https://github.com/Sitecore/MVP-Site) - The source code of real Sitecore MVP website built with Sitecore 10 and SXAworking in containers.
- [Sitecore.HabitatHome.Utilities](https://github.com/Sitecore/Sitecore.HabitatHome.Utilities) - A collection of utilities and script examples to help with installing Sitecore Experience Platform, installing Sitecore Experience Commerce, installing Sitecore Modules, warming up a Sitecore Instance, security Hardening a Sitecore Instance etc.
- [Sitecore.HabitatHome.Commerce](https://github.com/Sitecore/Sitecore.HabitatHome.Commerce) - Demo assets with external contributors and partners.
- [Sitecore.HabitatHome.Omni](https://github.com/Sitecore/Sitecore.HabitatHome.Omni) - Shares Sitecore JSS PWA demo assets and future "Sitecore Omni" related demo assets.
- [Sitecore.Demo.Group](https://github.com/Sitecore/Sitecore.Demo.Group) - Habitat Group Demo site - a developer example of a Habitat Based Demo.
- [Sitecore User Group UK](https://github.com/steviemcg/scuguk) - A demo of JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution, built with Gatsby v2.

## Deployment

- [PostDeploySteps](https://github.com/jst-cyr/NonlinearPostDeploySteps) - Post deploy steps for use with TDS. 1) TDS Example project that triggers the post deploy step; 2) Sample web project to show pulling in the deploy step; 3) DeployStep class library that you can add to your solution.
- [Sitecore Devops with AppVeyor](https://github.com/steviemcg/Sitecore.Devops.AppVeyor) - Sample solution which shows how to develop an open-source Sitecore module and hook it up with AppVeyor, a Continuous Delivery solution hosted in the cloud.

## Extending Content Editor

- [Copy Version module](https://github.com/ParTech/Copy-Version) - Adds commands to the Content Editor that allow users to copy and paste the latest version of an item instead of the entire item. After installation, the "Copy version" and "Paste version" commands are accessible from the context menu in the content tree.
- [Browse Command](https://github.com/ParTech/Browse-Command) - Adds a command that allows the user to open an item from the Sitecore content tree in a new browser window. Sitecore does not offer this out-of-the-box, except for the Preview command which has the effect of entering preview mode, so given module will do exactly the same but without entering Preview mode.
- [Expand Descendants Command](https://github.com/ParTech/Expand-Descendants-Command#expand-descendants-command) - The module adds a command that allows the user to expand all descendants of an item from the Sitecore content tree.
- [Environment Styler for Sitecore](https://github.com/jammykam/Environment-Styler-for-Sitecore) - An environment specific styling (and text) on login screen and header ribbon for Sitecore.
- [InsertOptionsLoophole](https://github.com/TwentyGotoTen/InsertOptionsLoophole) - Prevents Sitecore users from bypassing insert options.
- [ScopeToThis](https://github.com/ianjohngraham/Coreblimey.ScopeToThis) - Allows "scope to this" functionality a la Visual Studio on the Sitecore Content Editor tree.
- [DeviceEditorShortcuts](https://github.com/MartinMiles/DeviceEditorShortcuts) - A productivity improvement for Device Editor, showing datasource if set to that particular component and previewing that right from a pop-up click.
- [DmsGutters](https://github.com/markvanaalst/Sitecore.SharedSource.DmsGutters) - Content Editor gutters to indicate tested and personalized items.
- [Move Validator](https://github.com/Velir/Sitecore-MoveValidator) - Validate if an item can be moved to a new location based on insert options.
- [SitecoreFieldSuite](https://github.com/Velir/SitecoreFieldSuite) - Provides Sitecore users a more streamlined and informational approach to content authoring. This is achieved by revamping 5 field types, introducing an Images field, enabling automatic publishing of referenced items and adding new functionality such as the Edit Form, Go to Item button and the Field Gutter.

## Fields

- [Sitecore.Foundation.Fields](https://github.com/MartinMiles/Sitecore.Foundation.Fields) - A collection of custom fields ready-to-use with your Sitecore solution.
- [LinkList](https://github.com/josedbaez/Monoco.CMS.FieldTypes) - Sitecore LinkList Field Type.
- [CrossDatabaseTreeListField](https://github.com/ivansharamok/CrossDatabaseTreeListField) - An extended Treelist field to support cross database references.
- [LimitedText Field](https://github.com/ParTech/LimitedText-Field-Controls) - Adds two new field types to the Sitecore Content Editor, Single-Line Text Limited and Multi-Line Text Limited. Both inherit all functionality from the existing text field controls and add the posibility to configure a maximum allowed value for the field, also inform the user of the number of remaining characters while they are editing.
- [CustomFields](https://github.com/AlexanderDavyduk/CustomFields) - A selection of NameValueDropLists, NameValueDropListsField, NameValueDroplist, NameValueDroplistField, SortableMultilist, SortableMultilistField, TimeZonesDropList fields.
- [YouTube Video Picker Field](https://github.com/pveller/BrainJocks.YouTubeVideoField) - Fully workable solution for YouTube video picker field for Sitecore.
- [Hide Dependent Fields Controls](https://github.com/jammykam/Hide-Dependent-Fields) - Adds new Checkbox, Droplist and Droplink field type to the Sitecore Content Editor which depending on the selected value will hide the proceeding sibling fields. All controls inherit from their equivalent Sitecore counterpart and add the required UI enhancements.
- [icon-selector-field](https://github.com/Wesley-Lomax/icon-selector-field) - Custom Icon selector field for Sitecore.
- [ImageSelector](https://github.com/markvanaalst/Sitecore.SharedSource.ImageSelector) - An image Selector field for Sitecore to allow selecting and previewing multiple images based on TreeListEx field.

## Forms

- [Sitecore-Forms-Extensions](https://github.com/bartverdonck/Sitecore-Forms-Extensions) - Adds some functionality to the forms creator, such as sending mails, timespan validation, subscribing a list, conditions, Azure Blob storage provider and many more.
- [WFFM Conversion Tool](https://github.com/afaniuolo/WFFM-Conversion-Tool) - A console application that provides an automated solution to convert and migrate Web Forms For Marketers (WFFM) items and their data to Sitecore Forms.

## JSS

- [JSS](https://github.com/Sitecore/jss) - An official repo of Sitecore JavaScript Services.
- [sugcon-2019-jss-examples](https://github.com/chaturangar/sugcon-2019-jss-examples) - SugCon 2019 jss examples.
- [SitecoreQL](https://github.com/kmazzoni/SitecoreQL) - A GraphQL implementation for Sitecore, for example you can query against Sitecore's Content Search API.
- [JSS React Starter Application](https://github.com/altola/sitecore-jss-react-basic) - Please follow the primary JSS documentation at https://jss.sitecore.net for the latest documentation on JSS.
- ['Hello World' Starter for Sitecore JSS Tech Preview 4](https://github.com/altola/sitecore-jss-react-starter) - A hello world starter for Sitecore JSS without GraphQL bits.
- [Extensible JSON Renderings](https://github.com/coreyasmith/jss-extensible-json-renderings) - Extending JSON renderings in Sitecore JavaScript Services.
- [JavaScript Services Anti-Forgery Tokens](https://github.com/coreyasmith/jss-anti-forgery-tokens) - A sample repository to demonstrate how to use .NET anti-forgery tokens in Sitecore JavaScript Services with both MVC and Web API controllers using out-of-the-box anti-forgery token validators. The demo API is also completely mocked in disconnected mode to show how this functionality can work in both disconnected and connected modes.
- [How to GraphQL](https://github.com/kamsar/howtographql) - A fullstack tutorial website to learn all about GraphQL.

## JAMstack

- [Next.js Starter kit using GraphQL and Sitecore Experience Edge for Content Hub](https://github.com/konabos/Next.js-Starter-kit-using-GraphQL-and-Sitecore-Content-Hub-Content-as-a-Service) - This is a great example of Sitecore Experience Edge Content as-a-Service approach using NextJS upon React, using a demo instance of the latest Content Hub.

## Helix

- [Sitecore Helix Documentation](https://github.com/Sitecore/Helix.Docs) - The official guidelines and recommended practises for developing in Sitecore for Sitecore Helix.
- [Sitecore Helix Examples](https://github.com/Sitecore/Helix.Examples) - Demonstrations of Sitecore Helix practices across various tooling and business scenarios; intended to demonstrate a wider variety of implementation types / requirements than existing examples.
- [Helixbase](https://github.com/muso31/Helixbase) - Sitecore Helix based solution for Greenfield projects.
- [Sitecore Foundation](https://github.com/Avanade/SitecoreFoundation) - Sitecore Framework that follows the Helix modular architecture design principles.Includes plenty of Feature and Foundation layer modules, as well as reusable Common from Project layer.
- [Helix example Module & Solution templates](https://github.com/LaubPlusCo/Helix-Templates) - Templates for the Sitecore Helix Visual Studio templates extension.
- [Helix frontend development example](https://github.com/LaubPlusCo/helix-frontend-example) - A simple frontend development setup for a Sitecore Helix solution.
- [Helix Publishing Pipeline](https://github.com/richardszalay/helix-publishing-pipeline) - Allows Helix solutions to be published as a single unit, with content from modules (like views and config patches) being automatically included. It also contains optimisations and guidance around local development deployments. Since it extends the standard Web Publishing Pipeline it should work with any supported target (package, file system, Azure, Docker) via either Visual Studio or the command line.
- [CustomLinkProvider](https://github.com/TwentyGotoTen/CustomLinkProvider) - A demonstration of Converting a custom Sitecore link provider from non-Helix to Helix.
- [Elision](https://github.com/sitecore-elision) - An open source Sitecore accelerator implementing Helix principles.
- [Helixify](https://github.com/konabos/Konabos.Helixify) - The module designed to add instant Helix compatilbility to any Sitecore project.
- [Sitecore Foundation](https://github.com/Avanade/SitecoreFoundation) - Sitecore Framework from Avanade that follows the Helix modular architecture design principles.

## Icons

- [Extra People Icons](https://github.com/jermdavis/ExtraPeopleIcons) - Some extra "people" icons for your Sitecore instances.
- [sitecore-icon-build](https://github.com/richardszalay/sitecore-icon-build) - MSBuild extensions for building Sitecore icon zip archives and including them in the published website.

## Languages

- [Sitecore Item Translator](https://github.com/adoprog/Sitecore-Item-Translator) - An item Translator module integrates Google translate seamlessly so that with a click of a button you are able to translate your text to any language that Google translate supports.
- [Sitecore Item Versioner](https://github.com/aquasonic/SitecoreItemVersioner) - This module adds a new ribbon into the versions chunk of the Content Editor.With the new ribbon it is possible to initially create an item version in all configured languages.

## Logging

- [SitecoreRollingLogFileAppender](https://github.com/ivansharamok/SitecoreRollingLogFileAppender) - Log4net RollingLogFileAppender for Sitecore that allows to cap log files size.
- [RabbitMQ.GEFL.Appender for Sitecore](https://github.com/asmagin/Sitecore.Logger.RabbitMQ.GelfAppender) - Implementation of RabbitMQ logger adapter for Sitecore.Logger.
- [Logging To Logentries](https://github.com/jammykam/Sitecore.Logentries) - Configures your application to log intto Logentries (supports NLog, Log4net, Serilog, others).

## Maintenance

- [Sitecore Instance Manager](https://github.com/Sitecore/Sitecore-Instance-Manager) - The legendary Sitecore Instanmce Manager, now with veriosn 9.x support.
- [Sifon](https://github.com/MartinMiles/Sifon) - Backup-restore tool supporting XC and remote machine operation with an excellent pluggable interface. Sifon also has very powerful extension system with plugins covering many aspects of day-to-day activities.

## Media

- [Autocropper](https://github.com/zkniebel/Autocropper) - Automatically generates cropped versions of an image, based on pre-defined dimensions and a specified origin, for use on responsive sites.
- [Media-Framework-Brightcove-Edition](https://github.com/Sitecore/Media-Framework-Brightcove-Edition) - Brightcove connector for Sitecore Media Framework.
- [YouTube Integration module](https://github.com/ivansharamok/YouTube-Integration) - An easy way to show the videos from a channel at YouTube on your site, the YouTube integration module might be what you are looking for. In the media library you have a YouTube folder and by typing the name of the channel, all the videos in that channel are now represented by an item and when you create a new video on your channel it automatically updates the channel in the media library.
- [Shrink](https://github.com/robhabraken/shrink) - Gives an insight in the usage of your media librarysimilar to a disk usage statistics viewer for your hard drives, also shows you which items are actually being used and published, so you can easily find media items that unnecessarily take up space in your database and offers you multiple ways of cleaning up your media library!
- [Dianoga](https://github.com/kamsar/Dianoga) - An automatic image optimizer for the Sitecore media library, reduced the size of your images served from Sitecore by 8-70%, completely automatically. When media images are requested, Dianoga automatically runs mozjpeg, PNGOptimizer, SVGO or WebP on the image data immediately after it is placed in the Sitecore media cache.

## ORM

- [Glass.Mapper](https://github.com/mikeedwards83/Glass.Mapper) - Glass.Mapper has been the redevelopment of the very popular Glass.Sitecore.Mapper project. This project aims to create a more robust and more flexible solution that not only works with many different CMS's.
- [TemplateModelHelper](https://github.com/lowedown/TemplateModelHelper) - Helper methods for working with generated Sitecore Template Models (Mapped through Glass.Mapper or other framework) wit a main goal is to make it easy for developers to query the Sitecore database using generated Template models.
- [TDS-T4-Model-Generation](https://github.com/Sitecore/TDS-T4-Model-Generation) - T4 model generation for TDS.
- [Sitecore.CodeGenerator](https://github.com/ParTech/sitecore.codegenerator) - Generates Glass Mapper interfaces using T4 templates without TDS.
- [Synthesis](https://github.com/blipson89/Synthesis) - An object mapping framework for Sitecore that enables developing more reliable and maintainable sites in less time than traditional Sitecore development. It is a strongly typed template object generator that is easily understandable for developers with either a Sitecore or traditional .NET background. It neatly integrates with Sitecore MVC (via the Synthesis.Mvc package) as a View rendering model provider and IoC dependency for controller renderings.

## Other

- [License Expiration Module 2.0](https://github.com/KayeeNL/Sitecore.License.Expiration.Module) - Checks the expiration date of the Sitecore license, shows a Content Editor Warning message or/and sends an email to notify when the Sitecore license is about to expire.
- [Sitecore.SharedSource.JohnWest](https://github.com/jammykam/Sitecore.SharedSource.JohnWest) - A collection of code samples of Sitecore protoypes from John West blog posts.
- [BLAZOR + SITECORE](https://github.com/GoranHalvarsson/SitecoreBlazor) - Allows you to run Sitecore app's client-side, also following the HELIX concept, the clean way.
- [Sitecore.SampleMvc](https://github.com/coreyasmith/Sitecore.SampleMvc) - MVC versions of the code for the out-of-the-box Sitecore sample site (by default Sitecore comes with a sample site that is built on web forms and XSLT).
- [Sitecore TokenManager](https://github.com/JeffDarchuk/SCTokenManager) - A framework designed to allow any type of content to be dynamically injected into a RTE field.
- [sxp-notifications](https://github.com/michaellwest/westco-sxp-notifications) - Sends browser notifications to users in Sitecore.

## Packaging

- [Package Autoloader](https://github.com/JeffDarchuk/PackageAutoloader) - A tool to automatically apply a Sitecore package to hydrate some content as part of a deployment.
- [Sitecore.Ship](https://github.com/kevinobee/Sitecore.Ship) - A lightweight means to install Sitecore Update packages via HTTP requests.
- [UpdatePackageInstaller](https://github.com/ianjohngraham/UpdatePackageInstaller) - Installs update packages in Sitecore from the command line.

## Pipelines

- [Pipeline Performance Monitor](https://github.com/ParTech/Pipeline-Performance-Monitor) - Simple solution for measuring the duration of Sitecore pipeline execution.
- [Sitecore Processor Dependency Injection](https://github.com/coreyasmith/Sitecore.ProcessorDi) - Simple project to demonstrate dependency injection in Sitecore pipeline processors.

## Publishing

- [AdvancedPublishDialog](https://github.com/Sitecore/AdvancedPublishDialog) - An enhanced standard publish dialog.
- [Publishing Service Azure Templates](https://github.com/coreyasmith/sitecore-publishing-service-azure-templates) - ARM templates to install the Sitecore Publishing Service in your Sitecore Azure PaaS environment and scripts to create the necessary Web Deployment Packages.
- [Publish Viewer](https://github.com/mikeedwards83/Glass.PublishViewer) - Allows you to monitor the publishing queue on the Sitecore Publishing CM Server, see their current status and cancel publishing jobs if required (ie. time queued, time publish job started, duration in the queue, number of items published, average time to publish an item, all messages from the publish job).
- [Sitecore Power Publish](https://github.com/robhabraken/sitecore-power-publish) - Publish button that forces the item being published, regardless the state of the Publishable option on the Item tab in the Publish restriction. 1) This function will not publish linked pages in your site that are not published, but only resources like media library items and data sources used in item fields, as those are needed to display the item you want to publish correctly. This method even publishes the templates and layouts used by the current item, if that's not done yet. 2) Unpublish button enables you to unpublish an item with a single click. It will change the Publish Restrictions as it unchecks the Publishable option on the Item tab and publishes the item after that, using a full Republish without Subitems. 3) Publishing State button shows the publishing state for all publishing targets. If a publishing target is up-to-date, a green dot is shown. If the item is published to a publishing target, but the item has changed afterwards, an orange dot is shown (so it's published, but not up-to-date). If the current item is not present in a publishing target at all, a red dot is shown. This function enables the content editor to check into detail if the content is published or not, for every publishing target.

## Rules

- [Page Rules](https://github.com/marek-musielak/Marek.Musielak.PageRules) - Create any custom Sitecore rules for every page your visitors browse. User hasn't read T&C page and wants to see a contest page? Page should be accessible only after a certain date? You want to use GEO IP data to change the language of your home page automatically? You don't have translation ready for your page? With Sitecore rules engine only sky is the limit!
- [ItemNamingRules](https://github.com/seankearney/Sitecore-ItemNamingRules) - Provides conditions and actions for the Rules Engine to automate item name conventions. You can use the ItemNamingRules project to apply different item naming rules in different branches of the content tree.
- [MenuItemRules](https://github.com/jammykam/Konabos.SharedSource.MenuItemRules) - Rules-based context item menu visibility.
- [Sitecore adaptive rules](https://github.com/boro2g/sitecore-adaptive-rules) - Adds support for adaptive rules for the Sitecore Rules Engine: they are useful when properties on conditions and actions have dependencies on one another.
- [Organize Insert Options Rules](https://github.com/coreyasmith/OrganizeInsertOptionsRules) - A pipeline processor for the uiGetMasters pipeline that allows you to organize your Insert Options Rules however you like in the content tree.

## Security

- [Securty Headers](https://github.com/GuitarRich/SXA.SecurityHeaders) - Shows how to implemenmt response security headers on an exaple of SXA, but they are truly Helix-generic.
- [SI Snitch](https://github.com/KayeeNL/SI-Snitch) - A debugging tool for reading claims passed to Sitecore from Sitecore Identity, after transformation of those claims from Sitecore Identity. It can be helpful in identifying claims that Sitecore is getting (and in what format) and ensuring group transformations in Sitecore Identity are being processed properly.
- [MasterKey](https://github.com/islaytitans/MasterKey) - A module for Unlocking Sitecore Items.
- [Sitecore Delete Access Rights](https://github.com/mikaelnet/sitecore-access-rights) - Enables the "item:removeVersion" access right, allowing authors to remove individual item versions without allowing authors to delete the entire item. It also allows the initial creator of an item to delete his/her own item, unless an explicit deny delete access right is applied to the item.

## SEO

- [301 Redirect Module](https://github.com/thecadams/301RedirectModule) - An improved version of the Sitecore 301 redirect module.
- [SitecoreSitemapXML](https://github.com/JimmieOverby/SitecoreSitemapXML) - Generates the Sitemap compliant with the schema defined by sitemaps.org and submits it to search engines.
- [Sitemap Generator](https://github.com/jermdavis/SitemapGenerator) - An example Sitecore / FakeDB / TDS / Cloud Build project for sitemap generation.
- [Sitecore Solr](https://github.com/bigredmachine/sitecore-solr) - An example code of how you could extend the Sitecore Solr provider.
- [URL Rewriter Module](https://github.com/ParTech/Url-Rewriter) - Enables administrator or editors to manage URL rewrite rules from within the Sitecore client, supporting rewriting of hostnames, relative URL's and absolute URL's.
- [RedirectManager](https://github.com/AlexanderDavyduk/Sitecore-RedirectManager) - A redirect manager for Sitecore.

## Serialization

- [Rainbow](https://github.com/SitecoreUnicorn/Rainbow) - An advanced serialization library for Sitecore, designed to be a complete replacement for the Sitecore serialization format and filesystem organization, as well as enabling cross-source item comparison.
- [Unicorn](https://github.com/SitecoreUnicorn/Unicorn) - A utility for Sitecore that solves the issue of moving templates, renderings, and other database items between Sitecore instances by writing serialized copies of Sitecore items to disk along with the code - this way, a copy of the necessary database items for a given codebase accompanies it in source control.
- [Sidekick](https://github.com/JeffDarchuk/SitecoreSidekick) - A framework for angularjs based microservice architecture operations.
- [Rhino](https://github.com/kamsar/Rhino) - An experimental serialization data provider for Sitecore.

## Sitecore Host

- [SitecoreHostQuickStart](https://github.com/sitecoreguild/SitecoreHostQuickStart/tree/develop) - A basic set of templates to help you get started building your own Sitecore Host applications.
- [Hostbase](https://github.com/muso31/Hostbase) - Sitecore Host example solution which can be used as a starting point for Sitecore Host applications. Currently runs in the IdentityServer Host as a plugin, will be updated when standalone Sitecore Host applications become readily available.

## SPE (Sitecore PowerShell Extension)

- [Sitecore PowerShell](https://github.com/SitecorePowerShell) - Sitecore PowerShell Initiative official GitHub.
- [Sitecore.Utilities](https://github.com/alan-null/Sitecore.Utilities) - A set of small modules for Sitecore PowerShell Extensions.
- [SPE Content Migrator](https://github.com/michaellwest/Spe-Content-Migrator) - Script used to migrate content between Sitecore instances using SPE.

## SPEAK

- [Speak 3 starter template](https://github.com/Mitya88/SitecoreSpeak3StarterProject) - Speak 3 starter template generated with Angular CLI version 1.2.7.
- [Sitecore Speak UI Library](https://github.com/Mitya88/SitecoreSpeakUILibrary) - Speak 3 components generated with Angular CLI version 1.2.7.
- [SitecoreDataImporter](https://github.com/komainu85/SitecoreDataImporter) - SPEAK application to import CSV / JSON / XML into Sitecore Items.

## SXA (Sitecore Experience Accelerator)

- [Sitecore Experience Accelerator index](https://github.com/alan-null/SXA.Index) - The whole set of dicumentation about SXA.
- [SXA Styleguide](https://github.com/markvanaalst/SXA.Styleguide) - An education site based on SXA that helps explaining the inner working and illustrating best practices.
- [SXA.Styleguide.Frontend](https://github.com/markvanaalst/SXA.Styleguide.Frontend) - A repository holds all the frontend code needed to run the site. It consists of two parts, the SXA themes and the Scriban templates used on the site. The folder structure used in this repository mimics the SXA Creative Exchange output, therefore you can find the sources for the themes and the seperate scriban templates.
- [SXA.Foundation.Variants](https://github.com/MartinMiles/SXA.Foundation.Variants) - A collection of custom SXA rendering variants and some other useful things that may be helpful in your solution.
- [SXA Reference](https://github.com/alan-null/XA.Reference) - An example Sitecore project build on top of Sitecore Experience Accelerator.
- [SXA.HealthCheck](https://github.com/alan-null/SXA.HealthCheck) - A Power Shell script used to determine health status of SXA site, consists of validation steps, each of them checks different thing in SXA solution and provides possible solution.
- [Global Field Validator](https://github.com/JeffDarchuk/SxaGlobalFieldValidator) - An SXA module to validate fields at a site level rather than at the template field level.
- [Scriban syntax coloring and auto completion](https://github.com/AdamNaj/SitecoreScriban-vscode) - Scriban syntax coloring and intellisense for known objects extension for Visual Studio Code.
- [Westco SXA Extensions](https://github.com/michaellwest/westco-sxa-extensions) - Sitecore Experience Accelerator (SXA) extensions.
- [docker-sxa-node](https://github.com/michaellwest/docker-sxa-node) - Demonstrates using the SXA CLI from within a Docker container with Node installed.
- [SXA Securty Headers](https://github.com/GuitarRich/SXA.SecurityHeaders) - Shows how to implemenmt response security headers on an exaple of SXA, but they are truly Helix-generic.
- [SXA.Platform.Assemblies](https://github.com/konabos/SXA.Platform.Assemblies) - the lists of assemblies for SXA back to v1.6 and Powershell script to generate your own.

## Testing

- [Sitecore FakeDb](https://github.com/sshushliapin/Sitecore.FakeDb) - A unit testing framework for Sitecore that enables creation and manipulation of Sitecore content in memory. It is designed to minimize efforts for the test content initialization keeping focus on the minimal test data rather than comprehensive content tree representation.
- [Minq](https://github.com/valtech/minq) - Mockable, LINQable support for Sitecore and Sitecore MVC.

## Templates

- [Token Set](https://github.com/retohugi/SitecoreExtension-TokenSet) - Provides additional standard value tokens for Sitecore Data Templates, icludes future date and obtaining the value by executing a query.

## Universal Tracker

- [UniversalTracker SDK](https://github.com/Sitecore/Sitecore.UniversalTracker.MobileSDK) - .Net Standard library that provides the interactions and events writing API for client .NET applications that serves as an interface that connects the Universal Tracker service and an application to let users work with native objects rather than with HTTP requests and JSON responses.

## WebApi

- [Sitecore Endpoints](https://github.com/MartinMiles/Sitecore.Endpoints) - Ready to pick-and-use samples of Sitecore Services Client and Sitecore WebApi implemented in a form Helix feature.
- [Odata.SitecoreExample](https://github.com/ianjohngraham/Odata.SitecoreExample) - An example of a Sitecore oData Repository.
- [Web API Session-Enabled Routes](https://github.com/coreyasmith/WebApiEnableSessionHandler) - Sitecore pipeline processor and extensions to the HttpRouteCollection to enable session in Web API 2.

## Workflows

- [DynamicWorkflows](https://github.com/ivansharamok/DynamicWorkflows) - Rule Engine based workflow management tool.

## xConnect and xDB

- [XConnectTutorial](https://github.com/jst-cyr/XConnectTutorial) - A tutorial repository based on the Sitecore documentation to walk users through common interactions with the xConnect APIs based on code from Martina Welander in the "Getting Started" tutorials and other great documentation.
- [XConnectHelper](https://github.com/lowedown/xConnectHelper) - A Swiss Army Knife for debugging xConnect. Features: Insight into current tracking session data; Show goals and events that were triggered on last page view; Status checker that validates your xConnect setup (connections, certificates, settings); Set identifiers and basic contact data in the current session; Flush current session for immediate processing.
- [XdbTracker](https://github.com/lowedown/XdbTracker) - API and js-function to allow client-side triggering of Sitecore events / goals and outcomes.
- [Experience Generator](https://github.com/Sitecore/xGenerator) - Generates "realistically looking" traffic for Sitecore sites with configurable patterns.
- [xconnect-odata-proxy](https://github.com/ianjohngraham/xconnect-odata-proxy) - A simple Node.js proxy to access xConnect's oData API in Sitecore 9.
- [xConnectDeployer](https://github.com/boro2g/xConnectDeployer) - An example console application you can use to deploy the Marketing Automation Engine.
- [Right To Be Forgotten](https://github.com/steviemcg/SitecoreComms.RTBF) - A "Execute Right To Be Forgotten" plugin for Marketing Automation Action.

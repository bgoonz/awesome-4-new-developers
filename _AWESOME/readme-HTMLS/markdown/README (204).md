# Awesome Pyramid

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![IRC Freenode](https://img.shields.io/badge/irc-freenode-blue.svg)](https://webchat.freenode.net/?channels=pyramid)

A curated list of awesome Pyramid apps, projects and resources. Inspired by and based on [awesome-python](https://github.com/vinta/awesome-python/).

- [Awesome Pyramid](#awesome-pyramid)
  - [Admin Interface](#admin-interface)
  - [Asset Management](#asset-management)
  - [Async](#async)
  - [Authentication](#authentication)
  - [Authorization](#authorization)
  - [Caching & Session](#caching--session)
  - [Debugging](#debugging)
  - [Email](#email)
  - [Forms](#forms)
  - [Media-Management](#media-management)
  - [RESTful API](#restful-api)
  - [Search](#search)
  - [Security](#security)
  - [Services](#services)
  - [Settings](#settings)
  - [Storage](#storage)
  - [Task Queue](#task-queue)
  - [Testing](#testing)
  - [Translations](#translations)
  - [Web frontend integration](#web-frontend-integration)
  - [Workflows](#workflows)
  - [Other](#other)
- [Projects](#projects)
  - [Framework](#framework)
  - [CMS](#cms)
  - [Cookiecutters](#cookiecutters)
  - [e-Commerce](#e-commerce)
  - [Project Management](#project-management)
  - [Other](#other)
- [Resources](#resources)
  - [Books](#books)
  - [Websites](#websites)
  - [Conferences](#conferences)
  - [Videos](#videos)
  - [Who uses it?](#who-uses-it)
- [Contributing](#contributing)

## Admin interface

_Packages that extend the Admin interface, adding or improving features._

- [pyramid_formalchemy](https://github.com/FormAlchemy/pyramid_formalchemy) - provides a CRUD interface for pyramid based on FormAlchemy.
- [pyramid_sacrud](https://github.com/sacrud/pyramid_sacrud) - Pyramid CRUD interface. Provides an administration web interface for Pyramid. Unlike classic CRUD, pyramid_sacrud allows overrides and flexibility to customize your interface, similar to django.contrib.admin but uses a different backend to provide resources. [New Architecture](%3Chttp://pyramid-sacrud.readthedocs.io/pages/contribute/architecture.html%3E) built on the resources and mechanism traversal, allows to use it in various cases.
  - [ps_alchemy](https://github.com/sacrud/ps_alchemy) - extension for pyramid_sacrud which provides SQLAlchemy models.
  - [ps_tree](https://github.com/sacrud/ps_tree) - extension for [pyramid_sacrud](https://github.com/sacrud/pyramid_sacrud) which displays a list of records as tree. This works fine with models from [sqlalchemy_mptt](https://github.com/uralbash/sqlalchemy_mptt).
- [Websauna](https://websauna.org/docs/) - a full stack application framework for Pyramid

## Asset Management

_Packages that help manage the static assets of a project._

- [pyramid_webassets](https://github.com/sontek/pyramid_webassets) - Pyramid extension for working with the webassets library.
- [pyramid_bowerstatic](https://github.com/mrijken/pyramid_bowerstatic) - integration of Bowerstatic in Pyramid

## Async

- [aiopyramid](https://github.com/housleyjk/aiopyramid) - Run pyramid using asyncio.
- [gevent-socketio](https://github.com/abourget/gevent-socketio) - gevent-socketio is a Python implementation of the Socket.IO protocol, developed originally for Node.js by LearnBoost and then ported to other languages.
- [Stargate](https://github.com/boothead/stargate) - Stargate is a package for adding WebSockets support to pyramid applications using the excellent eventlet library for long running connections.
- [channelstream](https://github.com/AppEnlight/channelstream) - websocket communication server (gevent).

## Authentication

_Packages that improve or extend the authentication methods of Pyramid._

- [pyramid_ldap](https://github.com/Pylons/pyramid_ldap) - an LDAP authentication policy for Pyramid.
- [pyramid_ldap3](https://github.com/Cito/pyramid_ldap3) - Provides LDAP authentication services for your Pyramid application based on the ldap3 package.
- [pyramid_who](https://github.com/Pylons/pyramid_who) - Authentication policy for pyramid using repoze.who 2.0 API.
- [velruse](https://github.com/bbangert/velruse) - Simplifying third-party authentication for web applications. it supports most of auth [providers](https://github.com/bbangert/velruse/tree/master/velruse/providers).
- [pyramid_simpleauth](https://github.com/thruflo/pyramid_simpleauth) - session based authentication and role based security for Pyramid application
- [Python Social Auth](https://github.com/omab/python-social-auth) - Social authentication/registration mechanism with support for a large number of [providers](https://github.com/omab/python-social-auth#auth-providers).
- [Authomatic](https://github.com/authomatic/authomatic) - Simple yet powerful authorization / authentication client library for Python web applications.
- [apex](https://github.com/cd34/apex) - Toolkit for Pyramid, a Pylons Project, to add Authentication and Authorization using Velruse (OAuth) and/or a local database, CSRF, ReCaptcha, Sessions, Flash messages and I18N.
- [pyramid_authsanity](https://github.com/usingnamespace/pyramid_authsanity) - That will make it simpler to have a secure authentication policy with an easy to use backend.
- [pyramid_jwt](https://github.com/wichert/pyramid_jwt) - This package implements an authentication policy for Pyramid that using [JSON Web Tokens](https://jwt.io/). This standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) is often used to secure backens APIs. The excellent [PyJWT](https://pyjwt.readthedocs.io/en/latest/) library is used for the JWT encoding / decoding logic.
- [pyramid_ipauth](https://github.com/mozilla-services/pyramid_ipauth) - Pyramid authentication policy based on remote ip address.

## Authorization

_Packages related to authorization infrastructure and permissions._

- [ziggurat_foundations](https://github.com/ergo/ziggurat_foundations) - Framework agnostic set of sqlalchemy classes that make building applications that require permissions an easy task.
- [pyramid_multiauth](https://github.com/mozilla-services/pyramid_multiauth) - An authentication policy for Pyramid that proxies to a stack of other authentication policies.
- [pyramid_authstack](https://github.com/wichert/pyramid_authstack) - Use multiple authentication policies with Pyramid.
- [horus](https://github.com/Pylons/horus) - User registration and login system for the Pyramid Web Framework.
- [pyramid_yosai](https://github.com/YosaiProject/pyramid_yosai) - Pyramid integration with security Framework for Python applications featuring Authorization (rbac permissions and roles), Authentication (2fa totp), Session Management and an extensive Audit Trail https://yosaiproject.github.io/yosai/

## Caching & Session

_Packages that help with caching and session._

- [pyramid_beaker](https://github.com/Pylons/pyramid_beaker) - A Beaker session factory backend for Pyramid, also cache configurator.
  - [Why You’ll Want to Switch to dogpile.cache](http://techspot.zzzeek.org/2012/04/19/using-beaker-for-caching-why-you-ll-want-to-switch-to-dogpile.cache/)
- [pyramid_redis_sessions](https://github.com/ericrasmussen/pyramid_redis_sessions) - Pyramid web framework session factory backed by Redis.
- [pyramid_dogpile_cache](https://github.com/moriyoshi/pyramid_dogpile_cache) - dogpile.cache configuration package for Pyramid
- [pyramid_sessions](https://github.com/joulez/pyramid_sessions) - Multiple session support for the Pyramid Web Framework
- [pyramid_nacl_session](https://github.com/Pylons/pyramid_nacl_session) - defines an encrypting, pickle-based cookie serializer, using [PyNaCl](http://pynacl.readthedocs.io/en/latest/secret/) to generate the symmetric encryption for the cookie state.

## Debugging

_Packages that help hunt down bugs._

- [pyramid_debugtoolbar](https://github.com/Pylons/pyramid_debugtoolbar) - provides a debug toolbar useful while you’re developing your Pyramid application.
- [pyramid_exclog](https://github.com/Pylons/pyramid_exclog) - a package which logs exceptions from Pyramid applications.
- [pyramid_debugtoolbar_dogpile](https://github.com/jvanasco/pyramid_debugtoolbar_dogpile) - dogpile caching support for pyramid_debugtoolbar
- [pyramid_ipython](https://github.com/Pylons/pyramid_ipython) - IPython bindings for Pyramid’s pshell
- [pyramid_bpython](https://github.com/Pylons/pyramid_bpython) - bpython bindings for Pyramid’s pshell
- [pyramid_pycallgraph](https://github.com/disko/pyramid_pycallgraph) - Pyramid tween to generate a callgraph image for every request

## Email

_Packages that help manage email sending._

- [pyramid_mailer](https://github.com/Pylons/pyramid_mailer) - A package for sending email from your Pyramid application.
- [pyramid_marrowmailer](https://github.com/domenkozar/pyramid_marrowmailer) - Pyramid integration package for marrow.mailer, formerly known as TurboMail
- [pyramid_mailgun](https://github.com/evannook/pyramid_mailgun) - Mailgun integration for Pyramid framework.

## Forms

_Packages that extend the functionality of forms or add new types of forms._

- [deform](https://github.com/Pylons/deform) - is a Python HTML form generation library.
- [colander](https://github.com/Pylons/colander) - A serialization/deserialization/validation library for strings, mappings and lists.
- [WTForms](https://github.com/wtforms/wtforms) - is a flexible forms validation and rendering library for python web development.
- [ColanderAlchemy](https://github.com/stefanofontanelli/ColanderAlchemy) - helps you to auto-generate Colander schemas that are based on SQLAlchemy mapped classes.
- [marshmallow](https://github.com/marshmallow-code/marshmallow) - A lightweight library for converting complex objects to and from simple Python datatypes (i.e. (de)serialization and validation).

## Media-Management

- [pyramid_elfinder](https://github.com/uralbash/pyramid_elfinder) - This is conector for elfinder file manager, written for pyramid framework.
- [pyramid_storage](https://github.com/danjac/pyramid_storage) - This is a package for handling file uploads in your Pyramid framework application.

## RESTful API

_Packages for developing RESTful APIs._

- [cornice](https://github.com/Cornices/cornice) - provides helpers to build & document REST-ish Web Services with Pyramid, with decent default behaviors. It takes care of following the HTTP specification in an automated way where possible.
- [rest_toolkit](https://github.com/wichert/rest_toolkit) - is a Python package which provides a very convenient way to build REST servers. It is build on top of Pyramid, but you do not need to know much about Pyramid to use rest_toolkit.
- [pyramid_royal](https://github.com/hadrien/pyramid_royal) - Royal is a pyramid extension which eases writing RESTful web applications.
- [cliquet](https://github.com/mozilla-services/cliquet) - Cliquet is a toolkit to ease the implementation of HTTP microservices, such as data-driven REST APIs.
- [webargs](https://github.com/sloria/webargs) - A friendly library for parsing HTTP request arguments, with built-in support for popular web frameworks.
- [ramses](https://github.com/ramses-tech/ramses) - Generate a RESTful API using RAML. It uses Nefertari which provides ElasticSearch-powered views.
- [nefertari](https://github.com/ramses-tech/nefertari) - Nefertari is a REST API framework sitting on top of Pyramid and ElasticSearch.
- [pyramid_swagger](https://github.com/striglia/pyramid_swagger) - Convenient tools for using Swagger to define and validate your interfaces in a Pyramid webapp. (Swagger 2.0 document)
- [pyramid-openapi3](https://github.com/niteoweb/pyramid_openapi3) - Validate Pyramid views against an OpenAPI 3.0 document. Similar to pyramid_swagger but for OpenAPI 3.0.
- [pyramid_jsonapi](https://github.com/colinhiggs/pyramid-jsonapi) - Automatically create a [JSON API](http://jsonapi.org/) standard API from a database using the sqlAlchemy ORM and pyramid framework.
- [pyramid_apispec](https://github.com/ergo/pyramid_apispec) - Create an OpenAPI specification file using apispec and Marshmallow schemas.

## Search

_Packages that provide search capabilities to projects._

- [hypatia](https://github.com/Pylons/hypatia) - A Python indexing and searching system.

## Security

_Packages that improve the security of a project._

## Services

- [pyramid_sms](https://github.com/websauna/pyramid_sms) - SMS services for Pyramid web framework.

## Settings

_Packages that help manage the configurability of projects._

- [pyramid_zcml](https://github.com/Pylons/pyramid_zcml) - Zope Configuration Markup Language configuration support for Pyramid.
- [pyramid_services](https://github.com/mmerickel/pyramid_services) - defines a pattern and helper methods for accessing a pluggable service layer from within your Pyramid apps.
- [hupper](https://github.com/Pylons/hupper) - A process monitor/reloader for developers that can watch files for changes and restart the process.

## Storage

_Packages that extend the functionality of the existing storage backend or provide new storage backends._

- [pyramid_tm](https://github.com/Pylons/pyramid_tm) - Centralized transaction management for Pyramid applications (without middleware).
- [zope.sqlalchemy](https://github.com/zopefoundation/zope.sqlalchemy) - Integration of SQLAlchemy with transaction management.
  - [What the Zope Transaction Manager Means To Me (and you)](https://metaclassical.com/what-the-zope-transaction-manager-means-to-me-and-you/)
- [pyramid_sqlalchemy](https://github.com/wichert/pyramid_sqlalchemy) - provides some basic glue to facilitate using SQLAlchemy with Pyramid.
- [pyramid_zodbconn](https://github.com/Pylons/pyramid_zodbconn) - ZODB Database connection management for Pyramid.
- [pyramid_mongoengine](https://github.com/marioidival/pyramid_mongoengine) - pyramid-mongoengine package based on flask-mongoengine
- [pyramid_mongodb](https://github.com/niallo/pyramid_mongodb) - Basic Pyramid Scaffold to easily use MongoDB for persistence with the Pyramid Web framework
- [pyramid-excel](https://github.com/pyexcel-webwares/pyramid-excel) - pyramid-excel is based on [pyexcel](https://github.com/pyexcel/pyexcel) and makes it easy to consume/produce information stored in excel files over HTTP protocol as well as on file system. This library can turn the excel data into a list of lists, a list of records(dictionaries), dictionaries of lists. And vice versa. Hence it lets you focus on data in Pyramid based web development, instead of file formats.

## Task Queue

_Packages that make working with task/background queues easier._

- [pyramid_celery](https://github.com/sontek/pyramid_celery) - Pyramid configuration with celery integration. Allows you to use pyramid .ini files to configure celery and have your pyramid configuration inside celery tasks.
- [pyramid_rq](https://github.com/wichert/pyramid_rq) - Support using the rq queueing system with pyramid. The easiest way to monitor and use [RQ](http://python-rq.org) in your Pyramid projects.

## Templates

- [pyramid_mako](https://github.com/Pylons/pyramid_mako) - Mako templating system bindings for the Pyramid web framework.
- [pyramid_chameleon](https://github.com/Pylons/pyramid_chameleon) - Chameleon template compiler for pyramid.
- [pyramid_jinja2](https://github.com/Pylons/pyramid_jinja2) - Jinja2 templating system bindings for the Pyramid web framework.
- [Tonnikala](https://github.com/ztane/Tonnikala) - Python templating engine with Pyramid integration
- [Kajiki](https://github.com/nandoflorestan/kajiki) - provides fast well-formed XML templates, with [Pyramid integration](https://github.com/nandoflorestan/kajiki/blob/master/kajiki/integration/pyramid.py)

## Testing

_Packages that help test code or generate test data._

- [webtest](https://github.com/Pylons/webtest) - Wraps any WSGI application and makes it easy to send test requests to that application, without starting up an HTTP server.

## Translations

_Packages help with the task of translating projects._

- [lingua](https://github.com/wichert/lingua) - Lingua is a package with tools to extract translatable texts from your code, and to check existing translations. It replaces the use of the xgettext command from gettext, or pybabel from Babel.
- [pyramid_i18n_helper](https://github.com/sahama/pyramid_i18n_helper) - helper to create new smgid and translate msgid to local langs .

## Web frontend integration

- [PyramidVue](https://github.com/eddyekofo94/pyramidVue) - Pyramid and VueJs (JavaScript) template with Hot-Module-Replacement starter template.

## Workflows

_Packages that do process, procedure and/or business tasks management._

## Other

- [pyramid_layout](https://github.com/Pylons/pyramid_layout) - Pyramid add-on for managing UI layouts.
- [pyramid_skins](https://github.com/Pylons/pyramid_skins) - This package provides a simple framework to integrate code with templates and resources.
- [waitress](https://github.com/Pylons/waitress) - Waitress is meant to be a production-quality pure-Python WSGI server with very acceptable performance. It has no dependencies except ones which live in the Python standard library.
- [pyramid_handlers](https://github.com/Pylons/pyramid_handlers) - analogue of Pylons-style “controllers” for Pyramid.
- [pyramid_rpc](https://github.com/Pylons/pyramid_rpc) - RPC service add-on for Pyramid, supports XML-RPC in a more extensible manner than pyramid_xmlrpc with support for JSON-RPC and AMF.
- [pyramid_autodoc](https://github.com/SurveyMonkey/pyramid_autodoc) - Sphinx extension for documenting your Pyramid APIs.
- [pyramid_pages](https://github.com/uralbash/pyramid_pages) - Provides a collections of tree pages to your Pyramid application. This is very similar to django.contrib.flatpages but with a tree structure and traversal algorithm in URL dispatch.
- [paginate](https://github.com/Pylons/paginate) - Python pagination module.
- [pyramid_tablib](https://github.com/lxneng/pyramid_tablib) - tablib renderer (xlsx, xls, csv) for pyramid
- [tomb_routes](https://github.com/sontek/tomb_routes) - Simple utility library around pyramid routing
- [pyramid_extdirect](https://github.com/jenner/pyramid_extdirect) - This pyramid plugin provides a router for the ExtDirect Sencha API included in ExtJS. ExtDirect allows to run server-side callbacks directly through JavaScript without the extra AJAX boilerplate.
- [pyramid_retry](https://github.com/Pylons/pyramid_retry) - pyramid_retry is an execution policy for Pyramid that wraps requests and can retry them a configurable number of times under certain “retryable” error conditions before indicating a failure to the client.

# Projects

_Outstanding Pyramid projects._

## Framework

- [Ringo](http://www.ringo-framework.org/) - Ringo is a Python based high level web application framework build on top of Pyramid. The framework can be used to build form based management or administration software.
- [cone.app](https://github.com/conestack/cone.app) - A comprehensive web application stub on top of Pyramid.

## CMS

- [nive_cms](https://github.com/nive/nive_cms) - Nive is professional out the box content management system for mobile and desktop websites based on python and the webframework pyramid. Please refer to the website cms.nive.co for detailed information.
- [substanced](https://github.com/Pylons/substanced) - An application server built upon the Pyramid web framework. It provides a user interface for managing content as well as libraries and utilities which make it easy to create applications.
- [Kotti](https://github.com/Kotti/Kotti) - A user-friendly, light-weight and extensible web content management system. Based on Pyramid and SQLAlchemy.
- [KARL](https://karlproject.readthedocs.io/en/latest/) - A moderately-sized application (roughly 80K lines of Python code) built on top of Pyramid. It is an open source web system for collaboration, organizational intranets, and knowledge management. It provides facilities for wikis, calendars, manuals, searching, tagging, commenting, and file uploads. See the KARL site for download and installation details.

## Cookiecutters

- [Pylons](https://github.com/Pylons?q=cookiecutter) - official cookiecutter templates
- [Pyramid Runner](https://github.com/asif-mahmud/pyramid_runner) - A minimal Pyramid scaffold that aims to provide a starter template to build small to large web services.

  - Traversal based application
  - JSON only response
  - JWT authentication policy
  - Alembic for database revisions
  - Some simple modifications to base tests, views and models base to reduce typing

## e-Commerce

## Other

- [cluegun](https://github.com/Pylons/cluegun) - A simple pastebin application based on Rocky Burt’s ClueBin. It demonstrates form processing, security, and the use of ZODB within a Pyramid application.
- [shootout](https://github.com/Pylons/shootout) - An example “idea competition” application by Carlos de la Guardia and Lukasz Fidosz. It demonstrates URL dispatch, simple authentication, integration with SQLAlchemy and pyramid_simpleform.
- [virginia](https://github.com/Pylons/virginia) - A very simple dynamic file rendering application. It is willing to render structured text documents, HTML documents, and images from a filesystem directory. It’s also a good example of traversal. An earlier version of this application runs the repoze.org website.
- [Akhet](https://docs.pylonsproject.org/projects/akhet/en/latest/) - A Pyramid library and demo application with a Pylons-like feel. Its most known for its former application scaffold, which helped users transition from Pylons and those preferring a more Pylons-like API. The scaffold has been retired but the demo plays a similar role.
- [Khufu Project](http://khufuproject.github.io/) - Khufu is an application scaffolding for Pyramid that provides an environment to work with Jinja2 and SQLAlchemy.
- [Ptah](https://github.com/ptahproject/ptah) - Ptah is a fast, fun, open source high-level Python web development environment.
- [warehouse](https://github.com/pypa/warehouse) - Warehouse is a next generation Python Package Repository designed to replace the legacy code base that currently powers PyPI.
- [travelcrm](https://github.com/mazvv/travelcrm) - TravelCRM is effective free and open source application for the automation of customer relationships for travel agencies at all levels, from small to large networks.
- [RhodeCode](https://rhodecode.com/) - enterprise source code management platform. It applies unified user control, permissions, code reviews, and tool integration across Mercurial, Git, and Subversion repositories. Large and growing software teams all over the world use RhodeCode to collaborate in a secure, behind-the-firewall environment.

## Project Management

- [AppEnlight](https://getappenlight.com/) - Performance, exception, and uptime monitoring for the Web

# Resources

Where to discover new Pyramid apps and projects.

## Books

- [Python Web Frameworks](http://www.oreilly.com/web-platform/free/python-web-frameworks.csp) - Dive into details on the top six Python frameworks—Django, Flask, Tornado, Bottle, Pyramid, and CherryPy.

## Websites

- [Try Pyramid](https://trypyramid.com/) - The Start Small, Finish Big, Stay Finished Framework. Official website.

## Conferences

- [Sushi Sprint at PloneConf 2018 in Tokyo, Japan](https://2018.ploneconf.org/sprints) (November 10-11, 2018)
- [Pyramid Workshop in Munich, Germany.](https://pyconweb.com/talks/28-05-2017/pyramid-workshop) (May 28, 2017, 10:30 a.m. - 12:30 p.m.)
- [PloneConf 2017](https://2017.ploneconf.org/) - Barcelona Plone Digital Experience Conference (16~22 Oct. 2017)
- [PloneConf 2016](https://2016.ploneconf.org/) - Boston Plone Digital Experience Conference (17~23 Oct. 2016)
- [DragonSprint 2016](http://dragonsprint.com/) - DragonSprint is a week-long sprint on Pyramid. The sprint takes place in Ljubljana, Slovenia, EU in the first week of December (5th to 9th). The main two sprint topics are Pyramid 2.0 and Pyramid for Newcomers.

## Videos

- [List of videos from the official site](https://docs.pylonsproject.org/projects/pyramid_cookbook/en/latest/misc/videos.html)
- [Online Video Courses at Talk Python Training](https://training.talkpython.fm/courses/all)
- [Web Applications with Python and the Pyramid Framework](http://shop.oreilly.com/product/0636920041900.do) - In this Web Applications with Python and the Pyramid Framework training course, expert author Paul Everitt will teach you about the features needed for Python web development, as well as Pyramid’s unique features. This course is designed for users that already have a basic knowledge of Python.

  You will start by learning about single file web apps, templating, and multiple routes and views. From there, Paul will teach you about MyApp Python package, views and routes, and templating and static assets. This video tutorial also covers forms, databases, and sessions, authentication and authorization, and JSON. Finally, you will learn about extensibility, including custom configuration settings, extending and overriding, and custom view predicates.

  Once you have completed this computer based training course, you will have gained a basic understanding of the features needed for Python web development and the features unique to Pyramid.

## Who uses it?

- [Projects, Websites, Companies and Organizations that use Pyramid](https://trypyramid.com/community-powered-by-pyramid.html) - add your project to the list

# Contributing

Just fork and send a pull request with your awesome Pyramid apps, projects or resources.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, <span class="citation" data-cites="uralbash">@uralbash</span> has waived all copyright and related or neighboring rights to this work.

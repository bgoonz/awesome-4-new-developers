# Awesome Web Security [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" width="70" />](https://www.w3.org/TR/html5/)

> 🐶 Curated list of Web Security materials and resources.

Needless to say, most websites suffer from various types of bugs which may eventually lead to vulnerabilities. Why would this happen so often? There can be many factors involved including misconfiguration, shortage of engineers’ security skills, etc. To combat this, here is a curated list of Web Security materials and resources for learning cutting edge penetration techniques, and I highly encourage you to read this article “[So you want to be a web security researcher?](https://portswigger.net/blog/so-you-want-to-be-a-web-security-researcher)” first.

_Please read the [contribution guidelines](CONTRIBUTING.md) before contributing._

---

**🌈 Want to strengthen your penetration skills?**  
I would recommend playing some [awesome-ctf](https://github.com/apsdehal/awesome-ctf)s.

---

If you enjoy this awesome list and would like to support it, check out my [Patreon](https://www.patreon.com/boik) page :)  
Also, don’t forget to check out my [repos](https://github.com/qazbnm456) 🐾 or say _hi_ on my [Twitter](https://twitter.com/qazbnm456)!

## Contents

- [Digests](#digests)
- [Forums](#forums)
- [Introduction](#intro)
  - [XSS](#xss---cross-site-scripting)
  - [Prototype Pollution](#prototype-pollution)
  - [CSV Injection](#csv-injection)
  - [SQL Injection](#sql-injection)
  - [Command Injection](#command-injection)
  - [ORM Injection](#orm-injection)
  - [FTP Injection](#ftp-injection)
  - [XXE](#xxe---xml-external-entity)
  - [CSRF](#csrf---cross-site-request-forgery)
  - [Clickjacking](#clickjacking)
  - [SSRF](#ssrf---server-side-request-forgery)
  - [Web Cache Poisoning](#web-cache-poisoning)
  - [Relative Path Overwrite](#relative-path-overwrite)
  - [Open Redirect](#open-redirect)
  - [SAML](#saml)
  - [Upload](#upload)
  - [Rails](#rails)
  - [AngularJS](#angularjs)
  - [ReactJS](#reactjs)
  - [SSL/TLS](#ssltls)
  - [Webmail](#webmail)
  - [NFS](#nfs)
  - [AWS](#aws)
  - [Azure](#azure)
  - [Fingerprint](#fingerprint)
  - [Sub Domain Enumeration](#sub-domain-enumeration)
  - [Crypto](#crypto)
  - [Web Shell](#web-shell)
  - [OSINT](#osint)
  - [DNS Rebinding](#dns-rebinding)
  - [Deserialization](#deserialization)
  - [OAuth](#oauth)
  - [JWT](#jwt)
- [Evasions](#evasions)
  - [XXE](#evasions-xxe)
  - [CSP](#evasions-csp)
  - [WAF](#evasions-waf)
  - [JSMVC](#evasions-jsmvc)
  - [Authentication](#evasions-authentication)
- [Tricks](#tricks)
  - [CSRF](#tricks-csrf)
  - [Clickjacking](#tricks-clickjacking)
  - [Remote Code Execution](#tricks-rce)
  - [XSS](#tricks-xss)
  - [SQL Injection](#tricks-sql-injection)
  - [NoSQL Injection](#tricks-nosql-injection)
  - [FTP Injection](#tricks-ftp-injection)
  - [XXE](#tricks-xxe)
  - [SSRF](#tricks-ssrf)
  - [Web Cache Poisoning](#tricks-web-cache-poisoning)
  - [Header Injection](#tricks-header-injection)
  - [URL](#tricks-url)
  - [Deserialization](#tricks-deserialization)
  - [OAuth](#tricks-oauth)
  - [Others](#tricks-others)
- [Browser Exploitation](#browser-exploitation)
- [PoCs](#pocs)
  - [Database](#pocs-database)
- [Cheetsheets](#cheetsheets)
- [Tools](#tools)
  - [Auditing](#tools-auditing)
  - [Command Injection](#tools-command-injection)
  - [Reconnaissance](#tools-reconnaissance)
    - [OSINT](#tools-osint)
    - [Sub Domain Enumeration](#tools-sub-domain-enumeration)
  - [Code Generating](#tools-code-generating)
  - [Fuzzing](#tools-fuzzing)
  - [Scanning](#tools-scanning)
  - [Penetration Testing](#tools-penetration-testing)
  - [Leaking](#tools-leaking)
  - [Offensive](#tools-offensive)
    - [XSS](#tools-xss)
    - [SQL Injection](#tools-sql-injection)
    - [Template Injection](#tools-template-injection)
    - [XXE](#tools-xxe)
    - [CSRF](#tools-csrf)
    - [SSRF](#tools-ssrf)
  - [Detecting](#tools-detecting)
  - [Preventing](#tools-preventing)
  - [Proxy](#tools-proxy)
  - [Webshell](#tools-webshell)
  - [Disassembler](#tools-disassembler)
  - [Decompiler](#tools-decompiler)
  - [DNS Rebinding](#tools-dns-rebinding)
  - [Others](#tools-others)
- [Social Engineering Database](#social-engineering-database)
- [Blogs](#blogs)
- [Twitter Users](#twitter-users)
- [Practices](#practices)
  - [Application](#practices-application)
  - [AWS](#practices-aws)
  - [XSS](#practices-xss)
  - [ModSecurity / OWASP ModSecurity Core Rule Set](#practices-modsecurity)
- [Community](#community)
- [Miscellaneous](#miscellaneous)

## Digests

- [Hacker101](https://www.hacker101.com/) - Written by [hackerone](https://www.hackerone.com/start-hacking).
- [The Daily Swig - Web security digest](https://portswigger.net/daily-swig) - Written by [PortSwigger](https://portswigger.net/).
- [Web Application Security Zone by Netsparker](https://www.netsparker.com/blog/web-security/) - Written by [Netsparker](https://www.netsparker.com/).
- [Infosec Newbie](https://www.sneakymonkey.net/2017/04/23/infosec-newbie/) - Written by [Mark Robinson](https://www.sneakymonkey.net/).
- [The Magic of Learning](https://bitvijays.github.io/) - Written by <span class="citation" data-cites="bitvijays">\[@bitvijays\]</span>(https://bitvijays.github.io/aboutme.html).
- [CTF Field Guide](https://trailofbits.github.io/ctf/) - Written by [Trail of Bits](https://www.trailofbits.com/).
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings/) - Written by <span class="citation" data-cites="swisskyrepo">\[@swisskyrepo\]</span>(https://github.com/swisskyrepo).
- [tl;dr sec](https://tldrsec.com/) - Weekly summary of top security tools, blog posts, and security research.

## Forums

- [Phrack Magazine](http://www.phrack.org/) - Ezine written by and for hackers.
- [The Hacker News](https://thehackernews.com/) - Security in a serious way.
- [Security Weekly](https://securityweekly.com/) - The security podcast network.
- [The Register](http://www.theregister.co.uk/) - Biting the hand that feeds IT.
- [Dark Reading](https://www.darkreading.com/Default.asp) - Connecting The Information Security Community.
- [HackDig](http://en.hackdig.com/) - Dig high-quality web security articles for hacker.

<span id="intro"></span> \#\# Introduction

<span id="xss"></span> \#\#\# XSS - Cross-Site Scripting

- [Cross-Site Scripting – Application Security – Google](https://www.google.com/intl/sw/about/appsecurity/learning/xss/) - Written by [Google](https://www.google.com/).
- [H5SC](https://github.com/cure53/H5SC) - Written by <span class="citation" data-cites="cure53">\[@cure53\]</span>(https://github.com/cure53).
- [AwesomeXSS](https://github.com/s0md3v/AwesomeXSS) - Written by <span class="citation" data-cites="s0md3v">\[@s0md3v\]</span>(https://github.com/s0md3v).
- [XSS.png](https://github.com/LucaBongiorni/XSS.png) - Written by <span class="citation" data-cites="jackmasa">@jackmasa</span>.
- [C.XSS Guide](https://excess-xss.com/) - Written by <span class="citation" data-cites="JakobKallin">\[@JakobKallin\]</span>(https://github.com/JakobKallin) and [Irene Lobo Valbuena](https://www.linkedin.com/in/irenelobovalbuena/).
- [THE BIG BAD WOLF - XSS AND MAINTAINING ACCESS](http://www.paulosyibelo.com/2018/06/the-big-bad-wolf-xss-and-maintaining.html) - Written by [Paulos Yibelo](http://www.paulosyibelo.com/).
- [payloadbox/xss-payload-list](https://github.com/payloadbox/xss-payload-list) - Written by <span class="citation" data-cites="payloadbox">\[@payloadbox\]</span>(https://github.com/payloadbox).
- [PayloadsAllTheThings - XSS Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XSS%20Injection) - Written by <span class="citation" data-cites="swisskyrepo">\[@swisskyrepo\]</span>(https://github.com/swisskyrepo).

<span id="prototype-pollution"></span> \#\#\# Prototype Pollution

- [Prototype pollution attack in NodeJS application](https://github.com/HoLyVieR/prototype-pollution-nsec18/blob/master/paper/JavaScript_prototype_pollution_attack_in_NodeJS.pdf) - Written by <span class="citation" data-cites="HoLyVieR">\[@HoLyVieR\]</span>(https://github.com/HoLyVieR).
- [Exploiting prototype pollution – RCE in Kibana (CVE-2019-7609)](https://research.securitum.com/prototype-pollution-rce-kibana-cve-2019-7609/) - Written by <span class="citation" data-cites="securitymb">\[@securitymb\]</span>(https://twitter.com/securitymb).
- [Real-world JS - 1](https://blog.p6.is/Real-World-JS-1/) - Written by <span class="citation" data-cites="po6ix">\[@po6ix\]</span>(https://twitter.com/po6ix).

<span id="csv-injection"></span> \#\#\# CSV Injection

- [CSV Injection -&gt; Meterpreter on Pornhub](https://news.webamooz.com/wp-content/uploads/bot/offsecmag/147.pdf) - Written by [Andy](https://blog.zsec.uk/).
- [The Absurdly Underestimated Dangers of CSV Injection](http://georgemauer.net/2017/10/07/csv-injection.html) - Written by [George Mauer](http://georgemauer.net/).
- [PayloadsAllTheThings - CSV Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CSV%20Injection) - Written by <span class="citation" data-cites="swisskyrepo">\[@swisskyrepo\]</span>(https://github.com/swisskyrepo).

<span id="sql-injection"></span> \#\#\# SQL Injection

- [SQL Injection Cheat Sheet](https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/) - Written by <span class="citation" data-cites="netsparker">\[@netsparker\]</span>(https://twitter.com/netsparker).
- [SQL Injection Wiki](https://sqlwiki.netspi.com/) - Written by [NETSPI](https://www.netspi.com/).
- [SQL Injection Pocket Reference](https://websec.ca/kb/sql_injection) - Written by <span class="citation" data-cites="LightOS">\[@LightOS\]</span>(https://twitter.com/LightOS).
- [payloadbox/sql-injection-payload-list](https://github.com/payloadbox/sql-injection-payload-list) - Written by <span class="citation" data-cites="payloadbox">\[@payloadbox\]</span>(https://github.com/payloadbox).
- [PayloadsAllTheThings - SQL Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection) - Written by <span class="citation" data-cites="swisskyrepo">\[@swisskyrepo\]</span>(https://github.com/swisskyrepo).

<span id="command-injection"></span> \#\#\# Command Injection

- [Potential command injection in resolv.rb](https://github.com/ruby/ruby/pull/1777) - Written by <span class="citation" data-cites="drigg3r">\[@drigg3r\]</span>(https://github.com/drigg3r).
- [payloadbox/command-injection-payload-list](https://github.com/payloadbox/command-injection-payload-list) - Written by <span class="citation" data-cites="payloadbox">\[@payloadbox\]</span>(https://github.com/payloadbox).
- [PayloadsAllTheThings - Command Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Command%20Injection) - Written by <span class="citation" data-cites="swisskyrepo">\[@swisskyrepo\]</span>(https://github.com/swisskyrepo).

<span id="orm-injection"></span> \#\#\# ORM Injection

- [HQL for pentesters](http://blog.h3xstream.com/2014/02/hql-for-pentesters.html) - Written by <span class="citation" data-cites="h3xstream">\[@h3xstream\]</span>(https://twitter.com/h3xstream/).
- [HQL : Hyperinsane Query Language (or how to access the whole SQL API within a HQL injection ?)](https://www.synacktiv.com/ressources/hql2sql_sstic_2015_en.pdf) - Written by <span class="citation" data-cites="_m0bius">\[@\_m0bius\]</span>(https://twitter.com/\_m0bius).
- [ORM2Pwn: Exploiting injections in Hibernate ORM](https://www.slideshare.net/0ang3el/orm2pwn-exploiting-injections-in-hibernate-orm) - Written by [Mikhail Egorov](https://0ang3el.blogspot.tw/).
- [ORM Injection](https://www.slideshare.net/simone.onofri/orm-injection) - Written by [Simone Onofri](https://onofri.org/).

<span id="ftp-injection"></span> \#\#\# FTP Injection

- [Advisory: Java/Python FTP Injections Allow for Firewall Bypass](http://blog.blindspotsecurity.com/2017/02/advisory-javapython-ftp-injections.html) - Written by [Timothy Morgan](https://plus.google.com/105917618099766831589).
- [SMTP over XXE − how to send emails using Java’s XML parser](https://shiftordie.de/blog/2017/02/18/smtp-over-xxe/) - Written by [Alexander Klink](https://shiftordie.de/).

<span id="xxe"></span> \#\#\# XXE - XML eXternal Entity

- [XXE](https://phonexicum.github.io/infosec/xxe.html) - Written by <span class="citation" data-cites="phonexicum">\[@phonexicum\]</span>(https://twitter.com/phonexicum).
- [XML external entity (XXE) injection](https://portswigger.net/web-security/xxe) - Written by [portswigger](https://portswigger.net/).
- [XML Schema, DTD, and Entity Attacks](https://www.vsecurity.com/download/publications/XMLDTDEntityAttacks.pdf) - Written by [Timothy D. Morgan](https://twitter.com/ecbftw) and Omar Al Ibrahim.
- [payloadbox/xxe-injection-payload-list](https://github.com/payloadbox/xxe-injection-payload-list) - Written by <span class="citation" data-cites="payloadbox">\[@payloadbox\]</span>(https://github.com/payloadbox)
- [PayloadsAllTheThings - XXE Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XXE%20Injection) - Written by various contributors.

<span id="csrf"></span> \#\#\# CSRF - Cross-Site Request Forgery

- [Wiping Out CSRF](https://medium.com/@jrozner/wiping-out-csrf-ded97ae7e83f) - Written by <span class="citation" data-cites="jrozner">\[@jrozner\]</span>(https://medium.com/<span class="citation" data-cites="jrozner">@jrozner</span>).
- [PayloadsAllTheThings - CSRF Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CSRF%20Injection) - Written by <span class="citation" data-cites="swisskyrepo">\[@swisskyrepo\]</span>(https://github.com/swisskyrepo).

<span id="clickjacking"></span> \#\#\# Clickjacking

- [Clickjacking](https://www.imperva.com/learn/application-security/clickjacking/) - Written by [Imperva](https://www.imperva.com/).
- [X-Frame-Options: All about Clickjacking?](https://github.com/cure53/Publications/blob/master/xfo-clickjacking.pdf?raw=true) - Written by [Mario Heiderich](http://www.slideshare.net/x00mario).

<span id="ssrf"></span> \#\#\# SSRF - Server-Side Request Forgery

- [SSRF bible. Cheatsheet](https://docs.google.com/document/d/1v1TkWZtrhzRLy0bYXBcdLUedXGb9njTNIJXa3u9akHM/edit) - Written by [Wallarm](https://wallarm.com/).
- [PayloadsAllTheThings - Server-Side Request Forgery](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Request%20Forgery) - Written by <span class="citation" data-cites="swisskyrepo">\[@swisskyrepo\]</span>(https://github.com/swisskyrepo).

<span id="web-cache-poisoning"></span> \#\#\# Web Cache Poisoning

- [Practical Web Cache Poisoning](https://portswigger.net/blog/practical-web-cache-poisoning) - Written by <span class="citation" data-cites="albinowax">\[@albinowax\]</span>(https://twitter.com/albinowax).
- [PayloadsAllTheThings - Web Cache Deception](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Web%20Cache%20Deception) - Written by <span class="citation" data-cites="swisskyrepo">\[@swisskyrepo\]</span>(https://github.com/swisskyrepo).

<span id="relative-path-overwrite"></span> \#\#\# Relative Path Overwrite

- [Large-scale analysis of style injection by relative path overwrite](https://blog.acolyer.org/2018/05/28/large-scale-analysis-of-style-injection-by-relative-path-overwrite/) - Written by [The Morning Paper](https://blog.acolyer.org/).
- [MBSD Technical Whitepaper - A few RPO exploitation techniques](https://www.mbsd.jp/Whitepaper/rpo.pdf) - Written by [Mitsui Bussan Secure Directions, Inc.](https://www.mbsd.jp/).

<span id="open-redirect"></span> \#\#\# Open Redirect

- [Open Redirect Vulnerability](https://s0cket7.com/open-redirect-vulnerability/) - Written by [s0cket7](https://s0cket7.com/).
- [payloadbox/open-redirect-payload-list](https://github.com/payloadbox/open-redirect-payload-list) - Written by <span class="citation" data-cites="payloadbox">\[@payloadbox\]</span>(https://github.com/payloadbox).
- [PayloadsAllTheThings - Open Redirect](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Open%20Redirect) - Written by <span class="citation" data-cites="swisskyrepo">\[@swisskyrepo\]</span>(https://github.com/swisskyrepo).

<span id="saml"></span> \#\#\# Security Assertion Markup Language (SAML)

- [How to Hunt Bugs in SAML; a Methodology - Part I](https://epi052.gitlab.io/notes-to-self/blog/2019-03-07-how-to-test-saml-a-methodology/) - Written by [epi](https://epi052.gitlab.io/notes-to-self/).
- [How to Hunt Bugs in SAML; a Methodology - Part II](https://epi052.gitlab.io/notes-to-self/blog/2019-03-13-how-to-test-saml-a-methodology-part-two/) - Written by [epi](https://epi052.gitlab.io/notes-to-self/).
- [How to Hunt Bugs in SAML; a Methodology - Part III](https://epi052.gitlab.io/notes-to-self/blog/2019-03-16-how-to-test-saml-a-methodology-part-three/) - Written by [epi](https://epi052.gitlab.io/notes-to-self/).
- [PayloadsAllTheThings - SAML Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SAML%20Injection) - Written by <span class="citation" data-cites="swisskyrepo">\[@swisskyrepo\]</span>(https://github.com/swisskyrepo).

<span id="upload"></span> \#\#\# Upload

- [File Upload Restrictions Bypass](https://www.exploit-db.com/docs/english/45074-file-upload-restrictions-bypass.pdf) - Written by [Haboob Team](https://www.exploit-db.com/author/?a=9381).
- [PayloadsAllTheThings - Upload Insecure Files](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Upload%20Insecure%20Files) - Written by <span class="citation" data-cites="swisskyrepo">\[@swisskyrepo\]</span>(https://github.com/swisskyrepo).

<span id="rails"></span> \#\#\# Rails

- [Rails Security - First part](https://hackmd.io/s/SkuTVw5O-) - Written by <span class="citation" data-cites="qazbnm456">\[@qazbnm456\]</span>(https://github.com/qazbnm456).
- [Zen Rails Security Checklist](https://github.com/brunofacca/zen-rails-security-checklist) - Written by <span class="citation" data-cites="brunofacca">\[@brunofacca\]</span>(https://github.com/brunofacca).
- [Rails SQL Injection](https://rails-sqli.org) - Written by <span class="citation" data-cites="presidentbeef">\[@presidentbeef\]</span>(https://github.com/presidentbeef).
- [Official Rails Security Guide](http://guides.rubyonrails.org/security.html) - Written by [Rails team](https://rubyonrails.org/).

<span id="angularjs"></span> \#\#\# AngularJS

- [XSS without HTML: Client-Side Template Injection with AngularJS](http://blog.portswigger.net/2016/01/xss-without-html-client-side-template.html) - Written by [Gareth Heyes](https://www.blogger.com/profile/10856178524811553475).
- [DOM based Angular sandbox escapes](http://blog.portswigger.net/2017/05/dom-based-angularjs-sandbox-escapes.html) - Written by <span class="citation" data-cites="garethheyes">\[@garethheyes\]</span>(https://twitter.com/garethheyes)

<span id="reactjs"></span> \#\#\# ReactJS

- [XSS via a spoofed React element](http://danlec.com/blog/xss-via-a-spoofed-react-element) - Written by [Daniel LeCheminant](http://danlec.com/).

<span id="ssl-tls"></span> \#\#\# SSL/TLS

- [SSL & TLS Penetration Testing](https://www.aptive.co.uk/blog/tls-ssl-security-testing/) - Written by [APTIVE](https://www.aptive.co.uk/).
- [Practical introduction to SSL/TLS](https://github.com/Hakky54/mutual-tls-ssl) - Written by <span class="citation" data-cites="Hakky54">\[@Hakky54\]</span>(https://github.com/Hakky54).

<span id="webmail"></span> \#\#\# Webmail

- [Why mail() is dangerous in PHP](https://blog.ripstech.com/2017/why-mail-is-dangerous-in-php/) - Written by [Robin Peraglie](https://www.ripstech.com/).

<span id="nfs"></span> \#\#\# NFS

- [NFS | PENETRATION TESTING ACADEMY](https://pentestacademy.wordpress.com/2017/09/20/nfs/?t=1&cn=ZmxleGlibGVfcmVjc18y&refsrc=email&iid=b34422ce15164e99a193fea0ccc7a02f&uid=1959680352&nid=244+289476616) - Written by [PENETRATION ACADEMY](https://pentestacademy.wordpress.com/).

<span id="aws"></span> \#\#\# AWS

- [PENETRATION TESTING AWS STORAGE: KICKING THE S3 BUCKET](https://rhinosecuritylabs.com/penetration-testing/penetration-testing-aws-storage/) - Written by Dwight Hohnstein from [Rhino Security Labs](https://rhinosecuritylabs.com/).
- [AWS PENETRATION TESTING PART 1. S3 BUCKETS](https://www.virtuesecurity.com/aws-penetration-testing-part-1-s3-buckets/) - Written by [VirtueSecurity](https://www.virtuesecurity.com/).
- [AWS PENETRATION TESTING PART 2. S3, IAM, EC2](https://www.virtuesecurity.com/aws-penetration-testing-part-2-s3-iam-ec2/) - Written by [VirtueSecurity](https://www.virtuesecurity.com/).
- [Misadventures in AWS](https://labs.f-secure.com/blog/misadventures-in-aws) - Written by Christian Demko

<span id="azure"></span> \#\#\# Azure

- [Common Azure Security Vulnerabilities and Misconfigurations](https://rhinosecuritylabs.com/cloud-security/common-azure-security-vulnerabilities/) - Written by <span class="citation" data-cites="rhinobenjamin">\[@rhinobenjamin\]</span>(https://twitter.com/rhinobenjamin).
- [Cloud Security Risks (Part 1): Azure CSV Injection Vulnerability](https://rhinosecuritylabs.com/azure/cloud-security-risks-part-1-azure-csv-injection-vulnerability/) - Written by <span class="citation" data-cites="spengietz">\[@spengietz\]</span>(https://twitter.com/spengietz).

<span id="fingerprint"></span> \#\#\# Fingerprint

<span id="sub-domain-enumeration"></span> \#\#\# Sub Domain Enumeration

- [A penetration tester’s guide to sub-domain enumeration](https://blog.appsecco.com/a-penetration-testers-guide-to-sub-domain-enumeration-7d842d5570f6) - Written by [Bharath](https://blog.appsecco.com/@yamakira_).
- [The Art of Subdomain Enumeration](https://blog.sweepatic.com/art-of-subdomain-enumeration/) - Written by [Patrik Hudak](https://blog.sweepatic.com/author/patrik/).

<span id="crypto"></span> \#\#\# Crypto

- [Applied Crypto Hardening](https://bettercrypto.org/) - Written by [The bettercrypto.org Team](https://bettercrypto.org/).
- [What is a Side-Channel Attack ?](https://www.csoonline.com/article/3388647/what-is-a-side-channel-attack-how-these-end-runs-around-encryption-put-everyone-at-risk.html) - Written by [J.M Porup](https://www.csoonline.com/author/J.M.-Porup/).

<span id="web-shell"></span> \#\#\# Web Shell

- [Hunting for Web Shells](https://www.tenable.com/blog/hunting-for-web-shells) - Written by [Jacob Baines](https://www.tenable.com/profile/jacob-baines).
- [Hacking with JSP Shells](https://blog.netspi.com/hacking-with-jsp-shells/) - Written by <span class="citation" data-cites="_nullbind">\[@\_nullbind\]</span>(https://twitter.com/\_nullbind).

<span id="osint"></span> \#\#\# OSINT

- [Hacking Cryptocurrency Miners with OSINT Techniques](https://medium.com/@s3yfullah/hacking-cryptocurrency-miners-with-osint-techniques-677bbb3e0157) - Written by <span class="citation" data-cites="s3yfullah">\[@s3yfullah\]</span>(https://medium.com/<span class="citation" data-cites="s3yfullah">@s3yfullah</span>).
- [OSINT x UCCU Workshop on Open Source Intelligence](https://www.slideshare.net/miaoski/osint-x-uccu-workshop-on-open-source-intelligence) - Written by [Philippe Lin](https://www.slideshare.net/miaoski).
- [102 Deep Dive in the Dark Web OSINT Style Kirby Plessas](https://www.youtube.com/watch?v=fzd3zkAI_o4) - Presented by <span class="citation" data-cites="kirbstr">\[@kirbstr\]</span>(https://twitter.com/kirbstr).
- [The most complete guide to finding anyone’s email](https://www.blurbiz.io/blog/the-most-complete-guide-to-finding-anyones-email) - Written by [Timur Daudpota](https://www.blurbiz.io/).

<span id="dns-rebinding"></span> \#\#\# DNS Rebinding

- [Attacking Private Networks from the Internet with DNS Rebinding](https://medium.com/@brannondorsey/attacking-private-networks-from-the-internet-with-dns-rebinding-ea7098a2d325) - Written by <span class="citation" data-cites="brannondorsey">\[@brannondorsey\]</span>(https://medium.com/<span class="citation" data-cites="brannondorsey">@brannondorsey</span>)
- [Hacking home routers from the Internet](https://medium.com/@radekk/hackers-can-get-access-to-your-home-router-1ddadd12a7a7) - Written by <span class="citation" data-cites="radekk">\[@radekk\]</span>(https://medium.com/<span class="citation" data-cites="radekk">@radekk</span>)

<span id="deserialization"></span> \#\#\# Deserialization

- [What Do WebLogic, WebSphere, JBoss, Jenkins, OpenNMS, and Your Application Have in Common? This Vulnerability.](https://foxglovesecurity.com/2015/11/06/what-do-weblogic-websphere-jboss-jenkins-opennms-and-your-application-have-in-common-this-vulnerability/) - Written by <span class="citation" data-cites="breenmachine">\[@breenmachine\]</span>(https://twitter.com/breenmachine).
- [Attacking .NET deserialization](https://www.youtube.com/watch?v=eDfGpu3iE4Q) - Written by <span class="citation" data-cites="pwntester">\[@pwntester\]</span>(https://twitter.com/pwntester).
- [.NET Roulette: Exploiting Insecure Deserialization in Telerik UI](https://www.youtube.com/watch?v=--6PiuvBGAU) - Written by <span class="citation" data-cites="noperator">\[@noperator\]</span>(https://twitter.com/noperator).
- [How to exploit the DotNetNuke Cookie Deserialization](https://pentest-tools.com/blog/exploit-dotnetnuke-cookie-deserialization/) - Written by [CRISTIAN CORNEA](https://pentest-tools.com/blog/author/pentest-cristian/).
- [HOW TO EXPLOIT LIFERAY CVE-2020-7961 : QUICK JOURNEY TO POC](https://www.synacktiv.com/en/publications/how-to-exploit-liferay-cve-2020-7961-quick-journey-to-poc.html) - Written by <span class="citation" data-cites="synacktiv">\[@synacktiv\]</span>(https://twitter.com/synacktiv).

<span id="oauth"></span> \#\#\# OAuth

- [Introduction to OAuth 2.0 and OpenID Connect](https://pragmaticwebsecurity.com/courses/introduction-oauth-oidc.html) - Written by <span class="citation" data-cites="PhilippeDeRyck">\[@PhilippeDeRyck\]</span>(https://twitter.com/PhilippeDeRyck).
- [What is going on with OAuth 2.0? And why you should not use it for authentication.](https://medium.com/securing/what-is-going-on-with-oauth-2-0-and-why-you-should-not-use-it-for-authentication-5f47597b2611) - Written by <span class="citation" data-cites="damianrusinek">\[@damianrusinek\]</span>(https://medium.com/<span class="citation" data-cites="damianrusinek">@damianrusinek</span>).

<span id="jwt"></span> \#\#\# JWT

- [Hardcoded secrets, unverified tokens, and other common JWT mistakes](https://r2c.dev/blog/2020/hardcoded-secrets-unverified-tokens-and-other-common-jwt-mistakes/) - Written by <span class="citation" data-cites="ermil0v">\[@ermil0v\]</span>(https://twitter.com/ermil0v).

## Evasions

<span id="evasions-xxe"></span> \#\#\# XXE

- [Bypass Fix of OOB XXE Using Different encoding](https://twitter.com/SpiderSec/status/1191375472690528256) - Written by <span class="citation" data-cites="SpiderSec">\[@SpiderSec\]</span>(https://twitter.com/SpiderSec).

<span id="evasions-csp"></span> \#\#\# CSP

- [Any protection against dynamic module import?](https://github.com/w3c/webappsec-csp/issues/243) - Written by <span class="citation" data-cites="shhnjk">\[@shhnjk\]</span>(https://twitter.com/<span class="citation" data-cites="shhnjk">@shhnjk</span>).
- [CSP: bypassing form-action with reflected XSS](https://labs.detectify.com/2016/04/04/csp-bypassing-form-action-with-reflected-xss/) - Written by [Detectify Labs](https://labs.detectify.com/).
- [TWITTER XSS + CSP BYPASS](http://www.paulosyibelo.com/2017/05/twitter-xss-csp-bypass.html) - Written by [Paulos Yibelo](http://www.paulosyibelo.com/).
- [Neatly bypassing CSP](https://lab.wallarm.com/how-to-trick-csp-in-letting-you-run-whatever-you-want-73cb5ff428aa) - Written by [Wallarm](https://wallarm.com/).
- [Evading CSP with DOM-based dangling markup](https://portswigger.net/blog/evading-csp-with-dom-based-dangling-markup) - Written by [portswigger](https://portswigger.net/).
- [GitHub’s CSP journey](https://githubengineering.com/githubs-csp-journey/) - Written by <span class="citation" data-cites="ptoomey3">\[@ptoomey3\]</span>(https://github.com/ptoomey3).
- [GitHub’s post-CSP journey](https://githubengineering.com/githubs-post-csp-journey/) - Written by <span class="citation" data-cites="ptoomey3">\[@ptoomey3\]</span>(https://github.com/ptoomey3).

<span id="evasions-waf"></span> \#\#\# WAF

- [Web Application Firewall (WAF) Evasion Techniques](https://medium.com/secjuice/waf-evasion-techniques-718026d693d8) - Written by <span class="citation" data-cites="secjuice">\[@secjuice\]</span>(https://twitter.com/secjuice).
- [Web Application Firewall (WAF) Evasion Techniques \#2](https://medium.com/secjuice/web-application-firewall-waf-evasion-techniques-2-125995f3e7b0) - Written by <span class="citation" data-cites="secjuice">\[@secjuice\]</span>(https://twitter.com/secjuice).
- [Airbnb – When Bypassing JSON Encoding, XSS Filter, WAF, CSP, and Auditor turns into Eight Vulnerabilities](https://buer.haus/2017/03/08/airbnb-when-bypassing-json-encoding-xss-filter-waf-csp-and-auditor-turns-into-eight-vulnerabilities/) - Written by <span class="citation" data-cites="Brett">\[@Brett Buerhaus\]</span>(https://twitter.com/bbuerhaus).
- [How to bypass libinjection in many WAF/NGWAF](https://medium.com/@d0znpp/how-to-bypass-libinjection-in-many-waf-ngwaf-1e2513453c0f) - Written by <span class="citation" data-cites="d0znpp">\[@d0znpp\]</span>(https://medium.com/<span class="citation" data-cites="d0znpp">@d0znpp</span>).

<span id="evasions-jsmvc"></span> \#\#\# JSMVC

- [JavaScript MVC and Templating Frameworks](http://www.slideshare.net/x00mario/jsmvcomfg-to-sternly-look-at-javascript-mvc-and-templating-frameworks) - Written by [Mario Heiderich](http://www.slideshare.net/x00mario).

<span id="evasions-authentication"></span> \#\#\# Authentication

- [Trend Micro Threat Discovery Appliance - Session Generation Authentication Bypass (CVE-2016-8584)](http://blog.malerisch.net/2017/04/trend-micro-threat-discovery-appliance-session-generation-authentication-bypass-cve-2016-8584.html) - Written by <span class="citation" data-cites="malerisch">\[@malerisch\]</span>(https://twitter.com/malerisch) and <span class="citation" data-cites="steventseeley">\[@steventseeley\]</span>(https://twitter.com/steventseeley).

## Tricks

<span id="tricks-csrf"></span> \#\#\# CSRF

- [Neat tricks to bypass CSRF-protection](https://zhuanlan.zhihu.com/p/32716181) - Written by [Twosecurity](https://twosecurity.io/).
- [Exploiting CSRF on JSON endpoints with Flash and redirects](https://blog.appsecco.com/exploiting-csrf-on-json-endpoints-with-flash-and-redirects-681d4ad6b31b) - Written by <span class="citation" data-cites="riyazwalikar">\[@riyazwalikar\]</span>(https://blog.appsecco.com/<span class="citation" data-cites="riyazwalikar">@riyazwalikar</span>).
- [Stealing CSRF tokens with CSS injection (without iFrames)](https://github.com/dxa4481/cssInjection) - Written by <span class="citation" data-cites="dxa4481">\[@dxa4481\]</span>(https://github.com/dxa4481).
- [Cracking Java’s RNG for CSRF - Javax Faces and Why CSRF Token Randomness Matters](https://blog.securityevaluators.com/cracking-javas-rng-for-csrf-ea9cacd231d2) - Written by <span class="citation" data-cites="rramgattie">\[@rramgattie\]</span>(https://blog.securityevaluators.com/<span class="citation" data-cites="rramgattie">@rramgattie</span>).
- [If HttpOnly You Could Still CSRF… Of CORS you can!](https://medium.com/@_graphx/if-httponly-you-could-still-csrf-of-cors-you-can-5d7ee2c7443) - Written by <span class="citation" data-cites="GraphX">\[@GraphX\]</span>(https://twitter.com/GraphX).

<span id="tricks-clickjacking"></span> \#\#\# Clickjacking

- [Clickjackings in Google worth 14981.7$](https://medium.com/@raushanraj_65039/google-clickjacking-6a04132b918a) - Written by <span class="citation" data-cites="raushanraj_65039">\[@raushanraj_65039\]</span>(https://medium.com/<span class="citation" data-cites="raushanraj_65039">@raushanraj_65039</span>).

<span id="tricks-rce"></span> \#\#\# Remote Code Execution

- [CVE-2019-1306: ARE YOU MY INDEX?](https://www.thezdi.com/blog/2019/10/23/cve-2019-1306-are-you-my-index) - Written by <span class="citation" data-cites="yu5k3">\[@yu5k3\]</span>(https://twitter.com/yu5k3).
- [WebLogic RCE (CVE-2019-2725) Debug Diary](https://paper.seebug.org/910/) - Written by Badcode@Knownsec 404 Team.
- [What Do WebLogic, WebSphere, JBoss, Jenkins, OpenNMS, and Your Application Have in Common? This Vulnerability.](https://foxglovesecurity.com/2015/11/06/what-do-weblogic-websphere-jboss-jenkins-opennms-and-your-application-have-in-common-this-vulnerability/) - Written by <span class="citation" data-cites="breenmachine">\[@breenmachine\]</span>(https://twitter.com/<span class="citation" data-cites="breenmachine">@breenmachine</span>).
- [Exploiting Node.js deserialization bug for Remote Code Execution](https://opsecx.com/index.php/2017/02/08/exploiting-node-js-deserialization-bug-for-remote-code-execution/) - Written by [OpSecX](https://opsecx.com/index.php/author/ajinabraham/).
- [DRUPAL 7.X SERVICES MODULE UNSERIALIZE() TO RCE](https://www.ambionics.io/blog/drupal-services-module-rce) - Written by [Ambionics Security](https://www.ambionics.io/).
- [How we exploited a remote code execution vulnerability in math.js](https://capacitorset.github.io/mathjs/) - Written by <span class="citation" data-cites="capacitorset">\[@capacitorset\]</span>(https://github.com/capacitorset).
- [GitHub Enterprise Remote Code Execution](http://exablue.de/blog/2017-03-15-github-enterprise-remote-code-execution.html) - Written by <span class="citation" data-cites="iblue">\[@iblue\]</span>(https://github.com/iblue).
- [Evil Teacher: Code Injection in Moodle](https://blog.ripstech.com/2018/moodle-remote-code-execution/) - Written by [RIPS Technologies](https://www.ripstech.com/).
- [How I Chained 4 vulnerabilities on GitHub Enterprise, From SSRF Execution Chain to RCE!](http://blog.orange.tw/2017/07/how-i-chained-4-vulnerabilities-on.html) - Written by [Orange](http://blog.orange.tw/).
- [$36k Google App Engine RCE](https://sites.google.com/site/testsitehacking/-36k-google-app-engine-rce) - Written by [Ezequiel Pereira](https://sites.google.com/site/testsitehacking/).
- [Poor RichFaces](https://codewhitesec.blogspot.com/2018/05/poor-richfaces.html) - Written by [CODE WHITE](https://www.code-white.com/).
- [Remote Code Execution on a Facebook server](https://blog.scrt.ch/2018/08/24/remote-code-execution-on-a-facebook-server/) - Written by <span class="citation" data-cites="blaklis_">\[@blaklis\_\]</span>(https://twitter.com/blaklis\_).

<span id="tricks-xss"></span> \#\#\# XSS

- [Exploiting XSS with 20 characters limitation](https://jlajara.gitlab.io/posts/2019/11/30/XSS_20_characters.html) - Written by [Jorge Lajara](https://jlajara.gitlab.io/).
- [Upgrade self XSS to Exploitable XSS an 3 Ways Technic](https://www.hahwul.com/2019/11/upgrade-self-xss-to-exploitable-xss.html) - Written by [HAHWUL](https://www.hahwul.com/).
- [XSS without parentheses and semi-colons](https://portswigger.net/blog/xss-without-parentheses-and-semi-colons) - Written by <span class="citation" data-cites="garethheyes">\[@garethheyes\]</span>(https://twitter.com/garethheyes).
- [XSS-Auditor — the protector of unprotected and the deceiver of protected.](https://medium.com/bugbountywriteup/xss-auditor-the-protector-of-unprotected-f900a5e15b7b) - Written by <span class="citation" data-cites="terjanq">\[@terjanq\]</span>(https://medium.com/<span class="citation" data-cites="terjanq">@terjanq</span>).
- [Query parameter reordering causes redirect page to render unsafe URL](https://hackerone.com/reports/293689) - Written by [kenziy](https://hackerone.com/kenziy).
- [ECMAScript 6 from an Attacker’s Perspective - Breaking Frameworks, Sandboxes, and everything else](http://www.slideshare.net/x00mario/es6-en) - Written by [Mario Heiderich](http://www.slideshare.net/x00mario).
- [How I found a $5,000 Google Maps XSS (by fiddling with Protobuf)](https://medium.com/@marin_m/how-i-found-a-5-000-google-maps-xss-by-fiddling-with-protobuf-963ee0d9caff#.u50nrzhas) - Written by <span class="citation" data-cites="marin_m">\[@marin_m\]</span>(https://medium.com/<span class="citation" data-cites="marin_m">@marin_m</span>).
- [DON’T TRUST THE DOM: BYPASSING XSS MITIGATIONS VIA SCRIPT GADGETS](https://www.blackhat.com/docs/us-17/thursday/us-17-Lekies-Dont-Trust-The-DOM-Bypassing-XSS-Mitigations-Via-Script-Gadgets.pdf) - Written by [Sebastian Lekies](https://twitter.com/slekies), [Krzysztof Kotowicz](https://twitter.com/kkotowicz), and [Eduardo Vela](https://twitter.com/sirdarckcat).
- [Uber XSS via Cookie](http://zhchbin.github.io/2017/08/30/Uber-XSS-via-Cookie/) - Written by [zhchbin](http://zhchbin.github.io/).
- [DOM XSS – auth.uber.com](http://stamone-bug-bounty.blogspot.tw/2017/10/dom-xss-auth14.html) - Written by [StamOne\_](http://stamone-bug-bounty.blogspot.tw/).
- [Stored XSS on Facebook](https://opnsec.com/2018/03/stored-xss-on-facebook/) - Written by [Enguerran Gillier](https://opnsec.com/).
- [XSS in Google Colaboratory + CSP bypass](https://blog.bentkowski.info/2018/06/xss-in-google-colaboratory-csp-bypass.html) - Written by [Michał Bentkowski](https://blog.bentkowski.info/).
- [Another XSS in Google Colaboratory](https://blog.bentkowski.info/2018/09/another-xss-in-google-colaboratory.html) - Written by [Michał Bentkowski](https://blog.bentkowski.info/).
- \[
  is filtered ?\](https://twitter.com/strukt93/status/931586377665331200) - Written by <span class="citation" data-cites="strukt93">\[@strukt93\]</span>(https://twitter.com/strukt93).
- [$20000 Facebook DOM XSS](https://vinothkumar.me/20000-facebook-dom-xss/) - Written by <span class="citation" data-cites="vinodsparrow">\[@vinodsparrow\]</span>(https://twitter.com/vinodsparrow).

<span id="tricks-sql-injection"></span> \#\#\# SQL Injection

- [MySQL Error Based SQL Injection Using EXP](https://www.exploit-db.com/docs/english/37953-mysql-error-based-sql-injection-using-exp.pdf) - Written by <span class="citation" data-cites="osandamalith">\[@osandamalith\]</span>(https://twitter.com/osandamalith).
- [SQL injection in an UPDATE query - a bug bounty story!](http://zombiehelp54.blogspot.jp/2017/02/sql-injection-in-update-query-bug.html) - Written by [Zombiehelp54](http://zombiehelp54.blogspot.jp/).
- [GitHub Enterprise SQL Injection](http://blog.orange.tw/2017/01/bug-bounty-github-enterprise-sql-injection.html) - Written by [Orange](http://blog.orange.tw/).
- [Making a Blind SQL Injection a little less blind](https://medium.com/@tomnomnom/making-a-blind-sql-injection-a-little-less-blind-428dcb614ba8) - Written by [TomNomNom](https://twitter.com/TomNomNom).
- [Red Team Tales 0x01: From MSSQL to RCE](https://www.tarlogic.com/en/blog/red-team-tales-0x01/) - Written by [Tarlogic](https://www.tarlogic.com/en/cybersecurity-blog/).
- [SQL INJECTION AND POSTGRES - AN ADVENTURE TO EVENTUAL RCE](https://pulsesecurity.co.nz/articles/postgres-sqli) - Written by <span class="citation" data-cites="denandz">\[@denandz\]</span>(https://github.com/denandz).

<span id="tricks-nosql-injection"></span> \#\#\# NoSQL Injection

- [GraphQL NoSQL Injection Through JSON Types](http://www.petecorey.com/blog/2017/06/12/graphql-nosql-injection-through-json-types/) - Written by [Pete](http://www.petecorey.com/work/).

<span id="tricks-ftp-injection"></span> \#\#\# FTP Injection

- [XML Out-Of-Band Data Retrieval](https://media.blackhat.com/eu-13/briefings/Osipov/bh-eu-13-XML-data-osipov-slides.pdf) - Written by <span class="citation" data-cites="a66at">\[@a66at\]</span>(https://twitter.com/a66at) and Alexey Osipov.
- [XXE OOB exploitation at Java 1.7+](http://lab.onsec.ru/2014/06/xxe-oob-exploitation-at-java-17.html) - Written by [Ivan Novikov](http://lab.onsec.ru/).

<span id="tricks-xxe"></span> \#\#\# XXE

- [Evil XML with two encodings](https://mohemiv.com/all/evil-xml/) - Written by [Arseniy Sharoglazov](https://mohemiv.com/).
- [XXE in WeChat Pay Sdk ( WeChat leave a backdoor on merchant websites)](http://seclists.org/fulldisclosure/2018/Jul/3) - Written by [Rose Jackcode](https://twitter.com/codeshtool).
- [XML Out-Of-Band Data Retrieval](https://media.blackhat.com/eu-13/briefings/Osipov/bh-eu-13-XML-data-osipov-slides.pdf) - Written by Timur Yunusov and Alexey Osipov.
- [XXE OOB exploitation at Java 1.7+ (2014)](http://lab.onsec.ru/2014/06/xxe-oob-exploitation-at-java-17.html): Exfiltration using FTP protocol - Written by [Ivan Novikov](https://twitter.com/d0znpp/).
- [XXE OOB extracting via HTTP+FTP using single opened port](https://skavans.ru/en/2017/12/02/xxe-oob-extracting-via-httpftp-using-single-opened-port/) - Written by [skavans](https://skavans.ru/).
- [What You Didn’t Know About XML External Entities Attacks](https://2013.appsecusa.org/2013/wp-content/uploads/2013/12/WhatYouDidntKnowAboutXXEAttacks.pdf) - Written by [Timothy D. Morgan](https://twitter.com/ecbftw).
- [Pre-authentication XXE vulnerability in the Services Drupal module](https://www.synacktiv.com/ressources/synacktiv_drupal_xxe_services.pdf) - Written by [Renaud Dubourguais](https://twitter.com/_m0bius).
- [Forcing XXE Reflection through Server Error Messages](https://blog.netspi.com/forcing-xxe-reflection-server-error-messages/) - Written by [Antti Rantasaari](https://blog.netspi.com/author/antti-rantasaari/).
- [Exploiting XXE with local DTD files](https://mohemiv.com/all/exploiting-xxe-with-local-dtd-files/) - Written by [Arseniy Sharoglazov](https://twitter.com/_mohemiv).
- [Automating local DTD discovery for XXE exploitation](https://www.gosecure.net/blog/2019/07/16/automating-local-dtd-discovery-for-xxe-exploitation) - Written by [Philippe Arteau](https://twitter.com/h3xstream).

<span id="tricks-ssrf"></span> \#\#\# SSRF

- [AWS takeover through SSRF in JavaScript](http://10degres.net/aws-takeover-through-ssrf-in-javascript/) - Written by [Gwen](http://10degres.net/).
- [SSRF in Exchange leads to ROOT access in all instances](https://hackerone.com/reports/341876) - Written by <span class="citation" data-cites="0xacb">\[@0xacb\]</span>(https://twitter.com/0xacb).
- [SSRF to ROOT Access](https://hackerone.com/reports/341876) - A $25k bounty for SSRF leading to ROOT Access in all instances by [0xacb](https://hackerone.com/0xacb).
- [PHP SSRF Techniques](https://medium.com/secjuice/php-ssrf-techniques-9d422cb28d51) - Written by <span class="citation" data-cites="themiddleblue">\[@themiddleblue\]</span>(https://medium.com/<span class="citation" data-cites="themiddleblue">@themiddleblue</span>).
- [SSRF in https://imgur.com/vidgif/url](https://hackerone.com/reports/115748) - Written by [aesteral](https://hackerone.com/aesteral).
- [All you need to know about SSRF and how may we write tools to do auto-detect](https://www.auxy.xyz/web%20security/2017/07/06/all-ssrf-knowledge.html) - Written by <span class="citation" data-cites="Auxy233">\[@Auxy233\]</span>(https://twitter.com/Auxy233).
- [A New Era of SSRF - Exploiting URL Parser in Trending Programming Languages!](https://www.blackhat.com/docs/us-17/thursday/us-17-Tsai-A-New-Era-Of-SSRF-Exploiting-URL-Parser-In-Trending-Programming-Languages.pdf) - Written by [Orange](http://blog.orange.tw/).
- [SSRF Tips](http://blog.safebuff.com/2016/07/03/SSRF-Tips/) - Written by [xl7dev](http://blog.safebuff.com/).
- [Into the Borg – SSRF inside Google production network](https://opnsec.com/2018/07/into-the-borg-ssrf-inside-google-production-network/) - Written by [opnsec](https://opnsec.com/).
- [Piercing the Veil: Server Side Request Forgery to NIPRNet access](https://medium.com/bugbountywriteup/piercing-the-veil-server-side-request-forgery-to-niprnet-access-c358fd5e249a) - Written by [Alyssa Herrera](https://medium.com/@alyssa.o.herrera).

<span id="tricks-web-cache-poisoning"></span> \#\#\# Web Cache Poisoning

- [Bypassing Web Cache Poisoning Countermeasures](https://portswigger.net/blog/bypassing-web-cache-poisoning-countermeasures) - Written by <span class="citation" data-cites="albinowax">\[@albinowax\]</span>(https://twitter.com/albinowax).
- [Cache poisoning and other dirty tricks](https://lab.wallarm.com/cache-poisoning-and-other-dirty-tricks-120468f1053f) - Written by [Wallarm](https://wallarm.com/).

<span id="tricks-header-injection"></span> \#\#\# Header Injection

- [Java/Python FTP Injections Allow for Firewall Bypass](http://blog.blindspotsecurity.com/2017/02/advisory-javapython-ftp-injections.html) - Written by [Timothy Morgan](https://plus.google.com/105917618099766831589).

<span id="tricks-url"></span> \#\#\# URL

- [Some Problems Of URLs](https://noncombatant.org/2017/11/07/problems-of-urls/) - Written by [Chris Palmer](https://noncombatant.org/about/).
- [Phishing with Unicode Domains](https://www.xudongz.com/blog/2017/idn-phishing/) - Written by [Xudong Zheng](https://www.xudongz.com/).
- [Unicode Domains are bad and you should feel bad for supporting them](https://www.vgrsec.com/post20170219.html) - Written by [VRGSEC](https://www.vgrsec.com/).
- [\[dev.twitter.com\] XSS](http://blog.blackfan.ru/2017/09/devtwittercom-xss.html) - Written by [Sergey Bobrov](http://blog.blackfan.ru/).

<span id="tricks-deserialization"></span> \#\#\# Deserialization

- [ASP.NET resource files (.RESX) and deserialisation issues](https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2018/august/aspnet-resource-files-resx-and-deserialisation-issues/) - Written by <span class="citation" data-cites="irsdl">\[@irsdl\]</span>(https://twitter.com/irsdl).

<span id="tricks-oauth"></span> \#\#\# OAuth

- [Facebook OAuth Framework Vulnerability](https://www.amolbaikar.com/facebook-oauth-framework-vulnerability/) - Written by <span class="citation" data-cites="AmolBaikar">\[@AmolBaikar\]</span>(https://twitter.com/AmolBaikar).

<span id="tricks-others"></span> \#\#\# Others

- [How I hacked Google’s bug tracking system itself for $15,600 in bounties](https://medium.com/free-code-camp/messing-with-the-google-buganizer-system-for-15-600-in-bounties-58f86cc9f9a5) - Written by <span class="citation" data-cites="alex.birsan">\[@alex.birsan\]</span>(https://medium.com/<span class="citation" data-cites="alex.birsan">@alex.birsan</span>).
- [Some Tricks From My Secret Group](https://www.leavesongs.com/SHARE/some-tricks-from-my-secret-group.html) - Written by [phithon](https://www.leavesongs.com/).
- [Inducing DNS Leaks in Onion Web Services](https://github.com/epidemics-scepticism/writing/blob/master/onion-dns-leaks.md) - Written by <span class="citation" data-cites="epidemics-scepticism">\[@epidemics-scepticism\]</span>(https://github.com/epidemics-scepticism).
- [Stored XSS, and SSRF in Google using the Dataset Publishing Language](https://s1gnalcha0s.github.io/dspl/2018/03/07/Stored-XSS-and-SSRF-Google.html) - Written by <span class="citation" data-cites="signalchaos">\[@signalchaos\]</span>(https://twitter.com/signalchaos).

## Browser Exploitation

### Frontend (like SOP bypass, URL spoofing, and something like that)

- [The world of Site Isolation and compromised renderer](https://speakerdeck.com/shhnjk/the-world-of-site-isolation-and-compromised-renderer) - Written by <span class="citation" data-cites="shhnjk">\[@shhnjk\]</span>(https://twitter.com/shhnjk).
- [The Cookie Monster in Your Browsers](https://speakerdeck.com/filedescriptor/the-cookie-monster-in-your-browsers) - Written by <span class="citation" data-cites="filedescriptor">\[@filedescriptor\]</span>(https://twitter.com/filedescriptor).
- [Bypassing Mobile Browser Security For Fun And Profit](https://www.blackhat.com/docs/asia-16/materials/asia-16-Baloch-Bypassing-Browser-Security-Policies-For-Fun-And-Profit-wp.pdf) - Written by <span class="citation" data-cites="rafaybaloch">\[@rafaybaloch\]</span>(https://twitter.com/<span class="citation" data-cites="rafaybaloch">@rafaybaloch</span>).
- [The inception bar: a new phishing method](https://jameshfisher.com/2019/04/27/the-inception-bar-a-new-phishing-method/) - Written by [jameshfisher](https://jameshfisher.com/).
- [JSON hijacking for the modern web](http://blog.portswigger.net/2016/11/json-hijacking-for-modern-web.html) - Written by [portswigger](https://portswigger.net/).
- [IE11 Information disclosure - local file detection](https://www.facebook.com/ExploitWareLabs/photos/a.361854183878462.84544.338832389513975/1378579648872572/?type=3&theater) - Written by James Lee.
- [SOP bypass / UXSS – Stealing Credentials Pretty Fast (Edge)](https://www.brokenbrowser.com/sop-bypass-uxss-stealing-credentials-pretty-fast/) - Written by [Manuel](https://twitter.com/magicmac2000).
- [Особенности Safari в client-side атаках](https://bo0om.ru/safari-client-side) - Written by [Bo0oM](https://bo0om.ru/author/admin).
- [How do we Stop Spilling the Beans Across Origins?](https://docs.google.com/document/d/1cbL-X0kV_tQ5rL8XJ3lXkV-j0pt_CfTu5ZSzYrncPDc/) - Written by [aaj at google.com](aaj@google.com) and [mkwst at google.com](mkwst@google.com).
- [Setting arbitrary request headers in Chromium via CRLF injection](https://blog.bentkowski.info/2018/06/setting-arbitrary-request-headers-in.html) - Written by [Michał Bentkowski](https://blog.bentkowski.info/).
- [I’m harvesting credit card numbers and passwords from your site. Here’s how.](https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5) - Written by [David Gilbertson](https://hackernoon.com/@david.gilbertson).
- [Sending arbitrary IPC messages via overriding Function.prototype.apply](https://hackerone.com/reports/188086) - Written by <span class="citation" data-cites="kinugawamasato">\[@kinugawamasato\]</span>(https://twitter.com/kinugawamasato).
- [Take Advantage of Out-of-Scope Domains in Bug Bounty Programs](https://ahussam.me/Take-Advantage-of-Out-of-Scope-Domains-in-Bug-Bounty/) - Written by <span class="citation" data-cites="Abdulahhusam">\[@Abdulahhusam\]</span>(https://twitter.com/Abdulahhusam).

### Backend (core of Browser implementation, and often refers to C or C++ part)

- [Breaking UC Browser](https://habr.com/en/company/drweb/blog/452076/) - Written by [Доктор Веб](https://www.drweb.ru/).
- [Attacking JavaScript Engines - A case study of JavaScriptCore and CVE-2016-4622](http://www.phrack.org/papers/attacking_javascript_engines.html) - Written by [phrack@saelo.net](phrack@saelo.net).
- [Three roads lead to Rome](http://blogs.360.cn/360safe/2016/11/29/three-roads-lead-to-rome-2/) - Written by <span class="citation" data-cites="holynop">\[@holynop\]</span>(https://twitter.com/holynop).
- [Exploiting a V8 OOB write.](https://halbecaf.com/2017/05/24/exploiting-a-v8-oob-write/) - Written by <span class="citation" data-cites="halbecaf">\[@halbecaf\]</span>(https://twitter.com/halbecaf).
- [SSD Advisory – Chrome Turbofan Remote Code Execution](https://blogs.securiteam.com/index.php/archives/3379) - Written by [SecuriTeam Secure Disclosure (SSD)](https://blogs.securiteam.com/).
- [Look Mom, I don’t use Shellcode - Browser Exploitation Case Study for Internet Explorer 11](https://labs.bluefrostsecurity.de/files/Look_Mom_I_Dont_Use_Shellcode-WP.pdf) - Written by <span class="citation" data-cites="moritzj">\[@moritzj\]</span>(http://twitter.com/moritzj).
- [PUSHING WEBKIT’S BUTTONS WITH A MOBILE PWN2OWN EXPLOIT](https://www.zerodayinitiative.com/blog/2018/2/12/pushing-webkits-buttons-with-a-mobile-pwn2own-exploit) - Written by <span class="citation" data-cites="wanderingglitch">\[@wanderingglitch\]</span>(https://twitter.com/wanderingglitch).
- [A Methodical Approach to Browser Exploitation](https://blog.ret2.io/2018/06/05/pwn2own-2018-exploit-development/) - Written by [RET2 SYSTEMS, INC](https://blog.ret2.io/).
- [CVE-2017-2446 or JSC::JSGlobalObject::isHavingABadTime.](https://doar-e.github.io/blog/2018/07/14/cve-2017-2446-or-jscjsglobalobjectishavingabadtime/) - Written by [Diary of a reverse-engineer](https://doar-e.github.io/).
- [CLEANLY ESCAPING THE CHROME SANDBOX](https://theori.io/research/escaping-chrome-sandbox) - Written by <span class="citation" data-cites="tjbecker_">\[@tjbecker\_\]</span>(https://twitter.com/tjbecker\_).
- [A Methodical Approach to Browser Exploitation](https://blog.ret2.io/2018/06/05/pwn2own-2018-exploit-development/) - Written by <span class="citation" data-cites="PatrickBiernat">\[@PatrickBiernat\]</span>(https://twitter.com/PatrickBiernat), <span class="citation" data-cites="gaasedelen">\[@gaasedelen\]</span>(https://twitter.com/gaasedelen) and <span class="citation" data-cites="itszn13">\[@itszn13\]</span>(https://twitter.com/itszn13).

## PoCs

<span id="pocs-database"></span> \#\#\# Database

- [js-vuln-db](https://github.com/tunz/js-vuln-db) - Collection of JavaScript engine CVEs with PoCs by <span class="citation" data-cites="tunz">\[@tunz\]</span>(https://github.com/tunz).
- [awesome-cve-poc](https://github.com/qazbnm456/awesome-cve-poc) - Curated list of CVE PoCs by <span class="citation" data-cites="qazbnm456">\[@qazbnm456\]</span>(https://github.com/qazbnm456).
- [Some-PoC-oR-ExP](https://github.com/coffeehb/Some-PoC-oR-ExP) - 各种漏洞 poc、Exp 的收集或编写 by <span class="citation" data-cites="coffeehb">\[@coffeehb\]</span>(https://github.com/coffeehb).
- [uxss-db](https://github.com/Metnew/uxss-db) - Collection of UXSS CVEs with PoCs by <span class="citation" data-cites="Metnew">\[@Metnew\]</span>(https://github.com/Metnew).
- [SPLOITUS](https://sploitus.com/) - Exploits & Tools Search Engine by <span class="citation" data-cites="i_bo0om">\[@i_bo0om\]</span>(https://twitter.com/i\_bo0om).
- [Exploit Database](https://www.exploit-db.com/) - ultimate archive of Exploits, Shellcode, and Security Papers by [Offensive Security](https://www.offensive-security.com/).

## Cheetsheets

- [XSS Cheat Sheet - 2018 Edition](https://leanpub.com/xss) - Written by <span class="citation" data-cites="brutelogic">\[@brutelogic\]</span>(https://twitter.com/brutelogic).
- [Capture the Flag CheatSheet](https://github.com/uppusaikiran/awesome-ctf-cheatsheet) - Written by <span class="citation" data-cites="uppusaikiran">\[@uppusaikiran\]</span>(https://github.com/uppusaikiran).

## Tools

<span id="tools-auditing"></span> \#\#\# Auditing

- [prowler](https://github.com/Alfresco/prowler) - Tool for AWS security assessment, auditing and hardening by <span class="citation" data-cites="Alfresco">\[@Alfresco\]</span>(https://github.com/Alfresco).
- [slurp](https://github.com/hehnope/slurp) - Evaluate the security of S3 buckets by <span class="citation" data-cites="hehnope">\[@hehnope\]</span>(https://github.com/hehnope).
- [A2SV](https://github.com/hahwul/a2sv) - Auto Scanning to SSL Vulnerability by <span class="citation" data-cites="hahwul">\[@hahwul\]</span>(https://github.com/hahwul).

<span id="tools-command-injection"></span> \#\#\# Command Injection

- [commix](https://github.com/commixproject/commix) - Automated All-in-One OS command injection and exploitation tool by <span class="citation" data-cites="commixproject">\[@commixproject\]</span>(https://github.com/commixproject).

<span id="tools-reconnaissance"></span> \#\#\# Reconnaissance

<span id="tools-osint"></span> \#\#\#\# OSINT - Open-Source Intelligence

- [Shodan](https://www.shodan.io/) - Shodan is the world’s first search engine for Internet-connected devices by <span class="citation" data-cites="shodanhq">\[@shodanhq\]</span>(https://twitter.com/shodanhq).
- [Censys](https://censys.io/) - Censys is a search engine that allows computer scientists to ask questions about the devices and networks that compose the Internet by [University of Michigan](https://umich.edu/).
- [urlscan.io](https://urlscan.io/) - Service which analyses websites and the resources they request by <span class="citation" data-cites="heipei">\[@heipei\]</span>(https://twitter.com/heipei).
- [ZoomEye](https://www.zoomeye.org/) - Cyberspace Search Engine by <span class="citation" data-cites="zoomeye_team">\[@zoomeye_team\]</span>(https://twitter.com/zoomeye\_team).
- [FOFA](https://fofa.so/?locale=en) - Cyberspace Search Engine by [BAIMAOHUI](http://baimaohui.net/).
- [NSFOCUS](https://nti.nsfocus.com/) - THREAT INTELLIGENCE PORTAL by NSFOCUS GLOBAL.
- [Photon](https://github.com/s0md3v/Photon) - Incredibly fast crawler designed for OSINT by <span class="citation" data-cites="s0md3v">\[@s0md3v\]</span>(https://github.com/s0md3v).
- [FOCA](https://github.com/ElevenPaths/FOCA) - FOCA (Fingerprinting Organizations with Collected Archives) is a tool used mainly to find metadata and hidden information in the documents its scans by [ElevenPaths](https://www.elevenpaths.com/index.html).
- [SpiderFoot](http://www.spiderfoot.net/) - Open source footprinting and intelligence-gathering tool by <span class="citation" data-cites="binarypool">\[@binarypool\]</span>(https://twitter.com/binarypool).
- [xray](https://github.com/evilsocket/xray) - XRay is a tool for recon, mapping and OSINT gathering from public networks by <span class="citation" data-cites="evilsocket">\[@evilsocket\]</span>(https://github.com/evilsocket).
- [gitrob](https://github.com/michenriksen/Gitrob) - Reconnaissance tool for GitHub organizations by <span class="citation" data-cites="michenriksen">\[@michenriksen\]</span>(https://github.com/michenriksen).
- [GSIL](https://github.com/FeeiCN/GSIL) - Github Sensitive Information Leakage（Github 敏感信息泄露）by <span class="citation" data-cites="FeeiCN">\[@FeeiCN\]</span>(https://github.com/FeeiCN).
- [raven](https://github.com/0x09AL/raven) - raven is a Linkedin information gathering tool that can be used by pentesters to gather information about an organization employees using Linkedin by <span class="citation" data-cites="0x09AL">\[@0x09AL\]</span>(https://github.com/0x09AL).
- [ReconDog](https://github.com/s0md3v/ReconDog) - Reconnaissance Swiss Army Knife by <span class="citation" data-cites="s0md3v">\[@s0md3v\]</span>(https://github.com/s0md3v).
- [Databases - start.me](https://start.me/p/QRENnO/databases) - Various databases which you can use for your OSINT research by <span class="citation" data-cites="technisette">\[@technisette\]</span>(https://twitter.com/technisette).
- [peoplefindThor](https://peoplefindthor.dk/) - the easy way to find people on Facebook by [postkassen](mailto:postkassen@oejvind.dk?subject=peoplefindthor.dk%20comments).
- [tinfoleak](https://github.com/vaguileradiaz/tinfoleak) - The most complete open-source tool for Twitter intelligence analysis by <span class="citation" data-cites="vaguileradiaz">\[@vaguileradiaz\]</span>(https://github.com/vaguileradiaz).
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - High performance offensive security tool for reconnaissance and vulnerability scanning by <span class="citation" data-cites="evyatarmeged">\[@evyatarmeged\]</span>(https://github.com/evyatarmeged).
- [Social Mapper](https://github.com/SpiderLabs/social_mapper) - Social Media Enumeration & Correlation Tool by Jacob Wilkin(Greenwolf) by <span class="citation" data-cites="SpiderLabs">\[@SpiderLabs\]</span>(https://github.com/SpiderLabs).
- [espi0n/Dockerfiles](https://github.com/espi0n/Dockerfiles) - Dockerfiles for various OSINT tools by <span class="citation" data-cites="espi0n">\[@espi0n\]</span>(https://github.com/espi0n).

<span id="tools-sub-domain-enumeration"></span> \#\#\#\# Sub Domain Enumeration

- [Sublist3r](https://github.com/aboul3la/Sublist3r) - Sublist3r is a multi-threaded sub-domain enumeration tool for penetration testers by <span class="citation" data-cites="aboul3la">\[@aboul3la\]</span>(https://github.com/aboul3la).
- [EyeWitness](https://github.com/ChrisTruncer/EyeWitness) - EyeWitness is designed to take screenshots of websites, provide some server header info, and identify default credentials if possible by <span class="citation" data-cites="ChrisTruncer">\[@ChrisTruncer\]</span>(https://github.com/ChrisTruncer).
- [subDomainsBrute](https://github.com/lijiejie/subDomainsBrute) - A simple and fast sub domain brute tool for pentesters by <span class="citation" data-cites="lijiejie">\[@lijiejie\]</span>(https://github.com/lijiejie).
- [AQUATONE](https://github.com/michenriksen/aquatone) - Tool for Domain Flyovers by <span class="citation" data-cites="michenriksen">\[@michenriksen\]</span>(https://github.com/michenriksen).
- [domain_analyzer](https://github.com/eldraco/domain_analyzer) - Analyze the security of any domain by finding all the information possible by <span class="citation" data-cites="eldraco">\[@eldraco\]</span>(https://github.com/eldraco).
- [VirusTotal domain information](https://www.virustotal.com/en/documentation/searching/#getting-domain-information) - Searching for domain information by [VirusTotal](https://www.virustotal.com/).
- [Certificate Transparency](https://github.com/google/certificate-transparency) - Google’s Certificate Transparency project fixes several structural flaws in the SSL certificate system by <span class="citation" data-cites="google">\[@google\]</span>(https://github.com/google).
- [Certificate Search](https://crt.sh/) - Enter an Identity (Domain Name, Organization Name, etc), a Certificate Fingerprint (SHA-1 or SHA-256) or a crt.sh ID to search certificate(s) by <span class="citation" data-cites="crtsh">\[@crtsh\]</span>(https://github.com/crtsh).
- [GSDF](https://github.com/We5ter/GSDF) - Domain searcher named GoogleSSLdomainFinder by <span class="citation" data-cites="We5ter">\[@We5ter\]</span>(https://github.com/We5ter).

<span id="tools-code-generating"></span> \#\#\# Code Generating

- [VWGen](https://github.com/qazbnm456/VWGen) - Vulnerable Web applications Generator by <span class="citation" data-cites="qazbnm456">\[@qazbnm456\]</span>(https://github.com/qazbnm456).

<span id="tools-fuzzing"></span> \#\#\# Fuzzing

- [wfuzz](https://github.com/xmendez/wfuzz) - Web application bruteforcer by <span class="citation" data-cites="xmendez">\[@xmendez\]</span>(https://github.com/xmendez).
- [charsetinspect](https://github.com/hack-all-the-things/charsetinspect) - Script that inspects multi-byte character sets looking for characters with specific user-defined properties by <span class="citation" data-cites="hack-all-the-things">\[@hack-all-the-things\]</span>(https://github.com/hack-all-the-things).
- [IPObfuscator](https://github.com/OsandaMalith/IPObfuscator) - Simple tool to convert the IP to a DWORD IP by <span class="citation" data-cites="OsandaMalith">\[@OsandaMalith\]</span>(https://github.com/OsandaMalith).
- [domato](https://github.com/google/domato) - DOM fuzzer by <span class="citation" data-cites="google">\[@google\]</span>(https://github.com/google).
- [FuzzDB](https://github.com/fuzzdb-project/fuzzdb) - Dictionary of attack patterns and primitives for black-box application fault injection and resource discovery.
- [dirhunt](https://github.com/Nekmo/dirhunt) - Web crawler optimized for searching and analyzing the directory structure of a site by <span class="citation" data-cites="nekmo">\[@nekmo\]</span>(https://github.com/Nekmo).
- [ssltest](https://www.ssllabs.com/ssltest/) - Online service that performs a deep analysis of the configuration of any SSL web server on the public internet. Provided by [Qualys SSL Labs](https://www.ssllabs.com).
- [fuzz.txt](https://github.com/Bo0oM/fuzz.txt) - Potentially dangerous files by <span class="citation" data-cites="Bo0oM">\[@Bo0oM\]</span>(https://github.com/Bo0oM).

<span id="tools-scanning"></span> \#\#\# Scanning

- [wpscan](https://github.com/wpscanteam/wpscan) - WPScan is a black box WordPress vulnerability scanner by <span class="citation" data-cites="wpscanteam">\[@wpscanteam\]</span>(https://github.com/wpscanteam).
- [JoomlaScan](https://github.com/drego85/JoomlaScan) - Free software to find the components installed in Joomla CMS, built out of the ashes of Joomscan by <span class="citation" data-cites="drego85">\[@drego85\]</span>(https://github.com/drego85).
- [WAScan](https://github.com/m4ll0k/WAScan) - Is an open source web application security scanner that uses “black-box” method, created by <span class="citation" data-cites="m4ll0k">\[@m4ll0k\]</span>(https://github.com/m4ll0k).
- [Nuclei](https://github.com/projectdiscovery/nuclei) - Nuclei is a fast tool for configurable targeted scanning based on templates offering massive extensibility and ease of use by <span class="citation" data-cites="projectdiscovery">\[@projectdiscovery\]</span>(https://github.com/projectdiscovery).

<span id="tools-penetration-testing"></span> \#\#\# Penetration Testing

- [Burp Suite](https://portswigger.net/burp/) - Burp Suite is an integrated platform for performing security testing of web applications by [portswigger](https://portswigger.net/).
- [TIDoS-Framework](https://github.com/theInfectedDrake/TIDoS-Framework) - A comprehensive web application audit framework to cover up everything from Reconnaissance and OSINT to Vulnerability Analysis by <span class="citation" data-cites="_tID">\[@\_tID\]</span>(https://github.com/theInfectedDrake).
- [Astra](https://github.com/flipkart-incubator/astra) - Automated Security Testing For REST API’s by <span class="citation" data-cites="flipkart-incubator">\[@flipkart-incubator\]</span>(https://github.com/flipkart-incubator).
- [aws_pwn](https://github.com/dagrz/aws_pwn) - A collection of AWS penetration testing junk by <span class="citation" data-cites="dagrz">\[@dagrz\]</span>(https://github.com/dagrz).
- [grayhatwarfare](https://buckets.grayhatwarfare.com/) - Public buckets by [grayhatwarfare](http://www.grayhatwarfare.com/).

<span id="tools-offensive"></span> \#\#\# Offensive

<span id="tools-xss"></span> \#\#\#\# XSS - Cross-Site Scripting

- [beef](https://github.com/beefproject/beef) - The Browser Exploitation Framework Project by [beefproject](https://beefproject.com).
- [JShell](https://github.com/s0md3v/JShell) - Get a JavaScript shell with XSS by <span class="citation" data-cites="s0md3v">\[@s0md3v\]</span>(https://github.com/s0md3v).
- [XSStrike](https://github.com/s0md3v/XSStrike) - XSStrike is a program which can fuzz and bruteforce parameters for XSS. It can also detect and bypass WAFs by <span class="citation" data-cites="s0md3v">\[@s0md3v\]</span>(https://github.com/s0md3v).
- [xssor2](https://github.com/evilcos/xssor2) - XSS’OR - Hack with JavaScript by <span class="citation" data-cites="evilcos">\[@evilcos\]</span>(https://github.com/evilcos).
- [csp evaluator](https://csper.io/evaluator) - A tool for evaluating content-security-policies by [Csper](http://csper.io).

<span id="tools-sql-injection"></span> \#\#\#\# SQL Injection

- [sqlmap](https://github.com/sqlmapproject/sqlmap) - Automatic SQL injection and database takeover tool.

<span id="tools-template-injection"></span> \#\#\#\# Template Injection

- [tplmap](https://github.com/epinna/tplmap) - Code and Server-Side Template Injection Detection and Exploitation Tool by <span class="citation" data-cites="epinna">\[@epinna\]</span>(https://github.com/epinna).

<span id="tools-xxe"></span> \#\#\#\# XXE

- [dtd-finder](https://github.com/GoSecure/dtd-finder) - List DTDs and generate XXE payloads using those local DTDs by <span class="citation" data-cites="GoSecure">\[@GoSecure\]</span>(https://github.com/GoSecure).

<span id="tools-csrf"></span> \#\#\#\# Cross Site Request Forgery

- [XSRFProbe](https://github.com/0xInfection/XSRFProbe) - The Prime CSRF Audit & Exploitation Toolkit by <span class="citation" data-cites="0xInfection">\[@0xInfection\]</span>(https://github.com/0xinfection).

<span id="tools-ssrf"></span> \#\#\#\# Server-Side Request Forgery

- [Open redirect/SSRF payload generator](https://tools.intigriti.io/redirector/) - Open redirect/SSRF payload generator by [intigriti](https://www.intigriti.com/).

<span id="tools-leaking"></span> \#\#\# Leaking

- [HTTPLeaks](https://github.com/cure53/HTTPLeaks) - All possible ways, a website can leak HTTP requests by <span class="citation" data-cites="cure53">\[@cure53\]</span>(https://github.com/cure53).
- [dvcs-ripper](https://github.com/kost/dvcs-ripper) - Rip web accessible (distributed) version control systems: SVN/GIT/HG… by <span class="citation" data-cites="kost">\[@kost\]</span>(https://github.com/kost).
- [DVCS-Pillage](https://github.com/evilpacket/DVCS-Pillage) - Pillage web accessible GIT, HG and BZR repositories by <span class="citation" data-cites="evilpacket">\[@evilpacket\]</span>(https://github.com/evilpacket).
- [GitMiner](https://github.com/UnkL4b/GitMiner) - Tool for advanced mining for content on Github by <span class="citation" data-cites="UnkL4b">\[@UnkL4b\]</span>(https://github.com/UnkL4b).
- [gitleaks](https://github.com/zricethezav/gitleaks) - Searches full repo history for secrets and keys by <span class="citation" data-cites="zricethezav">\[@zricethezav\]</span>(https://github.com/zricethezav).
- [CSS-Keylogging](https://github.com/maxchehab/CSS-Keylogging) - Chrome extension and Express server that exploits keylogging abilities of CSS by <span class="citation" data-cites="maxchehab">\[@maxchehab\]</span>(https://github.com/maxchehab).
- [pwngitmanager](https://github.com/allyshka/pwngitmanager) - Git manager for pentesters by <span class="citation" data-cites="allyshka">\[@allyshka\]</span>(https://github.com/allyshka).
- [snallygaster](https://github.com/hannob/snallygaster) - Tool to scan for secret files on HTTP servers by <span class="citation" data-cites="hannob">\[@hannob\]</span>(https://github.com/hannob).
- [LinkFinder](https://github.com/GerbenJavado/LinkFinder) - Python script that finds endpoints in JavaScript files by <span class="citation" data-cites="GerbenJavado">\[@GerbenJavado\]</span>(https://github.com/GerbenJavado).

<span id="tools-detecting"></span> \#\#\# Detecting

- [sqlchop](https://sqlchop.chaitin.cn/) - SQL injection detection engine by [chaitin](http://chaitin.com).
- [xsschop](https://xsschop.chaitin.cn/) - XSS detection engine by [chaitin](http://chaitin.com).
- [retire.js](https://github.com/RetireJS/retire.js) - Scanner detecting the use of JavaScript libraries with known vulnerabilities by <span class="citation" data-cites="RetireJS">\[@RetireJS\]</span>(https://github.com/RetireJS).
- [malware-jail](https://github.com/HynekPetrak/malware-jail) - Sandbox for semi-automatic Javascript malware analysis, deobfuscation and payload extraction by <span class="citation" data-cites="HynekPetrak">\[@HynekPetrak\]</span>(https://github.com/HynekPetrak).
- [repo-supervisor](https://github.com/auth0/repo-supervisor) - Scan your code for security misconfiguration, search for passwords and secrets.
- [bXSS](https://github.com/LewisArdern/bXSS) - bXSS is a simple Blind XSS application adapted from [cure53.de/m](https://cure53.de/m) by <span class="citation" data-cites="LewisArdern">\[@LewisArdern\]</span>(https://github.com/LewisArdern).
- [OpenRASP](https://github.com/baidu/openrasp) - An open source RASP solution actively maintained by Baidu Inc. With context-aware detection algorithm the project achieved nearly no false positives. And less than 3% performance reduction is observed under heavy server load.
- [GuardRails](https://github.com/apps/guardrails) - A GitHub App that provides security feedback in Pull Requests.

<span id="tools-preventing"></span> \#\#\# Preventing

- [DOMPurify](https://github.com/cure53/DOMPurify) - DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG by [Cure53](https://cure53.de/).
- [js-xss](https://github.com/leizongmin/js-xss) - Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist by <span class="citation" data-cites="leizongmin">\[@leizongmin\]</span>(https://github.com/leizongmin).
- [Acra](https://github.com/cossacklabs/acra) - Client-side encryption engine for SQL databases, with strong selective encryption, SQL injections prevention and intrusion detection by <span class="citation" data-cites="cossacklabs">\[@cossacklabs\]</span>(https://www.cossacklabs.com/).
- [Csper](https://csper.io) - A set of tools for building/evaluating/monitoring content-security-policy to prevent/detect cross site scripting by [Csper](https://csper.io).

<span id="tools-proxy"></span> \#\#\# Proxy

- [Charles](https://www.charlesproxy.com/) - HTTP proxy / HTTP monitor / Reverse Proxy that enables a developer to view all of the HTTP and SSL / HTTPS traffic between their machine and the Internet.
- [mitmproxy](https://github.com/mitmproxy/mitmproxy) - Interactive TLS-capable intercepting HTTP proxy for penetration testers and software developers by <span class="citation" data-cites="mitmproxy">\[@mitmproxy\]</span>(https://github.com/mitmproxy).

<span id="tools-webshell"></span> \#\#\# Webshell

- [nano](https://github.com/s0md3v/nano) - Family of code golfed PHP shells by <span class="citation" data-cites="s0md3v">\[@s0md3v\]</span>(https://github.com/s0md3v).
- [webshell](https://github.com/tennc/webshell) - This is a webshell open source project by <span class="citation" data-cites="tennc">\[@tennc\]</span>(https://github.com/tennc).
- [Weevely](https://github.com/epinna/weevely3) - Weaponized web shell by <span class="citation" data-cites="epinna">\[@epinna\]</span>(https://github.com/epinna).
- [Webshell-Sniper](https://github.com/WangYihang/Webshell-Sniper) - Manage your website via terminal by <span class="citation" data-cites="WangYihang">\[@WangYihang\]</span>(https://github.com/WangYihang).
- [Reverse-Shell-Manager](https://github.com/WangYihang/Reverse-Shell-Manager) - Reverse Shell Manager via Terminal <span class="citation" data-cites="WangYihang">\[@WangYihang\]</span>(https://github.com/WangYihang).
- [reverse-shell](https://github.com/lukechilds/reverse-shell) - Reverse Shell as a Service by <span class="citation" data-cites="lukechilds">\[@lukechilds\]</span>(https://github.com/lukechilds).
- [PhpSploit](https://github.com/nil0x42/phpsploit) - Full-featured C2 framework which silently persists on webserver via evil PHP oneliner by <span class="citation" data-cites="nil0x42">\[@nil0x42\]</span>(https://github.com/nil0x42).

<span id="tools-disassembler"></span> \#\#\# Disassembler

- [plasma](https://github.com/plasma-disassembler/plasma) - Plasma is an interactive disassembler for x86/ARM/MIPS by <span class="citation" data-cites="plasma-disassembler">\[@plasma-disassembler\]</span>(https://github.com/plasma-disassembler).
- [radare2](https://github.com/radare/radare2) - Unix-like reverse engineering framework and commandline tools by <span class="citation" data-cites="radare">\[@radare\]</span>(https://github.com/radare).
- [Iaitō](https://github.com/hteso/iaito) - Qt and C++ GUI for radare2 reverse engineering framework by <span class="citation" data-cites="hteso">\[@hteso\]</span>(https://github.com/hteso).

<span id="tools-decompiler"></span> \#\#\# Decompiler

- [CFR](http://www.benf.org/other/cfr/) - Another java decompiler by <span class="citation" data-cites="LeeAtBenf">\[@LeeAtBenf\]</span>(https://twitter.com/LeeAtBenf).

<span id="tools-dns-rebinding"></span> \#\#\# DNS Rebinding

- [DNS Rebind Toolkit](https://github.com/brannondorsey/dns-rebind-toolkit) - DNS Rebind Toolkit is a frontend JavaScript framework for developing DNS Rebinding exploits against vulnerable hosts and services on a local area network (LAN) by <span class="citation" data-cites="brannondorsey">\[@brannondorsey\]</span>(https://github.com/brannondorsey)
- [dref](https://github.com/mwrlabs/dref) - DNS Rebinding Exploitation Framework. Dref does the heavy-lifting for DNS rebinding by <span class="citation" data-cites="mwrlabs">\[@mwrlabs\]</span>(https://github.com/mwrlabs)
- [Singularity of Origin](https://github.com/nccgroup/singularity) - It includes the necessary components to rebind the IP address of the attack server DNS name to the target machine’s IP address and to serve attack payloads to exploit vulnerable software on the target machine by <span class="citation" data-cites="nccgroup">\[@nccgroup\]</span>(https://github.com/nccgroup)
- [Whonow DNS Server](https://github.com/brannondorsey/whonow) - A malicious DNS server for executing DNS Rebinding attacks on the fly by <span class="citation" data-cites="brannondorsey">\[@brannondorsey\]</span>(https://github.com/brannondorsey)

<span id="tools-others"></span> \#\#\# Others

- [Dnslogger](https://wiki.skullsecurity.org/index.php?title=Dnslogger) - DNS Logger by <span class="citation" data-cites="iagox86">\[@iagox86\]</span>(https://github.com/iagox86).
- [CyberChef](https://github.com/gchq/CyberChef) - The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis - by <span class="citation" data-cites="GCHQ">\[@GCHQ\]</span>(https://github.com/gchq).
- [ntlm_challenger](https://github.com/b17zr/ntlm_challenger) - Parse NTLM over HTTP challenge messages by <span class="citation" data-cites="b17zr">\[@b17zr\]</span>(https://github.com/b17zr).
- [cefdebug](https://github.com/taviso/cefdebug) - Minimal code to connect to a CEF debugger by <span class="citation" data-cites="taviso">\[@taviso\]</span>(https://github.com/taviso).
- [ctftool](https://github.com/taviso/ctftool) - Interactive CTF Exploration Tool by <span class="citation" data-cites="taviso">\[@taviso\]</span>(https://github.com/taviso).

## Social Engineering Database

- [haveibeenpwned](https://haveibeenpwned.com/) - Check if you have an account that has been compromised in a data breach by [Troy Hunt](https://www.troyhunt.com/).

## Blogs

- [Orange](http://blog.orange.tw/) - Taiwan’s talented web penetrator.
- [leavesongs](https://www.leavesongs.com/) - China’s talented web penetrator.
- [James Kettle](http://albinowax.skeletonscribe.net/) - Head of Research at [PortSwigger Web Security](https://portswigger.net/).
- [Broken Browser](https://www.brokenbrowser.com/) - Fun with Browser Vulnerabilities.
- [Scrutiny](https://datarift.blogspot.tw/) - Internet Security through Web Browsers by Dhiraj Mishra.
- [BRETT BUERHAUS](https://buer.haus/) - Vulnerability disclosures and rambles on application security.
- [n0tr00t](https://www.n0tr00t.com/) - ~\# n0tr00t Security Team.
- [OpnSec](https://opnsec.com/) - Open Mind Security!
- [RIPS Technologies](https://blog.ripstech.com/tags/security/) - Write-ups for PHP vulnerabilities.
- [0Day Labs](http://blog.0daylabs.com/) - Awesome bug-bounty and challenges writeups.
- [Blog of Osanda](https://osandamalith.com/) - Security Researching and Reverse Engineering.

## Twitter Users

- <span class="citation" data-cites="HackwithGitHub">\[@HackwithGitHub\]</span>(https://twitter.com/HackwithGithub) - Initiative to showcase open source hacking tools for hackers and pentesters
- <span class="citation" data-cites="filedescriptor">\[@filedescriptor\]</span>(https://twitter.com/filedescriptor) - Active penetrator often tweets and writes useful articles
- <span class="citation" data-cites="cure53berlin">\[@cure53berlin\]</span>(https://twitter.com/cure53berlin) - [Cure53](https://cure53.de/) is a German cybersecurity firm.
- <span class="citation" data-cites="XssPayloads">\[@XssPayloads\]</span>(https://twitter.com/XssPayloads) - The wonderland of JavaScript unexpected usages, and more.
- <span class="citation" data-cites="kinugawamasato">\[@kinugawamasato\]</span>(https://twitter.com/kinugawamasato) - Japanese web penetrator.
- <span class="citation" data-cites="h3xstream">\[@h3xstream\]</span>(https://twitter.com/h3xstream/) - Security Researcher, interested in web security, crypto, pentest, static analysis but most of all, samy is my hero.
- <span class="citation" data-cites="garethheyes">\[@garethheyes\]</span>(https://twitter.com/garethheyes) - English web penetrator.
- <span class="citation" data-cites="hasegawayosuke">\[@hasegawayosuke\]</span>(https://twitter.com/hasegawayosuke) - Japanese javascript security researcher.
- <span class="citation" data-cites="shhnjk">\[@shhnjk\]</span>(https://twitter.com/shhnjk) - Web and Browsers Security Researcher.

## Practices

<span id="practices-application"></span> \#\#\# Application

- [OWASP Juice Shop](https://github.com/bkimminich/juice-shop) - Probably the most modern and sophisticated insecure web application - Written by <span class="citation" data-cites="bkimminich">\[@bkimminich\]</span>(https://github.com/bkimminich) and the <span class="citation" data-cites="owasp_juiceshop">\[@owasp_juiceshop\]</span>(https://twitter.com/owasp\_juiceshop) team.
- [BadLibrary](https://github.com/SecureSkyTechnology/BadLibrary) - Vulnerable web application for training - Written by <span class="citation" data-cites="SecureSkyTechnology">\[@SecureSkyTechnology\]</span>(https://github.com/SecureSkyTechnology).
- [Hackxor](http://hackxor.net/) - Realistic web application hacking game - Written by <span class="citation" data-cites="albinowax">\[@albinowax\]</span>(https://twitter.com/albinowax).
- [SELinux Game](http://selinuxgame.org/) - Learn SELinux by doing. Solve Puzzles, show skillz - Written by <span class="citation" data-cites="selinuxgame">\[@selinuxgame\]</span>(https://twitter.com/selinuxgame).
- [Portswigger Web Security Academy](https://portswigger.net/web-security) - Free trainings and labs - Written by [PortSwigger](https://portswigger.net/).

<span id="practices-aws"></span> \#\#\# AWS

- [FLAWS](http://flaws.cloud/) - Amazon AWS CTF challenge - Written by <span class="citation" data-cites="0xdabbad00">\[@0xdabbad00\]</span>(https://twitter.com/0xdabbad00).
- [CloudGoat](https://github.com/RhinoSecurityLabs/cloudgoat) - Rhino Security Labs’ “Vulnerable by Design” AWS infrastructure setup tool - Written by <span class="citation" data-cites="RhinoSecurityLabs">\[@RhinoSecurityLabs\]</span>(https://github.com/RhinoSecurityLabs).

<span id="practices-xss"></span> \#\#\# XSS

- [XSS game](https://xss-game.appspot.com/) - Google XSS Challenge - Written by Google.
- [prompt(1) to win](http://prompt.ml/) - Complex 16-Level XSS Challenge held in summer 2014 (+4 Hidden Levels) - Written by <span class="citation" data-cites="cure53">\[@cure53\]</span>(https://github.com/cure53).
- [alert(1) to win](https://alf.nu/alert1) - Series of XSS challenges - Written by <span class="citation" data-cites="steike">\[@steike\]</span>(https://twitter.com/steike).
- [XSS Challenges](http://xss-quiz.int21h.jp/) - Series of XSS challenges - Written by yamagata21.

<span id="practices-modsecurity"></span> \#\#\# ModSecurity / OWASP ModSecurity Core Rule Set

- [ModSecurity / OWASP ModSecurity Core Rule Set](https://www.netnea.com/cms/apache-tutorials/) - Series of tutorials to install, configure and tune ModSecurity and the Core Rule Set - Written by <span class="citation" data-cites="ChrFolini">\[@ChrFolini\]</span>(https://twitter.com/ChrFolini).

## Community

- [Reddit](https://www.reddit.com/r/websecurity/)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/security)

## Miscellaneous

- [awesome-bug-bounty](https://github.com/djadmin/awesome-bug-bounty) - Comprehensive curated list of available Bug Bounty & Disclosure Programs and write-ups by <span class="citation" data-cites="djadmin">\[@djadmin\]</span>(https://github.com/djadmin).
- [bug-bounty-reference](https://github.com/ngalongc/bug-bounty-reference) - List of bug bounty write-up that is categorized by the bug nature by <span class="citation" data-cites="ngalongc">\[@ngalongc\]</span>(https://github.com/ngalongc).
- [Google VRP and Unicorns](https://sites.google.com/site/bughunteruniversity/behind-the-scenes/presentations/google-vrp-and-unicorns) - Written by [Daniel Stelter-Gliese](https://www.linkedin.com/in/daniel-stelter-gliese-170a70a2/).
- [Brute Forcing Your Facebook Email and Phone Number](http://pwndizzle.blogspot.jp/2014/02/brute-forcing-your-facebook-email-and.html) - Written by [PwnDizzle](http://pwndizzle.blogspot.jp/).
- [Pentest + Exploit dev Cheatsheet wallpaper](http://i.imgur.com/Mr9pvq9.jpg) - Penetration Testing and Exploit Dev CheatSheet.
- [The Definitive Security Data Science and Machine Learning Guide](http://www.covert.io/the-definitive-security-datascience-and-machinelearning-guide/) - Written by JASON TROS.
- [EQGRP](https://github.com/x0rz/EQGRP) - Decrypted content of eqgrp-auction-file.tar.xz by <span class="citation" data-cites="x0rz">\[@x0rz\]</span>(https://github.com/x0rz).
- [notes](https://github.com/ChALkeR/notes) - Some public notes by <span class="citation" data-cites="ChALkeR">\[@ChALkeR\]</span>(https://github.com/ChALkeR).
- [A glimpse into GitHub’s Bug Bounty workflow](https://githubengineering.com/githubs-bug-bounty-workflow/) - Written by <span class="citation" data-cites="gregose">\[@gregose\]</span>(https://github.com/gregose).
- [Cybersecurity Campaign Playbook](https://www.belfercenter.org/CyberPlaybook) - Written by [Belfer Center for Science and International Affairs](https://www.belfercenter.org/).
- [Infosec_Reference](https://github.com/rmusser01/Infosec_Reference) - Information Security Reference That Doesn’t Suck by <span class="citation" data-cites="rmusser01">\[@rmusser01\]</span>(https://github.com/rmusser01).
- [Internet of Things Scanner](http://iotscanner.bullguard.com/) - Check if your internet-connected devices at home are public on Shodan by [BullGuard](https://www.bullguard.com/).
- [The Bug Hunters Methodology v2.1](https://docs.google.com/presentation/d/1VpRT8dFyTaFpQa9jhehtmGaC7TqQniMSYbUdlHN6VrY/edit?usp=sharing) - Written by <span class="citation" data-cites="jhaddix">\[@jhaddix\]</span>(https://twitter.com/jhaddix).
- [$7.5k Google services mix-up](https://sites.google.com/site/testsitehacking/-7-5k-Google-services-mix-up) - Written by [Ezequiel Pereira](https://sites.google.com/site/testsitehacking/).
- [How I exploited ACME TLS-SNI-01 issuing Let’s Encrypt SSL-certs for any domain using shared hosting](https://labs.detectify.com/2018/01/12/how-i-exploited-acme-tls-sni-01-issuing-lets-encrypt-ssl-certs-for-any-domain-using-shared-hosting/) - Written by <span class="citation" data-cites="fransrosen">\[@fransrosen\]</span>(https://twitter.com/fransrosen).
- [TL:DR: VPN leaks users’ IPs via WebRTC. I’ve tested seventy VPN providers and 16 of them leaks users’ IPs via WebRTC (23%)](https://voidsec.com/vpn-leak/) - Written by [voidsec](https://voidsec.com/).
- [Escape and Evasion Egressing Restricted Networks](https://www.optiv.com/blog/escape-and-evasion-egressing-restricted-networks) - Written by [Chris Patten, Tom Steele](info@optiv.com).
- [Be careful what you copy: Invisibly inserting usernames into text with Zero-Width Characters](https://medium.com/@umpox/be-careful-what-you-copy-invisibly-inserting-usernames-into-text-with-zero-width-characters-18b4e6f17b66) - Written by <span class="citation" data-cites="umpox">\[@umpox\]</span>(https://medium.com/<span class="citation" data-cites="umpox">@umpox</span>).
- [Domato Fuzzer’s Generation Engine Internals](https://www.sigpwn.io/blog/2018/4/14/domato-fuzzers-generation-engine-internals) - Written by [sigpwn](https://www.sigpwn.io/).
- [CSS Is So Overpowered It Can Deanonymize Facebook Users](https://www.evonide.com/side-channel-attacking-browsers-through-css3-features/) - Written by [Ruslan Habalov](https://www.evonide.com/).
- [Introduction to Web Application Security](https://www.slideshare.net/nragupathy/introduction-to-web-application-security-blackhoodie-us-2018) - Written by <span class="citation" data-cites="itsC0rg1">\[@itsC0rg1\]</span>(https://twitter.com/itsC0rg1), <span class="citation" data-cites="jmkeads">\[@jmkeads\]</span>(https://twitter.com/jmkeads) and <span class="citation" data-cites="matir">\[@matir\]</span>(https://twitter.com/matir).
- [Finding The Real Origin IPs Hiding Behind CloudFlare or TOR](https://www.secjuice.com/finding-real-ips-of-origin-servers-behind-cloudflare-or-tor/) - Written by [Paul Dannewitz](https://www.secjuice.com/author/paul-dannewitz/).
- [Why Facebook’s api starts with a for loop](https://dev.to/antogarand/why-facebooks-api-starts-with-a-for-loop-1eob) - Written by <span class="citation" data-cites="AntoGarand">\[@AntoGarand\]</span>(https://twitter.com/AntoGarand).
- [How I could have stolen your photos from Google - my first 3 bug bounty writeups](https://blog.avatao.com/How-I-could-steal-your-photos-from-Google/) - Written by <span class="citation" data-cites="gergoturcsanyi">\[@gergoturcsanyi\]</span>(https://twitter.com/gergoturcsanyi).
- [An example why NAT is NOT security](https://0day.work/an-example-why-nat-is-not-security/) - Written by <span class="citation" data-cites="0daywork">\[@0daywork\]</span>(https://twitter.com/<span class="citation" data-cites="0daywork">@0daywork</span>).
- [WEB APPLICATION PENETRATION TESTING NOTES](https://techvomit.net/web-application-penetration-testing-notes/) - Written by [Jayson](https://techvomit.net/).
- [Hacking with a Heads Up Display](https://segment.com/blog/hacking-with-a-heads-up-display/) - Written by [David Scrobonia](https://segment.com/blog/authors/david-scrobonia/).
- [Alexa Top 1 Million Security - Hacking the Big Ones](https://slashcrypto.org/data/itsecx2018.pdf) - Written by <span class="citation" data-cites="slashcrypto">\[@slashcrypto\]</span>(https://twitter.com/slashcrypto).
- [The bug bounty program that changed my life](http://10degres.net/the-bug-bounty-program-that-changed-my-life/) - Written by [Gwen](http://10degres.net/).
- [List of bug bounty writeups](https://pentester.land/list-of-bug-bounty-writeups.html) - Written by [Mariem](https://pentester.land/).
- [Implications of Loading .NET Assemblies](https://threatvector.cylance.com/en_us/home/implications-of-loading-net-assemblies.html) - Written by [Brian Wallace](https://threatvector.cylance.com/en_us/contributors/brian-wallace.html).
- [WCTF2019: Gyotaku The Flag](https://westerns.tokyo/wctf2019-gtf/wctf2019-gtf-slides.pdf) - Written by <span class="citation" data-cites="t0nk42">\[@t0nk42\]</span>(https://twitter.com/t0nk42).
- [How we abused Slack’s TURN servers to gain access to internal services](https://www.rtcsec.com/2020/04/01-slack-webrtc-turn-compromise/) - Written by <span class="citation" data-cites="sandrogauci">\[@sandrogauci\]</span>(https://twitter.com/sandrogauci).
- [DOS File Path Magic Tricks](https://medium.com/walmartlabs/dos-file-path-magic-tricks-5eda7a7a85fa) - Written by <span class="citation" data-cites="clr2of8">\[@clr2of8\]</span>(https://medium.com/<span class="citation" data-cites="clr2of8">@clr2of8</span>).
- [How I got my first big bounty payout with Tesla](https://medium.com/heck-the-packet/how-i-got-my-first-big-bounty-payout-with-tesla-8d28b520162d) - Written by <span class="citation" data-cites="cj.fairhead">\[@cj.fairhead\]</span>(https://medium.com/<span class="citation" data-cites="cj.fairhead">@cj.fairhead</span>).

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, <span class="citation" data-cites="qazbnm456">\[@qazbnm456\]</span>(https://qazbnm456.github.io/) has waived all copyright and related or neighboring rights to this work.

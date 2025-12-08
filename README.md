This is build using React !!
On the prrocess of procees of cteating the cmd of installation the cmd used mentioned below !!

To use this project you first need to instaal parcel packeges and 
then run
/** npm run dev **/ for server
/** npm run build **/ for build server.

/** installing git **/-------------------------------------------------------------------------------------------------------------------

PS C:\Users\saket\program\ndev> git init
Initialized empty Git repository in C:/Users/saket/program/ndev/.git/
PS C:\Users\saket\program\ndev> git branch -M  main
PS C:\Users\saket\program\ndev> git add.\
git: 'add.\' is not a git command. See 'git --help'.
PS C:\Users\saket\program\ndev> git add. 
git: 'add.' is not a git command. See 'git --help'.

The most similar command is
        add
PS C:\Users\saket\program\ndev> git add .
PS C:\Users\saket\program\ndev> git commit - "ndev chapter 1" 
error: pathspec '-' did not match any file(s) known to git
error: pathspec 'ndev chapter 1' did not match any file(s) known to git
PS C:\Users\saket\program\ndev> git commit -m  "ndev chapter 1" 
[main (root-commit) 79f1ef6] ndev chapter 1
 1 file changed, 27 insertions(+)
 create mode 100644 index.html
PS C:\Users\saket\program\ndev> git remote add origin https://github.com/SAKETHSIRX/nDev.git
PS C:\Users\saket\program\ndev> git push origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 769 bytes | 769.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/SAKETHSIRX/nDev.git
 * [new branch]      main -> main


 /** installing npm **/-----------------------------------------------------------------------------------------------------------


PS C:\Users\saket\program\ndev> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (ndev)
version: (1.0.0)                                                                                                                               
description: learing basics from nDev !!
entry point: (index.js)                                                                                                                        
test command: jest                                                                                                                             
git repository: (https://github.com/SAKETHSIRX/nDev.git)                                                                                       
keywords:
author: saketh
license: (ISC)                                                                                                                                 
About to write to C:\Users\saket\program\ndev\package.json:

{
  "name": "ndev",
  "version": "1.0.0",
  "description": "learing basics from nDev !!",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/SAKETHSIRX/nDev.git"
  },
  "author": "saketh",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/SAKETHSIRX/nDev/issues"
  },
  "homepage": "https://github.com/SAKETHSIRX/nDev#readme"
}


Is this OK? (yes)


/** installed parcel **/------------------------------------------------------------------------------------------------------

PS C:\Users\saket\program\ndev> npm install -D parcel

added 126 packages, and audited 127 packages in 2m

71 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\saket\program\ndev> 

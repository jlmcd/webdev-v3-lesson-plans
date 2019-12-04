# 1.1 Orientation, Environment Setup, Command Line, Git/GitHub

## Orientation
   * Slides: https://slides.com/jonmcd/orientation-immersive-4#/
      * These slides will need to be changed to reflect the current instructional staff and student success team.
   * Get to know you activity
      * The last slide is a "get to know you" activity. This can be anything, but a common activity is to have each student find 10 unique things in common with 10 different people (1 per person).
   * This is when we set high expectations for the duration of the time at DevMountain. I make sure the students know they will be expected to put in at least 3 hours every day after class to solidify concepts and prepare for the next day's new content.

## Environment Setup
   * Install Git for everyone
      * Windows users should install GitBash (https://gitforwindows.org/)
      * Once Windows users have completed their setup with GitBash, have everyone run `git -v`.
      * Mac users will see a popup asking to install some XCode tools. Have them click install.
   * Install Node/NPM for everyone
      * https://nodejs.org/
      * Install the LTS version
   * Install VSCode for everyone
      * https://code.visualstudio.com/
      * VSCode is one of many _text editors_. Other popular text editors for use in Web Development include Atom and Sublime Text. Encourage students to use VSCode while they are here because of its extensions and for the sake of consistency.
      * Mac users should install `code` in path (`cmd + shift + p`, then type in `shell`)
      * _Optional:_ Show students how they can change themes in VSCode.
   * Create repl.it accounts
   * Show the structure of the LMS
      * Make sure they know pre-class work is required before the lecture each day.
   * Show the Q
      * Have students ask questions and show them what you see on your screen.
      * Make sure students understand that the Q is for help in the following situations:
         1. In the middle of a lecture, if your code is broken.
         2. In the afternoon if you have been stuck on an issue for  20-30 minutes.
            * We don't want students to be stuck on a problem for hours at a time, but we do want them to try and solve their own problems.
            * Students should understand that we want them to learn _how_ to learn.
            * Students should first reach for Google and their notes or reference code before reaching for mentor help.

## Command Line
   * Every operating system comes with a **shell**, a program which takes commands from the keyboard and delivers them to the operating system to perform.
      * The default shell in Windows is PowerShell.
      * The default shell in Mac is now Z Shell (or just Zsh)
      * The commands we use in Web Development are for bash. Zsh will accept the same commands as Bash, but PowerShell will not! That's why we installed GitBash on Windows machines earlier.
   * Have students open their terminals: _Terminal_ on a Mac, and _GitBash_ on Windows.
   * Demonstrate each command in an isolated fashion:
      * `pwd` displays the path from the root of your drive to where you currently are.
      * `ls` lists out any files and folders located in the directory you are currently in.
      * `cd` changes directories to whatever path you want, relative to where you currently are.
         * The **tab** key. Make a big deal out of the **tab** key and encourage students to use its autocomplete feature in order to have accurate file and path names.
      * `clear` literally clears the console.
      * `mkdir` creates a new directory
      * `touch` creates a new file
      * `rm` deletes a file
      * `rm -rf` recursively deletes a folder and all of its contents.
         * Tell the students to be extremely careful with this one! I usually tell a few horror stories of people I know who have run rm -rf in the wrong place and had to reformat their computers.
   * Now let's practice! We're going to create the file structure that I will use for all of my lectures at DevMountain.
      1. `mkdir ~/devmtn` (explain that the ~ means the root of your computer.)
      2. `cd ~/devmtn` and then `mkdir unit-1`
      3. `cd unit-1`
      4. `touch` any files you would like (we'll be deleting them later)
      5. How do I back out of the folder I'm in? `cd ..`
      6. How do I check that it really worked? What is my current directory? `pwd`
      7. Now that we're back in `~/devmtn`, create another folder called _test_.
      8. `cd` into _test_.
      9. `touch` some more files. Anything you want.
      10. How do I get back into my _unit-1_ folder? `cd ../unit-1`
      11. We don't need these files we made earlier. Let's delete them: `rm <filenames separated by spaces>`
      12. Now I want to delete the _test_ folder we made. First `cd` out one level (`cd ..`).
      13. Try `rm test`. It doesn't work! Why?
      14. We need to use `rm -rf test` because _test_ is a folder and it can contain other files. The computer won't know what to do with those other files if we just delete the folder and nothing else. So it doesn't let us do it unless we add the flag `-rf` which deletes everything inside the folder as well.


## Git/GitHub

### Git
   * Git is a _Version Control System_. It keeps track of our files' history and any changes we make to them. It's kind of like the Time Machine feature of MacOS.
   * The important Git commands are:
      * `git init` creates a new git _repository_ to the directory you are in. Without a git repository initialized in that directory, none of the other git commands will work.
      * `git status` checks the status of your git repository. If there are any files that are new or have changes to them, you will see them listed here.
      * `git add` is followed by any file names you want to add to your git history. It moves files to a "staging" zone and tracks any files that were previously untracked.
         * You _can_ specify file names individually, but often we want to just add any files that are new or changed. We can do this with `git add .` where the dot represents "everything".
      * `git commit` requires a flag `-m` followed by a message in quotes about what you're committing. It adds anything that has been "staged" with `git add` to the actual git history.
   * I show students the typical pattern, and have them make changes of their own to some files we create:
      1. `cd ~/devmtn/unit-1`
      2. `mkdir learning-git`
      3. `cd learning-git`
      4. `touch` whatever files you want.
      5. `git status`. What does it say? We need to create a git repository in this folder!
      6. `git init`
      7. run `git status` again to see how it changes.
      8. `git add .`
      9. `git commit` without a message to show what happens! 
         * We don't want to mess with this Vim editor, so we can exit it with `:qa`
      10. `git commit -m 'first commit'`
      11. `git status` again to see what it looks like when nothing has changed.
      12. Open the folder in VSCode with the command `code .`
      13. Edit some files and save them.
      14. Show the Version Control Tab in VSCode and how it now has a number next to it. This is the number of files our git repository sees changes to. It should only be 1 or 2 (or however many files you edited)
      15. Open the terminal in VSCode using the shortcut `ctrl + ~` (the same for both Mac and Windows).
      16. Show that when we open the terminal in VSCode it automatically starts us in the folder we are working in. `pwd` to check.
      17. `git status`
      18. `git add .`
      19. `git commit -m 'made some changes'`
      20. The number next to the Version Control Tab in VSCode should go away.
      21. If you want to and there's time, show them how they can do the same adding and committing pattern with the GUI in the Version Control Tab.

### GitHub

* GitHub is a giant collection of public source code. It's a way to store and share our own code. 
   * _NOTE:_ Make sure students know GitHub, unlike Git, is NOT a Version Control System, but is just a place to store our git repositories in the cloud.
* There are a few different ways to create a project in GitHub. The project can either start there, or it can start on the local machine.
   * Have everyone create accounts on GitHub if they haven't already.
   * We will need our computers to understand who we are in GitHub, so connect your account to the computer with these commands:
      * `git config --global user.email`
      * `git config --global user.name`
      * It will ask for their password as well. Let students know that they won't see anything they type in the password field. This is how the command line handles passwords.

   #### Method 1 (Starting on GitHub)

   1. Create a new repository on GitHub. Call it anything you want. 
   2. Clone it down to our local computers with the command `git clone` followed by the url from GitHub.
      * Make note that _when you clone a new repository, it makes a new folder for you!_
      * `cd` into that folder.
   3. Add some files, including: 
      * `index.js`
      * `app.js`
      * `index.html`
      * `.gitignore`
         * Now is a good time to talk about the _.gitignore_ file. Any file names we place inside the _.gitignore_ file will not be tracked or added to our git history.
         * Add `app.js` to the _.gitignore_ file.
   4. Run `git status` to show that the _app.js_ file is not being tracked.
   5. `add` and `commit` the files.
   6. `git status` should show that our local code is "ahead" of our remote code (the code hosted on GitHub)
   7. To update our code on GitHub, we need to "push" our local code up to the cloud with `git push`
   8. `git status` again to see that our branch is now "even" with the remote branch.

#### Method 2 (Starting locally)

   1. Create a new folder in the `~/devmtn/unit-1` folder.
   2. Add three files:
      * index.html
      * config.js
      * .gitignore
   3. Add `config.js` to the _.gitignore_ file.
   4. `git init` - explain
   5. `git status`
   6. `git add (-A or . or path/to/files)`
   7. `git status`
   8. `git commit -m "commit message"`
   9. Show what happens if you don't type -m "message"
   10. type `:q` to exit VIM.
   11. `git status`
   12. If there's time, you can repeat these step to show that you don't have to push after each commit. There can be multiple commits between pushes)

         (Go to github)

   13. Create a new repo
   14. Copy the url of the repo

         (In command line)

   15. `git remote add https://github.com/url/that/you/copied`
   16. `git push -u origin master`
   17. Point out the difference here
      * What is `-u` doing
      * Why origin master
      * Why didn't we have to do this last time?
   18. `git status`

#### Forking a project
   * Go to the project that you want to fork on github. (Mini project would be good for this)
      * https://github.com/DevMountain/learn-git
   * Fork the project.
   * Clone new fork to your computer
   * Work on it just like #1
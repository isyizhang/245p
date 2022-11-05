This is Exercise ZERO. Pun intended. This might be nothing new for you at this point, so this is a good way to earn some extra points. If this is something new for you, awesome, we all have to start somewhere!

Before we would start doing all sorts of magic with HTML, CSS, JavaScript, it is better if we setup a way how we can learn from our mistakes, and where we can store some knowledge for the long run. 

We could do this in many ways, like setting up a Wiki, but I think the best way is to just simply collect all artifacts related to this class in a repository that is handled through Git and GitHub. Here is a short Wiki:

__*What's a repository?*__ 🧐

A repository contains all of your project's files and each file's revision history. You can discuss and manage your project's work within the repository.

A repository is often just simply called, a repo.

__*What is a commit?*__ 🧐

Committing essentially means that you add/modify/remove a file or some content of a file from your folder and you give it to Git for safe-keeping. 

The easiest way to grasp what a commit really is: let's say you work on some complex code. You want to make sure you can review the content later. You might save it out to a note, but eh, that's not a sophisticated solution. Thus, you can just add (commit) this code to your Git. It will be remembered for you forever, with some sort of a license plate (commit hash) and with the date you committed the code.

__*Is Git the same thing as GitHub?*__ 🧐

Noooooooooooooo. 😱 Git is a software that you download to your computer and that essentially keeps track of changes of your files in destination (local) folder. If you want to  save something you can commit so it is remembered "forever". Thus, you can always go back to your commits if you messed up something in your current code.

### Thus, our job now is to:
1. Install Git.
2. Create a repository.
3. Prepping to commit & commit.
4. Register a GitHub account (if you don't have one).
5. Push your local repository to GitHub.
6. Share the love to get credit for your work.

### Let's go step-by-step

### 1. Install Git.

You can download the executable for macOS, Windows, and Linux/UNIX here: https://git-scm.com/downloads to an external site.

Now, open your Terminal/CLI and configure Git.

First, you need to specify your username:

`git config --global user.name “replace the part within the quotes with your chosen name”`

Then, you need to specify your email:

`git config --global user.email "replace the part within the quotes with your email address"`

### 2. Create a repository.

Now, make a folder somewhere on your computer where you are going to store the code for this class. After creating this folder, add another folder where you are going to store the files of this exercise. I would probably call the folder

`245p`

and this exercise would be called

`exercise0`

as a folder. 

Then, navigate to the 245p folder in your Terminal/CLI (if you do not know how to do this here is a short article for it: [CLI Bash Navigation](https://learn.co/lessons/cli-essentials-bash-navigation).

Now, we need to transform our 245p folder into a git folder in order for Git to be able to keep track of the changes. Thus, once you are in the folder just do:

`git init`

Now, even if you restart your computer, Git will keep track of changes in this folder. No need to initialize Git in this folder anymore.

### 3. Prepping to commit & commit!

You can open now your favorite IDE, and save the content of this page (this exact description) with a file name

`exercise0.md`

Once you are done, you can navigate back to your repo in your Terminal/CLI and tell Git with the following command to mark this file saved:

`git add exercise0/exercise0.md`

This command essentially marks the exercise0.md file in the exercise0 folder. Later, for the sake of simplicity you can also mark all files for saving:

`git add .`

For later, it is also important to remember that some folders can be skipped from being remembered. So let's set that up right now! In order to do this, we need to add a file in your favorite IDE to the 245p folder. This file should be called .gitignore. In each line of this file we can add folder names, specific files that we want to skip from being remembered. Later, we certainly want to add node_modules when we are dealing with React. Remember this. 😉

AAAAAND NOOOOOOOW WE SHALL COMMIT! (This might be funny/lame based on how you read this, but hey I'm excited that I can share some knowledge with you!)

So, we are actually saving the marked files to the local repository with the following command:

`git commit -m "commit message"`

-m means message, and you can replace the commit message between the double-quotes. The commit message should be short, preferably less than 150 characters. Always give nice commit messages. Don't be like me. Here is a good guide how to write concise commit messages (50-78 character): http://who-t.blogspot.com/2009/12/on-commit-messages.html

Now, you should have your file in a safe Git Heaven! But, what if we actually loose our computer or it gets stolen? Or you need to prove that you coded all these things to someone who is on the other side of the planet? You certainly won't send a pigeon with a flash drive. You should use a service that saves your files safely online, in a so-called remote location! This is where GitHub comes into the picture! GitHub defines itself as "a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere". Thus, in order to really keep our commit safe, and independent from our computer we can just upload every commit to GitHub.

### 4. Register a GitHub account (if you don't have one).

Head over to https://github.com/ to an external site. and click "Sign Up". Follow the prompts! You should choose the FREE plan (that should do for our simple purposes)! Once you registered, make sure to confirm your email address.

### 5. Push your local repository to GitHub.

In order to do the 5th step, we need to create a repository on GitHub. Look for the green button that says "New", and give the repository name 245p. Keep your repo private. Make sure to add a README file, once you selected all the options, click on "Create repository". 

Voila! You got your remote repo now. This repo now has a unique link, you can access this by clicking on the green "Code" button and copy out the HTTPS link. It will look like this:

`https://github.com/davidlinecepter/do_not_use_this.git`

Now, you can go back to your Terminal/CLI and hook up Git with GitHub. Basically, we want to sync the remote repo with the local repo. In order to do this navigate to your local folder in your Terminal/CLI and and use the following command:

`git remote add origin https://github.com/davidlinecepter/do_not_use_this.git`

Once this is done we can push to the remote! When we want to push for the first time EVER we need the following prompt:

`git push -u origin master`

master indicates the the name of the branch on our local Git and that we are going to push to GitHub. Watch out, by default GitHub uses __main__ as a main brain. You can reset the main branch on GitHub to master. The __-u__ means that we are doing everything upstream meaning that this will be a default path to upload everything when we want to push something to the remote later. 

It is possible that when you first want to push, GitHub will ask your username and password. Provide those details. Even when that happens it is possible that you won't be able to push, because GitHub does not allow anymore (as of August, 2021) to push with password. In order to overcome this issue, you have to create a personal token. Then, you need to remember that token and that should be used in the password field. The access token can be generated by following this path: Profile (top right corner of GitHub's UI) → Settings → Developer Settings (last menu point on the left menu bar) → Personal Access Tokens (again, on the left menu bar) → Generate New Token → provide a note (like exercise folder access token), an expiration date, and select the scopes (everything checked in the repo category should be fine) → Generate Token (on the bottom of the page). → Remember the token.

Now, you can use the token instead of your password when you want to push to GitHub.

### 6. Share the love to get credit for your work.

Change the content of a file (preferably the one that you need to get credit for).

Then, track the changes by Git:

`git add .`

Then, commit:

`git commit -m "commit message"`

Then, push it up to the remote:

`git push`

YAAAAS! SO COOL! You should have your content up on the remote now.

SOOOO! In order to get credit for your work, you need to do two things:

1. Upload the folder of __exercise0__ to Canvas.
2. Invite the TA(s) to your repo, here is how you can do it:
    1. Ask the username of the TA(s).
    2. Navigate to your repository's link on Github.
    3. Click on Settings.
    4. In the left sidebar, click Collaborators.
    5. Under Collaborators, start typing the collaborator's username.
    6. Select the collaborator's username from the drop-down menu.
    7. Click Add collaborator.

🏴‍☠️🏴‍☠️🏴‍☠️Nice job!🏴‍☠️🏴‍☠️🏴‍☠️

If you have questions do not hesitate to reach out to the TA(s).

You learned how to initiate a local Git project, upload it to GitHub and also how to share your code with others.

Git and GitHub/other remote source control management/collaboration software are immensely important in the daily life of a developer, so I hope you will keep this description for yourself.

Fun fact: did you know that Git was conceived by Linus Torvalds, the person who also started Linux?! 😱 See more:
https://www.youtube.com/watch?v=4XpnKHJAok8.

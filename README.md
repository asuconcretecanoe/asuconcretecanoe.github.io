# ASU Concrete Canoe Website: Welcome!
Welcome to ASU Concrete Canoe's organization website! We hope you enjoy the information you find here, and I encourage you to get involved in making the canoe or assisting with the upkeep of this site. Enoy!

## How to update this website
Hello, future webmaster. This website should be very simple to update, as the only things necessary to change are some images and csv files! As long as the format of the names and the locations remains the same, updates are automatic.

### Updating the team gallery
In this repository, you'll find a csv file called ```team.csv```. This is the csv file you should update with the names of the new team members, their pronouns, their positions on the team, and the location of their photos. 

Steps to update the gallery:
1 Add the new team photos in a new folder, or put them in the old one, and name them WITHOUT any spaces ("First_last.jpeg" rather than "First last.jpeg")
2 Update the ```team.csv``` file with all of the information for each team member
3 Run the code on a local server to check that the changes are correct
4 Push the changes to the repo

Things to keep in mind:
1. Do NOT change the names of the columns, unless you commit to propagating the change of the column names in the code where they're used. 
2. In the ```photo``` column, make sure to use "" marks around the photo locations. Double check that the names of the locations are relative to the project, so if you make a new folder for the photos and delete the old one, use the location ```"NEW_FOLDER_NAME/IMAGE_NAME.jpeg"```.
3. If you can get all of the images in the same aspect ratios, it will look much cleaner on the site. This is difficult in times of Corona when you can't get together to have team photos taken, so it's not a huge concern either way.

### Updating the sponsors page
This is the easiest thing to update! 

Steps to update the sponsor pagge:
1. Replace the current ```sponsors.png``` image with another image with th eexact same name and file extension. 
2. Check on a local server that your new ```sponsors.png``` will propagate through and be used everywhere where sponsors are mentioned.
3. Push the changes to the repo

### Updating the past years page
This will require updates for every single ```.html``` file, so double check that you have updated each file on a local server before pushing.

Steps to update the past years page:
1. Add your year's concrete canoe report inside of the ```canoe_reports``` folder in the repo. Make sure to name it ```YOURYEARHERE_report.pdf```
2. Update the navigational bar for each ```.html``` file with this (note where YOURHEARHERE is):

```html
        <div class="navbar-dropdown">
          <a class="navbar-item" href="past_year.html" onmousedown="passYear(YOURHEARHERE)">
            YOURHEARHERE
          </a>
          <a class="navbar-item" href="past_year.html" onmousedown="passYear(2020)">
            2020
          </a>
          <a class="navbar-item" href="past_year.html" onmousedown="passYear(2019)">
            2019
          </a>
          <a class="navbar-item" href="past_year.html" onmousedown="passYear(2018)">
            2018
          </a>
          <a class="navbar-item" href="past_year.html" onmousedown="passYear(2017)">
            2017
          </a>
          <a class="navbar-item" href="past_year.html" onmousedown="passYear(2016)">
            2016
          </a>
          <a class="navbar-item" href="past_year.html" onmousedown="passYear(2015)">
            2015
          </a>
          <a class="navbar-item" href="past_year.html" onmousedown="passYear(2014)">
            2014
          </a>
```

4. Make sure that you are passing in the right year in passYear()
5. Run the code on a local server to check that the changes are correct
6. Push the changes to the repo

## If you want to make style changes
Remember to update the name of the css files if you want to change any styling elements--this will force an update to the cache of any people who have loaded the website previously so that the changes are live to them!

## Got questions? Need access to something? 
Email me, the old webmaster, at aplukis@asu.edu. 
If for some reason that's not working, you can reach out to Edward Apraku, the project manager the year this website was made, and he will put you into contact with me.
